# Deployment Guide - Vernon Cyber Security Solutions

## Production Deployment Overview

This guide covers deploying Vernon Cyber Security Solutions to a production environment with proper security, monitoring, and backup configurations.

## Prerequisites

### Server Requirements

- **Operating System**: Ubuntu 20.04 LTS or newer
- **Memory**: Minimum 4GB RAM (8GB recommended)
- **CPU**: 2+ cores (4+ recommended)
- **Storage**: 50GB+ SSD storage
- **Network**: Public IP address with ports 80 and 443 accessible

### Software Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install additional tools
sudo apt install -y git nginx certbot python3-certbot-nginx
```

## SSL Certificate Setup

### Using Let's Encrypt (Recommended)

```bash
# Install SSL certificate
sudo certbot --nginx -d vernoncybersec.ca -d www.vernoncybersec.ca

# Verify auto-renewal
sudo certbot renew --dry-run
```

### Using Custom Certificate

```bash
# Create SSL directory
mkdir -p /opt/vernon-cybersec/nginx/ssl

# Copy your certificates
sudo cp your-certificate.crt /opt/vernon-cybersec/nginx/ssl/cert.pem
sudo cp your-private-key.key /opt/vernon-cybersec/nginx/ssl/private.key
sudo chmod 600 /opt/vernon-cybersec/nginx/ssl/*
```

## Application Deployment

### 1. Clone Repository

```bash
cd /opt
sudo git clone https://github.com/your-org/vernon-cybersec.git
sudo chown -R $USER:$USER vernon-cybersec
cd vernon-cybersec
```

### 2. Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit production configuration
nano .env
```

**Key Production Settings:**

```bash
# Environment
NODE_ENV=production

# Security
JWT_SECRET=your_super_secure_production_jwt_secret_minimum_32_chars
SESSION_SECRET=your_production_session_secret

# Database
DB_PASSWORD=your_very_secure_database_password

# URLs
FRONTEND_URL=https://vernoncybersec.ca
BACKEND_URL=https://api.vernoncybersec.ca
NEXT_PUBLIC_API_URL=https://api.vernoncybersec.ca

# Security Settings
FORCE_HTTPS=true
CORS_ORIGINS=https://vernoncybersec.ca

# Email Configuration
SMTP_HOST=smtp.your-provider.com
SMTP_USER=noreply@vernoncybersec.ca
SMTP_PASS=your_email_password

# Monitoring
LOG_LEVEL=warn
ENABLE_METRICS=true
```

### 3. Production Docker Compose

Create `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    restart: unless-stopped
    environment:
      POSTGRES_DB: cybersec_db
      POSTGRES_USER: cybersec_user
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./backups:/backups
    networks:
      - cybersec_network
    # No external port exposure for security

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.prod
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://cybersec_user:${DB_PASSWORD}@postgres:5432/cybersec_db
      - JWT_SECRET=${JWT_SECRET}
      - SESSION_SECRET=${SESSION_SECRET}
    depends_on:
      - postgres
      - redis
    networks:
      - cybersec_network
    deploy:
      resources:
        limits:
          memory: 1G
          cpus: '0.5'

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
    depends_on:
      - backend
    networks:
      - cybersec_network
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '0.25'

  nginx:
    build:
      context: ./nginx
      dockerfile: Dockerfile.prod
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/ssl:/etc/nginx/ssl:ro
      - ./logs/nginx:/var/log/nginx
    depends_on:
      - frontend
      - backend
    networks:
      - cybersec_network

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    command: redis-server --appendonly yes --requirepass ${REDIS_PASSWORD}
    volumes:
      - redis_data:/data
    networks:
      - cybersec_network

volumes:
  postgres_data:
  redis_data:

networks:
  cybersec_network:
    driver: bridge
```

### 4. Build and Deploy

```bash
# Build and start services
docker-compose -f docker-compose.prod.yml up -d --build

# Run database migrations
docker-compose -f docker-compose.prod.yml exec backend npm run db:migrate

# Verify deployment
docker-compose -f docker-compose.prod.yml ps
```

## Nginx Production Configuration

Create `nginx/nginx.prod.conf`:

```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'" always;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=contact:10m rate=1r/s;

    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Redirect HTTP to HTTPS
    server {
        listen 80;
        server_name vernoncybersec.ca www.vernoncybersec.ca;
        return 301 https://$server_name$request_uri;
    }

    # Main website
    server {
        listen 443 ssl http2;
        server_name vernoncybersec.ca www.vernoncybersec.ca;

        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/private.key;

        # Frontend
        location / {
            proxy_pass http://frontend:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # API endpoints
        location /api/ {
            limit_req zone=api burst=20 nodelay;
            proxy_pass http://backend:3001/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }

        # Contact form rate limiting
        location /api/contacts {
            limit_req zone=contact burst=5 nodelay;
            proxy_pass http://backend:3001/contacts;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

## Database Backup Strategy

### Automated Backups

Create `scripts/backup.sh`:

```bash
#!/bin/bash

BACKUP_DIR="/opt/vernon-cybersec/backups"
DATE=$(date +%Y%m%d_%H%M%S)
CONTAINER_NAME="vernon-cybersec_postgres_1"

# Create backup
docker exec $CONTAINER_NAME pg_dump -U cybersec_user cybersec_db > $BACKUP_DIR/backup_$DATE.sql

# Compress backup
gzip $BACKUP_DIR/backup_$DATE.sql

# Remove backups older than 30 days
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +30 -delete

echo "Backup completed: backup_$DATE.sql.gz"
```

### Backup Cron Job

```bash
# Add to crontab
crontab -e

# Backup daily at 2 AM
0 2 * * * /opt/vernon-cybersec/scripts/backup.sh
```

## Monitoring and Logging

### Log Configuration

```bash
# Create log directories
sudo mkdir -p /var/log/vernon-cybersec/{nginx,app}
sudo chown -R $USER:$USER /var/log/vernon-cybersec
```

### Health Checks

Create `scripts/health-check.sh`:

```bash
#!/bin/bash

# Check if all services are running
docker-compose -f /opt/vernon-cybersec/docker-compose.prod.yml ps

# Check website accessibility
curl -f https://vernoncybersec.ca/health || echo "Website health check failed"

# Check API accessibility  
curl -f https://api.vernoncybersec.ca/health || echo "API health check failed"

# Check database connectivity
docker-compose -f /opt/vernon-cybersec/docker-compose.prod.yml exec backend npm run db:test || echo "Database check failed"
```

### System Monitoring

Install monitoring tools:

```bash
# Install monitoring tools
sudo apt install -y htop iotop netstat-nat

# Setup log rotation
sudo nano /etc/logrotate.d/vernon-cybersec
```

Add to logrotate config:

```
/var/log/vernon-cybersec/*/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 0644 root root
    postrotate
        docker-compose -f /opt/vernon-cybersec/docker-compose.prod.yml restart nginx
    endscript
}
```

## Security Hardening

### Firewall Configuration

```bash
# Configure UFW firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### System Updates

```bash
# Enable automatic security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
```

### Docker Security

```bash
# Run Docker security scan
docker scan vernon-cybersec_backend
docker scan vernon-cybersec_frontend

# Update base images regularly
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d
```

## Performance Optimization

### Database Optimization

```sql
-- Connect to database
docker-compose exec postgres psql -U cybersec_user cybersec_db

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published, published_at);
```

### Caching Strategy

```nginx
# Add to nginx config
location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## Disaster Recovery

### Backup Restoration

```bash
# Stop services
docker-compose -f docker-compose.prod.yml down

# Restore database from backup
gunzip -c /path/to/backup.sql.gz | docker-compose exec -T postgres psql -U cybersec_user cybersec_db

# Restart services
docker-compose -f docker-compose.prod.yml up -d
```

### High Availability Setup

For mission-critical deployments:

1. **Load Balancer**: Use multiple server instances behind a load balancer
2. **Database Clustering**: PostgreSQL master-slave replication
3. **CDN**: Use CloudFlare or similar for static asset delivery
4. **Monitoring**: Implement Prometheus + Grafana for metrics

## Maintenance Procedures

### Regular Updates

```bash
# Weekly maintenance script
#!/bin/bash

cd /opt/vernon-cybersec

# Pull latest code
git pull origin main

# Update Docker images
docker-compose -f docker-compose.prod.yml pull

# Rebuild and restart
docker-compose -f docker-compose.prod.yml up -d --build

# Run health checks
./scripts/health-check.sh
```

### Emergency Procedures

1. **Service Failure**: Restart individual services
2. **Database Issues**: Check logs and restore from backup if needed
3. **SSL Expiry**: Renew certificates with Let's Encrypt
4. **Security Breach**: Isolate affected services, review logs, update passwords

## Contact Information

For deployment support:
- **Technical Support**: support@vernoncybersec.ca
- **Emergency Contact**: +1-250-555-0123
- **Documentation**: https://docs.vernoncybersec.ca

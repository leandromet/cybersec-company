# Docker Desktop Setup Guide

This guide helps you set up and run the Vernon Cyber Security Solutions application using Docker Desktop.

## Prerequisites

1. **Docker Desktop** - Download and install from [docker.com](https://www.docker.com/products/docker-desktop/)
2. **Git** - To clone the repository
3. **Text Editor** - To configure environment variables

## Quick Start with Docker Desktop

### 1. Start Docker Desktop
Make sure Docker Desktop is running on your system. You should see the Docker icon in your system tray/menu bar.

### 2. Clone and Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd cybersec-company

# Copy environment configuration
cp .env.example .env

# Edit .env with your settings
# At minimum, set DB_PASSWORD and JWT_SECRET
```

### 3. Start the Application
```bash
# Using the convenience script
./docker-commands.sh start

# Or using docker compose directly
docker compose up -d
```

### 4. Access the Application
- **Frontend**: http://localhost:5000
- **Backend API**: http://localhost:5001
- **Database**: localhost:5455

## Docker Desktop Commands

### Using the Convenience Script
The `docker-commands.sh` script provides easy commands for common operations:

```bash
# Start the application
./docker-commands.sh start

# Check status
./docker-commands.sh status

# View logs
./docker-commands.sh logs

# View specific service logs
./docker-commands.sh logs backend

# Check health
./docker-commands.sh health

# Connect to database
./docker-commands.sh db

# Open shell in a container
./docker-commands.sh shell backend

# Stop the application
./docker-commands.sh stop

# Clean up everything
./docker-commands.sh clean
```

### Using Docker Compose Directly

```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Check status
docker compose ps

# Stop services
docker compose down

# Rebuild images
docker compose build

# Start with build
docker compose up -d --build
```

## Docker Desktop Features

### Container Management
- Use Docker Desktop's GUI to view running containers
- Monitor resource usage (CPU, Memory, Disk)
- View logs directly in the interface
- Restart individual services

### Volume Management
- Database data is persisted in `postgres_data` volume
- Redis data is persisted in `redis_data` volume
- View and manage volumes in Docker Desktop

### Network Inspection
- All services run on the `cybersec_network` bridge network
- Services can communicate using service names (e.g., `postgres`, `backend`)

## Development Workflow

### Live Reload
Both frontend and backend support live reload in development:
- Frontend: Next.js hot reload for instant UI updates
- Backend: NestJS with file watching for API changes

### Database Changes
```bash
# Access database shell
./docker-commands.sh db

# Or using docker compose
docker compose exec postgres psql -U cybersec_user -d cybersec_db
```

### Debugging
```bash
# View real-time logs
./docker-commands.sh logs

# View specific service logs
./docker-commands.sh logs backend
./docker-commands.sh logs frontend

# Check service health
./docker-commands.sh health
```

## Common Operations

### Environment Variables
Edit the `.env` file to configure:
- Database passwords
- JWT secrets
- API URLs
- Company information

### Database Reset
```bash
# Stop services
./docker-commands.sh stop

# Remove volumes (this will delete all data!)
docker compose down -v

# Start fresh
./docker-commands.sh start
```

### Image Updates
```bash
# Rebuild images
./docker-commands.sh build

# Or rebuild and start
docker compose up -d --build
```

## Troubleshooting

### Port Conflicts
If ports 5000, 5001, 5455, or 6389 are in use:
1. Stop other services using these ports
2. Or modify ports in `docker-compose.yml`

### Memory Issues
If containers are slow or failing:
1. Increase Docker Desktop memory allocation
2. Close unnecessary applications
3. Use `./docker-commands.sh clean` to free resources

### Database Connection Issues
```bash
# Check if database is ready
./docker-commands.sh health

# View database logs
./docker-commands.sh logs postgres

# Restart database service
docker compose restart postgres
```

### Build Failures
```bash
# Clean build cache
docker system prune -f

# Rebuild from scratch
docker compose build --no-cache
```

## Production Deployment

For production deployment, see [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions including:
- SSL certificate setup
- Environment security
- Monitoring configuration
- Backup strategies

## Support

If you encounter issues:
1. Check Docker Desktop is running and has sufficient resources
2. Verify all environment variables are set in `.env`
3. Use `./docker-commands.sh health` to check service status
4. Review logs with `./docker-commands.sh logs`

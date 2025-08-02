# Vernon Cyber Security Solutions

A modern, professional website for Vernon Cyber Security Solutions - providing comprehensive cybersecurity services to small and medium businesses in Vernon, BC and surrounding areas.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS
- **Backend**: NestJS with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis
- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Nginx

## 🏗️ Architecture

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    Nginx    │────│   Next.js   │    │   NestJS    │
│ (Port 80)   │    │ (Port 5000) │────│ (Port 5001) │
└─────────────┘    └─────────────┘    └─────────────┘
                                               │
                   ┌─────────────┐    ┌─────────────┐
                   │    Redis    │    │ PostgreSQL  │
                   │ (Port 6389) │    │ (Port 5455) │
                   └─────────────┘    └─────────────┘
```

## 🛠️ Development Setup

1. **Clone and navigate**:
   ```bash
   cd cybersec-company
   ```

2. **Environment setup**:
   ```bash
   cp .env.example .env
   # Update the environment variables
   ```

3. **Start services**:
   ```bash
   docker-compose up -d
   ```

4. **Database setup**:
   ```bash
   # Enter backend container
   docker-compose exec backend sh
   
   # Run migrations
   npm run db:migrate
   
   # Seed database
   npm run db:seed
   ```

5. **Access the application**:
   - Frontend: http://localhost:5000
   - Backend API: http://localhost:5001
   - API Documentation: http://localhost:5001/api

## 📋 Features

### 🎯 Core Services
- **Security Assessments**: Comprehensive vulnerability assessments
- **Compliance Consulting**: PIPEDA, SOC 2, ISO 27001 guidance
- **Incident Response**: 24/7 emergency cybersecurity support
- **Security Training**: Employee awareness and training programs
- **Monitoring Services**: Continuous security monitoring
- **Risk Management**: Cyber insurance and risk assessments

### 💻 Website Features
- **Modern UI/UX**: Responsive design with dark/light theme
- **Contact Forms**: Multi-step contact and assessment request forms
- **Client Portal**: Secure client dashboard and document sharing
- **Blog System**: Security tips and threat alerts
- **Testimonials**: Client success stories
- **Service Booking**: Online consultation scheduling

### 🔒 Security Features
- **Rate Limiting**: API and contact form protection
- **Security Headers**: OWASP recommended headers
- **Input Validation**: Comprehensive form validation
- **Authentication**: JWT-based secure authentication
- **Data Encryption**: Encrypted data storage and transmission

## 🌟 Business Focus

Vernon Cyber Security Solutions specializes in:
- **Small & Medium Businesses** in Vernon, BC
- **Local Industries**: Tourism, agriculture, retail, professional services
- **Compliance Requirements**: Canadian privacy laws (PIPEDA)
- **Budget-Friendly Solutions**: Scalable security packages
- **Personal Service**: Local, accessible cybersecurity expertise

## 🚀 Production Deployment

1. **SSL Configuration**: Update nginx.conf with SSL certificates
2. **Environment Variables**: Set production values in .env
3. **Database**: Configure production PostgreSQL instance
4. **Monitoring**: Set up logging and monitoring services
5. **Backups**: Configure automated database backups

## 📞 Contact Information

- **Address**: 3200 32nd Ave, Vernon, BC V1T 2M8
- **Phone**: +1-250-555-0123
- **Email**: info@vernoncybersec.ca
- **Website**: https://vernoncybersec.ca

## 🤝 Contributing

This is a proprietary project for Vernon Cyber Security Solutions. For development inquiries, please contact the development team.

## 📄 License

Proprietary - All rights reserved by Vernon Cyber Security Solutions.

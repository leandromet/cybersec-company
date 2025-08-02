#!/bin/bash

# Vernon Cyber Security Solutions - Development Setup Script

echo "🔒 Setting up Vernon Cyber Security Solutions development environment..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env .env.local
    echo "✅ Created .env file. Please update the environment variables before continuing."
    echo "🔧 Run 'nano .env' to edit the configuration."
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p database/init
mkdir -p nginx/ssl
mkdir -p uploads
mkdir -p logs

# Set proper permissions
echo "🔐 Setting permissions..."
chmod +x scripts/*.sh 2>/dev/null || true

# Build and start services
echo "🐳 Building and starting Docker services..."
docker-compose down
docker-compose up -d --build

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 10

# Run database migrations
echo "🗄️ Running database migrations..."
docker-compose exec -T backend npm run db:migrate

# Seed database
echo "🌱 Seeding database..."
docker-compose exec -T backend npm run db:seed

# Show status
echo "📊 Service status:"
docker-compose ps

echo ""
echo "🎉 Setup complete!"
echo ""
echo "🌐 Access your application:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:3001"
echo "   API Docs: http://localhost:3001/api"
echo ""
echo "🔧 Useful commands:"
echo "   View logs: docker-compose logs -f"
echo "   Stop services: docker-compose down"
echo "   Restart: docker-compose restart"
echo ""
echo "📧 For support: info@vernoncybersec.ca"

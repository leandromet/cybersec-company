#!/bin/bash
# Docker Desktop Commands for Vernon Cyber Security Solutions
# This script provides convenient commands for managing the application with Docker Desktop

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Vernon Cyber Security Solutions - Docker Management${NC}"
echo "=================================================="

# Function to check if Docker Desktop is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        echo -e "${RED}Error: Docker Desktop is not running. Please start Docker Desktop first.${NC}"
        exit 1
    fi
    echo -e "${GREEN}✓ Docker Desktop is running${NC}"
}

# Function to check if .env file exists
check_env() {
    if [ ! -f .env ]; then
        echo -e "${YELLOW}Warning: .env file not found. Creating from .env.example...${NC}"
        if [ -f .env.example ]; then
            cp .env.example .env
            echo -e "${YELLOW}Please edit .env file with your configuration before running the application.${NC}"
        else
            echo -e "${RED}Error: .env.example file not found. Please create environment configuration.${NC}"
            exit 1
        fi
    fi
}

# Main command handling
case "$1" in
    "start"|"up")
        echo -e "${BLUE}Starting Vernon Cyber Security application...${NC}"
        check_docker
        check_env
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            echo -e "${YELLOW}Starting in PRODUCTION mode${NC}"
            docker compose -f docker-compose.prod.yml up -d
        else
            echo -e "${YELLOW}Starting in DEVELOPMENT mode (with Yarn and hot reload)${NC}"
            docker compose up -d
        fi
        echo -e "${GREEN}✓ Application started successfully!${NC}"
        echo -e "${BLUE}Frontend: http://localhost:5000${NC}"
        echo -e "${BLUE}Backend API: http://localhost:5001${NC}"
        echo -e "${BLUE}Database: localhost:5455${NC}"
        ;;
    
    "stop"|"down")
        echo -e "${BLUE}Stopping Vernon Cyber Security application...${NC}"
        check_docker
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            docker compose -f docker-compose.prod.yml down
        else
            docker compose down
        fi
        echo -e "${GREEN}✓ Application stopped${NC}"
        ;;
    
    "restart")
        echo -e "${BLUE}Restarting Vernon Cyber Security application...${NC}"
        check_docker
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            docker compose -f docker-compose.prod.yml down
            docker compose -f docker-compose.prod.yml up -d
        else
            docker compose down
            docker compose up -d
        fi
        echo -e "${GREEN}✓ Application restarted${NC}"
        ;;
    
    "logs")
        echo -e "${BLUE}Showing application logs...${NC}"
        check_docker
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            if [ -n "$3" ]; then
                docker compose -f docker-compose.prod.yml logs -f "$3"
            else
                docker compose -f docker-compose.prod.yml logs -f
            fi
        else
            if [ -n "$2" ]; then
                docker compose logs -f "$2"
            else
                docker compose logs -f
            fi
        fi
        ;;
    
    "status")
        echo -e "${BLUE}Application status:${NC}"
        check_docker
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            docker compose -f docker-compose.prod.yml ps
        else
            docker compose ps
        fi
        ;;
    
    "build")
        echo -e "${BLUE}Building application images...${NC}"
        check_docker
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            echo -e "${YELLOW}Building PRODUCTION images with Yarn${NC}"
            docker compose -f docker-compose.prod.yml build
        else
            echo -e "${YELLOW}Building DEVELOPMENT images with Yarn${NC}"
            docker compose build
        fi
        echo -e "${GREEN}✓ Images built successfully${NC}"
        ;;
    
    "clean")
        echo -e "${BLUE}Cleaning up Docker resources...${NC}"
        check_docker
        docker compose down -v
        docker compose -f docker-compose.prod.yml down -v 2>/dev/null || true
        docker system prune -f
        echo -e "${GREEN}✓ Cleanup completed${NC}"
        ;;
    
    "shell")
        if [ -n "$2" ] && [ "$2" != "prod" ] && [ "$2" != "production" ]; then
            echo -e "${BLUE}Opening shell in $2 container...${NC}"
            docker compose exec "$2" /bin/sh
        elif [ -n "$3" ] && ([ "$2" = "prod" ] || [ "$2" = "production" ]); then
            echo -e "${BLUE}Opening shell in $3 container (production)...${NC}"
            docker compose -f docker-compose.prod.yml exec "$3" /bin/sh
        else
            echo -e "${YELLOW}Usage: $0 shell <service_name> [prod]${NC}"
            echo -e "${BLUE}Available services: postgres, backend, frontend, nginx, redis${NC}"
        fi
        ;;
    
    "db")
        echo -e "${BLUE}Connecting to PostgreSQL database...${NC}"
        check_docker
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            docker compose -f docker-compose.prod.yml exec postgres psql -U cybersec_user -d cybersec_db
        else
            docker compose exec postgres psql -U cybersec_user -d cybersec_db
        fi
        ;;
    
    "health")
        echo -e "${BLUE}Checking service health...${NC}"
        check_docker
        echo ""
        echo -e "${BLUE}PostgreSQL:${NC}"
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            docker compose -f docker-compose.prod.yml exec postgres pg_isready -U cybersec_user -d cybersec_db || echo -e "${RED}❌ Database not ready${NC}"
        else
            docker compose exec postgres pg_isready -U cybersec_user -d cybersec_db || echo -e "${RED}❌ Database not ready${NC}"
        fi
        
        echo -e "${BLUE}Backend API:${NC}"
        wget --no-verbose --tries=1 --spider http://localhost:5001 2>/dev/null && echo -e "${GREEN}✓ Backend healthy${NC}" || echo -e "${RED}❌ Backend not responding${NC}"
        
        echo -e "${BLUE}Frontend:${NC}"
        wget --no-verbose --tries=1 --spider http://localhost:5000 2>/dev/null && echo -e "${GREEN}✓ Frontend healthy${NC}" || echo -e "${RED}❌ Frontend not responding${NC}"
        
        echo -e "${BLUE}Redis:${NC}"
        if [ "$2" = "prod" ] || [ "$2" = "production" ]; then
            docker compose -f docker-compose.prod.yml exec redis redis-cli ping | grep PONG >/dev/null && echo -e "${GREEN}✓ Redis healthy${NC}" || echo -e "${RED}❌ Redis not responding${NC}"
        else
            docker compose exec redis redis-cli ping | grep PONG >/dev/null && echo -e "${GREEN}✓ Redis healthy${NC}" || echo -e "${RED}❌ Redis not responding${NC}"
        fi
        ;;
    
    "yarn")
        if [ -n "$2" ] && [ -n "$3" ]; then
            service="$2"
            shift 2
            echo -e "${BLUE}Running yarn $* in $service container...${NC}"
            docker compose exec "$service" yarn "$@"
        else
            echo -e "${YELLOW}Usage: $0 yarn <service> <yarn_command>${NC}"
            echo -e "${BLUE}Example: $0 yarn backend install${NC}"
            echo -e "${BLUE}Example: $0 yarn frontend add lodash${NC}"
        fi
        ;;
    
    "help"|*)
        echo -e "${BLUE}Available commands:${NC}"
        echo ""
        echo -e "${GREEN}start|up [prod]${NC}     - Start the application (add 'prod' for production mode)"
        echo -e "${GREEN}stop|down [prod]${NC}    - Stop the application"
        echo -e "${GREEN}restart [prod]${NC}      - Restart the application"
        echo -e "${GREEN}logs [service] [prod]${NC} - Show logs (all services or specific service)"
        echo -e "${GREEN}status [prod]${NC}       - Show container status"
        echo -e "${GREEN}build [prod]${NC}        - Build application images"
        echo -e "${GREEN}clean${NC}               - Stop and clean up all resources"
        echo -e "${GREEN}shell <service> [prod]${NC} - Open shell in container"
        echo -e "${GREEN}db [prod]${NC}           - Connect to PostgreSQL database"
        echo -e "${GREEN}health [prod]${NC}       - Check service health status"
        echo -e "${GREEN}yarn <service> <cmd>${NC} - Run yarn command in service container"
        echo -e "${GREEN}help${NC}                - Show this help message"
        echo ""
        echo -e "${BLUE}Examples:${NC}"
        echo "  $0 start              # Start in development mode (with Yarn)"
        echo "  $0 start prod         # Start in production mode"
        echo "  $0 logs backend       # Show backend logs (dev mode)"
        echo "  $0 logs backend prod  # Show backend logs (prod mode)"
        echo "  $0 shell backend      # Open shell in backend container"
        echo "  $0 yarn backend add @types/node  # Add package to backend"
        echo "  $0 yarn frontend install         # Install frontend deps"
        echo "  $0 db                 # Connect to database"
        ;;
esac

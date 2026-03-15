# CodeCobra Docker Deployment Guide

This guide provides step-by-step instructions for deploying CodeCobra using Docker.

## 🚀 Quick Deployment

### Option 1: Direct Docker Run
```bash
# Pull and run the latest version
docker pull mallik008/codecobra:latest
docker run -d -p 3000:80 --name codecobra mallik008/codecobra:latest

# Access at http://localhost:3000
```

### Option 2: Docker Compose (Recommended)

1. Create `docker-compose.yml`:
```yaml
version: '3.8'

services:
  codecobra:
    image: mallik008/codecobra:latest
    ports:
      - "3000:80"
    container_name: codecobra-app
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    
    # Health check
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:80"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

2. Deploy:
```bash
docker-compose up -d
```

## 🔧 Configuration Options

### Port Configuration
Change the port mapping in docker-compose.yml:
```yaml
ports:
  - "8080:80"  # Application will be available on port 8080
```

### Environment Variables
Available environment variables:
- `NODE_ENV`: Set to `production` for production deployment

### Volume Mounting (Optional)
If you need to persist any data or customize configuration:
```yaml
volumes:
  - ./custom-nginx.conf:/etc/nginx/conf.d/default.conf
```

## 🌐 Production Deployment

### Cloud Platforms

#### AWS ECS
```bash
# Create task definition with mallik008/codecobra:latest
# Configure service with desired capacity
# Set up load balancer if needed
```

#### Google Cloud Run
```bash
gcloud run deploy codecobra \
  --image=mallik008/codecobra:latest \
  --platform=managed \
  --port=80 \
  --allow-unauthenticated
```

#### Azure Container Instances
```bash
az container create \
  --resource-group myResourceGroup \
  --name codecobra \
  --image mallik008/codecobra:latest \
  --dns-name-label codecobra-app \
  --ports 80
```

### VPS Deployment

1. **Install Docker**:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

2. **Deploy Application**:
```bash
# Create directory
mkdir codecobra && cd codecobra

# Create docker-compose.yml (see above)
# Deploy
docker-compose up -d

# Set up reverse proxy (optional)
# Configure SSL with Let's Encrypt (optional)
```

## 📊 Monitoring & Maintenance

### View Logs
```bash
# Docker logs
docker logs codecobra

# Docker Compose logs
docker-compose logs -f
```

### Health Check
```bash
# Check container status
docker ps

# Test health endpoint
curl http://localhost:3000
```

### Updates
```bash
# Pull latest image
docker-compose pull

# Restart with new image
docker-compose up -d
```

### Backup & Restore
Since CodeCobra is a stateless application, no special backup procedures are needed. Simply redeploy with the same configuration.

## 🔒 Security Considerations

1. **Firewall**: Only expose necessary ports (80/443)
2. **Updates**: Regularly update to latest image versions
3. **SSL**: Use reverse proxy (nginx, traefik) for HTTPS
4. **Network**: Use Docker networks for multi-container setups

## 🐛 Troubleshooting

### Common Issues

**Container won't start**:
```bash
# Check logs
docker logs codecobra

# Check port conflicts
netstat -tulpn | grep :3000
```

**Application not accessible**:
- Verify port mapping: `-p 3000:80`
- Check firewall settings
- Ensure Docker is running

**Performance issues**:
- Monitor resource usage: `docker stats`
- Consider resource limits in docker-compose.yml

### Resource Limits (Optional)
```yaml
services:
  codecobra:
    image: mallik008/codecobra:latest
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: "0.5"
```

## 📞 Support

For deployment issues:
1. Check container logs
2. Verify network connectivity
3. Review Docker/Docker Compose documentation
4. Create an issue on GitHub with deployment details

---

**Happy Deploying! 🚀**

# 🐍 CodeCobra - Interactive Python Learning Platform

CodeCobra is a modern, interactive Python learning platform built with React and Vite. It features a beautiful black and purple theme with an engaging user interface designed to make learning Python fun and effective.

## ✨ Features

- **Interactive Python Editor**: Write and execute Python code directly in the browser
- **Progressive Learning**: Structured levels from beginner to advanced
- **Real-time Feedback**: Instant code execution and result validation
- **Beautiful UI**: Modern dark theme with purple accents and smoke effects
- **Progress Tracking**: Monitor your learning journey with streak counters
- **Hint System**: Get helpful hints when you're stuck
- **Responsive Design**: Works perfectly on desktop and mobile devices

## � Docker Hub Repository

This application is available as a Docker image on Docker Hub:

```bash
docker pull mallik008/codecobra:latest
```

### Available Tags
- `latest` - Latest stable version
- `v1.0` - Version 1.0 release

## �🚀 Quick Start with Docker

### Using Docker (Recommended)

```bash
# Pull and run the latest version
docker run -d -p 3000:80 --name codecobra mallik008/codecobra:latest

# Access the application at http://localhost:3000
```

### Using Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  codecobra:
    image: mallik008/codecobra:latest
    ports:
      - "3000:80"
    container_name: codecobra-app
    restart: unless-stopped
```

Then run:
```bash
docker-compose up -d
```

## 🐳 Building Docker Image Locally

If you want to build the Docker image yourself:

```bash
# Clone the repository
git clone https://github.com/Mallikarjun-P-23/CodeCobra.git
cd CodeCobra

# Build the Docker image
docker build -t codecobra .

# Run locally built image
docker run -d -p 3000:80 --name codecobra-local codecobra
```

## 🛠️ Local Development

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mallikarjun-P-23/CodeCobra.git
   cd CodeCobra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start learning Python interactively!

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎯 How to Use

1. **Start Learning**: Begin with Level 1 and work your way up
2. **Write Code**: Use the built-in Python editor to write your solutions
3. **Run & Test**: Click "Run Code" to execute and validate your solution
4. **Get Feedback**: Receive instant feedback on your code
5. **Use Hints**: Click "Show Hint" if you need guidance
6. **Track Progress**: Monitor your streak and completed levels
7. **Advance**: Complete levels to unlock new challenges


## 🔧 Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Python Execution**: Skulpt (Python-to-JavaScript compiler)
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 📚 Learning Path

The platform includes structured levels covering:
- Basic Python syntax
- Variables and data types
- Control structures
- Functions and modules
- Object-oriented programming
- Advanced Python concepts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Acknowledgments

- Built with React and Vite for optimal performance
- Powered by Skulpt for in-browser Python execution
- Styled with Tailwind CSS for modern UI
- Background image from Vecteezy

## 📁 Project Structure

```
CodeCobra/
├── src/
│   ├── components/
│   │   ├── CodeEditor.jsx       # Python code editor component
│   │   ├── PythonSkulptRunner.jsx # Python execution engine
│   │   ├── LevelSelector.jsx    # Level selection interface
│   │   ├── Header.jsx           # Application header
│   │   ├── Navigation.jsx       # Navigation component
│   │   └── Feedback.jsx         # User feedback component
│   ├── data/
│   │   └── CodeCobraLevels.js   # Learning level configurations
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── CodeCobraPage.jsx    # Main learning interface
│   │   └── PyLingoPage.jsx      # Additional features
│   └── assets/                  # Static assets
├── public/                      # Public assets
├── Dockerfile                   # Multi-stage Docker build
├── nginx.conf                   # Nginx configuration for production
├── docker-compose.yml           # Docker Compose setup
├── .dockerignore               # Docker ignore file
└── package.json                # Dependencies and scripts
```

## 🔧 Docker Configuration

### Multi-stage Build
The Dockerfile uses a multi-stage build process:
1. **Build Stage**: Uses Node.js to build the React application
2. **Production Stage**: Uses Nginx to serve the static files

### Nginx Configuration
- Optimized for Single Page Applications (SPA)
- Client-side routing support
- Static asset caching
- Security headers
- Gzip compression

## 🚀 Production Deployment

The containerized application is production-ready and can be deployed to:
- **Cloud Platforms**: AWS, Azure, Google Cloud Platform
- **Container Orchestration**: Kubernetes, Docker Swarm
- **VPS**: Any server with Docker installed
- **CI/CD**: Easily integrate with GitHub Actions, GitLab CI, etc.

### Health Checks
The Docker Compose configuration includes health checks to ensure the application is running properly.

---

**Happy Coding! 🐍✨**

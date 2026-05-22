# 💬 Gup-Sup

A modern, lightweight real-time chat application built with cutting-edge JavaScript. Gup-Sup provides seamless messaging, instant notifications, and an intuitive user interface for connecting with friends and colleagues.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Language Composition](https://img.shields.io/badge/JavaScript-99.3%25-yellow.svg)
![Language Composition](https://img.shields.io/badge/Other-0.7%25-lightgrey.svg)
![Deployment](https://img.shields.io/badge/deployment-Render-46E3B7.svg)

---

## 🚀 Quick Links

- **Live Application:** [Gup-Sup Chat App](https://gup-sup-byanurag-1.onrender.com/)
- **GitHub Repository:** [Rosenmunda/Gup-Sup_byAnurag](https://github.com/Rosenmunda/Gup-Sup_byAnurag)
- **Documentation:** [Full Setup Guide](#-installation--setup)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Usage Guide](#-usage-guide)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## ⭐ Features

### 💬 Core Messaging
- 🔄 **Real-time Chat** - Instant message delivery with socket connections
- 👥 **User Groups** - Create and manage group conversations
- 🔔 **Live Notifications** - Get instant alerts for new messages
- 📝 **Message History** - Access complete chat history anytime
- ✏️ **Message Editing** - Edit or delete sent messages

### 🎯 User Experience
- 👤 **User Profiles** - Customize your profile with avatar and bio
- 🔍 **Search Functionality** - Find users and conversations quickly
- 🌙 **Dark/Light Mode** - Choose your preferred theme
- 📱 **Responsive Design** - Perfect experience on all devices
- ⚡ **Fast & Lightweight** - Optimized performance and quick load times

### 🔐 Security & Privacy
- 🔐 **User Authentication** - Secure login and registration
- 🛡️ **Password Encryption** - Safe credential storage
- 🔒 **Private Messaging** - End-to-end private conversations
- 👁️ **Privacy Controls** - Control who can message you
- 📊 **Session Management** - Automatic logout for security

### 🛠️ Developer Features
- 🌐 **REST API** - Comprehensive API for integrations
- 📡 **WebSocket Support** - Real-time bidirectional communication
- 💾 **Data Persistence** - MongoDB for reliable data storage
- 🔌 **Modular Architecture** - Clean, maintainable code structure
- 🧪 **Error Handling** - Robust error management and logging

---

## 🛠️ Tech Stack

### Frontend
| Technology | Percentage | Purpose |
|-----------|-----------|---------|
| **JavaScript** | 99.3% | Core application logic, real-time features, UI interactions |
| **Other** | 0.7% | Configuration and support files |

### Full Stack
| Layer | Technology | Details |
|-------|-----------|---------|
| **Frontend** | Vanilla JavaScript, HTML5, CSS3 | Lightweight SPA with no framework overhead |
| **Real-time** | WebSocket, Socket.io | Instant message delivery |
| **Backend** | Node.js, Express.js | Server-side logic and routing |
| **Database** | MongoDB | NoSQL database for users and messages |
| **Authentication** | JWT, bcrypt | Secure user authentication |
| **Deployment** | Render | Cloud hosting with automatic deployment |

---

## 📂 Project Structure

```text
Gup-Sup_byAnurag/
├── 📄 index.html                  # Main application entry point
├── 📄 README.md                   # Project documentation (this file)
├── 📄 package.json                # Project metadata and dependencies
├── 📄 .gitignore                  # Git ignore rules
├── 📁 src/
│   ├── 📁 js/
│   │   ├── 📄 app.js              # Main application logic
│   │   ├── 📄 socket.js           # WebSocket connection handler
│   │   ├── 📄 auth.js             # Authentication functions
│   │   ├── 📄 chat.js             # Chat messaging logic
│   │   ├── 📄 ui.js               # UI rendering and updates
│   │   ├── 📄 api.js              # API integration functions
│   │   └── 📄 utils.js            # Utility helper functions
│   ├── 📁 css/
│   │   ├── 📄 main.css            # Main stylesheet
│   │   ├── 📄 theme.css           # Theme and color variables
│   │   ├── 📄 responsive.css      # Mobile-first responsive styles
│   │   └── 📄 animations.css      # Animations and transitions
│   └── 📁 html/
│       ├── 📄 login.html          # Login page
│       ├── 📄 register.html       # Registration page
│       ├── 📄 chat.html           # Main chat interface
│       └── 📄 profile.html        # User profile page
├── 📁 server/
│   ├── 📄 server.js               # Express server setup
│   ├── 📄 socket-handler.js       # WebSocket event handlers
│   ├── 📄 auth-routes.js          # Authentication endpoints
│   ├── 📄 chat-routes.js          # Chat endpoints
│   ├── 📄 user-routes.js          # User endpoints
│   ├── 📄 middleware.js           # Custom middleware
│   ├── 📄 models.js               # Database models
│   └── 📄 .env                    # Environment variables (not committed)
├── 📁 assets/
│   ├── 📁 images/                 # App icons and graphics
│   ├── 📁 avatars/                # Default user avatars
│   └── 📁 fonts/                  # Custom fonts
├── 📁 public/
│   └── 📄 manifest.json           # PWA manifest
└── 📄 vercel.json / render.json   # Deployment configuration
```

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** v14 or higher
- **npm** or **yarn** package manager
- **MongoDB** (local or Atlas)
- Modern web browser
- **Git** (for cloning)

### Local Development Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Rosenmunda/Gup-Sup_byAnurag.git
   cd Gup-Sup_byAnurag
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment**
   ```bash
   # Create .env file
   echo "MONGODB_URI=your_mongodb_connection_string" > .env
   echo "PORT=3000" >> .env
   echo "JWT_SECRET=your_jwt_secret_key" >> .env
   echo "NODE_ENV=development" >> .env
   ```

4. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Access Application**
   - Navigate to `http://localhost:3000` in your browser
   - Server will automatically reload on code changes

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm run start:prod

# Or use PM2 for process management
pm2 start server.js --name "gup-sup"
```

### Docker Setup (Optional)

1. **Build Docker Image**
   ```bash
   docker build -t gup-sup .
   ```

2. **Run Container**
   ```bash
   docker run -p 3000:3000 -e MONGODB_URI=your_uri gup-sup
   ```

---

## 📖 Usage Guide

### For New Users

1. **Create Account**
   - Visit [Gup-Sup Chat App](https://gup-sup-byanurag-1.onrender.com/)
   - Click "Sign Up"
   - Enter email, username, and password
   - Verify email (if required)

2. **Set Up Profile**
   - Add profile picture/avatar
   - Write a bio
   - Customize your preferences

3. **Start Chatting**
   - Search for users
   - Send friend requests
   - Start one-on-one conversations
   - Create or join group chats

### For Active Users

1. **One-on-One Chat**
   - Find user by username
   - Click to open chat
   - Send and receive messages in real-time
   - Share files or media (if supported)

2. **Group Chats**
   - Create new group
   - Add members
   - Set group name and avatar
   - Manage group settings

3. **Chat Features**
   - **Message Reactions** - React to messages with emojis
   - **Typing Indicator** - See when someone is typing
   - **Read Receipts** - Know when messages are read
   - **Search Messages** - Find specific conversations
   - **Pin Important Messages** - Bookmark important content

4. **Settings & Preferences**
   - Privacy settings
   - Notification preferences
   - Theme selection
   - Account security

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development
DEBUG=true

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
MONGODB_NAME=gup_sup_db

# Authentication
JWT_SECRET=your_super_secret_jwt_key_min_32_chars
JWT_EXPIRE=7d

# Socket.io
SOCKET_IO_CORS_ORIGIN=http://localhost:3000,https://gup-sup-byanurag-1.onrender.com
SOCKET_IO_POLLING_INTERVAL=25000

# Email (if using email verification)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Frontend
REACT_APP_API_URL=http://localhost:3000
REACT_APP_SOCKET_URL=http://localhost:3000
```

### Theme Customization

Edit `src/css/theme.css`:

```css
:root {
  /* Primary Colors */
  --primary-color: #0084ff;
  --secondary-color: #e4e6eb;
  --accent-color: #31a24c;
  
  /* Dark Mode */
  --bg-dark: #ffffff;
  --text-dark: #000000;
  --border-dark: #e5e5ea;
  
  /* Message Bubbles */
  --msg-sent: #0084ff;
  --msg-received: #e5e5ea;
  
  /* Notifications */
  --notification-color: #f02849;
}

/* Dark Mode Override */
[data-theme="dark"] {
  --bg-dark: #ffffff;
  --text-dark: #ffffff;
  --border-dark: #3a3a3c;
}
```

---

## 🚀 Deployment

### Deploy to Render (Current)

Your app is already deployed! 🎉

**Live URL:** https://gup-sup-byanurag-1.onrender.com/

**To update deployment:**
```bash
# Push changes to main branch
git push origin main

# Render auto-deploys on push
# Check deployment status in Render dashboard
```

### Manual Deployment to Render

1. **Connect GitHub Repository**
   - Go to [Render.com](https://render.com)
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub account

2. **Configure**
   - Select `Rosenmunda/Gup-Sup_byAnurag`
   - Set runtime: Node
   - Build command: `npm install`
   - Start command: `node server.js`

3. **Environment Variables**
   - Add all `.env` variables in Render dashboard
   - Start web service

4. **Monitor**
   - View logs in Render dashboard
   - Check deployment status

### Alternative: Deploy to Heroku

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create gup-sup-app

# Set environment variables
heroku config:set MONGODB_URI=your_uri
heroku config:set JWT_SECRET=your_secret

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Alternative: Deploy with PM2 on VPS

```bash
# SSH into your server
ssh user@your_server_ip

# Install PM2 globally
npm install -g pm2

# Clone repository
git clone https://github.com/Rosenmunda/Gup-Sup_byAnurag.git
cd Gup-Sup_byAnurag

# Install dependencies
npm install

# Start with PM2
pm2 start server.js --name "gup-sup"
pm2 save
pm2 startup

# Setup Nginx reverse proxy
# Configure port 3000 → port 80
```

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Gup-Sup_byAnurag.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Make Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit Changes**
   ```bash
   git commit -m "Add AmazingFeature with description"
   ```

5. **Push to Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open Pull Request**
   - Describe changes clearly
   - Link related issues
   - Wait for review

### Contribution Guidelines
- Follow JavaScript conventions (ES6+)
- Write clear, descriptive commit messages
- Test before submitting PR
- Update documentation as needed
- Keep PRs focused and reasonably sized

### Areas for Contribution
- 🎨 UI/UX improvements
- 🐛 Bug fixes
- ⚡ Performance optimization
- 📱 Mobile responsiveness
- 🌍 Internationalization
- 📚 Documentation improvements

---

## 🎯 Future Enhancements

- [ ] Voice and video calling
- [ ] File sharing and media support
- [ ] Message encryption (end-to-end)
- [ ] Bot/AI assistant integration
- [ ] Message reactions and emojis
- [ ] Voice messages
- [ ] Message scheduling
- [ ] Mobile app (React Native/Flutter)
- [ ] Push notifications
- [ ] Typing indicators with animation
- [ ] Read receipts and seen timestamps
- [ ] Message search with filters
- [ ] User status (online/offline/away)
- [ ] Custom themes/backgrounds
- [ ] Message threading/replies
- [ ] Multi-language support

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

The MIT License allows:
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ✅ Sublicense

With conditions:
- ⚠️ License and copyright notice required

---

## 🐛 Bug Reports & Issues

Found a bug or have suggestions? Please open an issue!

- **Issue Template:** Include steps to reproduce, expected vs actual behavior
- **Screenshots:** Share screenshots or screen recordings
- **System Info:** Include browser, OS, and Node version

[Report an Issue](https://github.com/Rosenmunda/Gup-Sup_byAnurag/issues/new)

---

## 💬 Discussion & Community

Join discussions for:
- Feature requests and suggestions
- Best practices and tips
- General questions
- Chat application ideas

[Start a Discussion](https://github.com/Rosenmunda/Gup-Sup_byAnurag/discussions)

---

## 👤 Author

**Anurag Sen**
- Project: Gup-Sup - Real-time Chat Application
- Role: Full Stack Developer
- GitHub: [@Rosenmunda](https://github.com/Rosenmunda)
- Email: [Contact via GitHub](https://github.com/Rosenmunda)

---

## 📞 Support & Contact

- **Live App:** [https://gup-sup-byanurag-1.onrender.com/](https://gup-sup-byanurag-1.onrender.com/)
- **Issues:** [GitHub Issues](https://github.com/Rosenmunda/Gup-Sup_byAnurag/issues)
- **Discussions:** [GitHub Discussions](https://github.com/Rosenmunda/Gup-Sup_byAnurag/discussions)
- **Pull Requests:** [Submit a PR](https://github.com/Rosenmunda/Gup-Sup_byAnurag/pulls)

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Language Composition** | JavaScript 99.3%, Other 0.7% |
| **Repository** | [Rosenmunda/Gup-Sup_byAnurag](https://github.com/Rosenmunda/Gup-Sup_byAnurag) |
| **Repository ID** | 966734492 |
| **Live Deployment** | [Render](https://gup-sup-byanurag-1.onrender.com/) |
| **Status** | ✅ Active Development |
| **Last Updated** | May 2026 |

---

## 🎓 Learning Resources

### JavaScript & Web Development
- [JavaScript.info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Socket.io Documentation](https://socket.io/docs/)

### Backend Development
- [Node.js Guide](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

### Deployment & DevOps
- [Render Documentation](https://render.com/docs)
- [Docker Guide](https://docs.docker.com/)
- [PM2 Documentation](https://pm2.keymetrics.io/)

---

## 🙏 Acknowledgments

- Thanks to all contributors and users
- Thanks to the open-source community
- Special thanks to Socket.io and MongoDB
- Community feedback and feature suggestions

---

## 📜 Changelog

### v1.0.0 (May 2026)
- ✅ Initial release
- ✅ Real-time messaging
- ✅ User authentication
- ✅ One-on-one chat
- ✅ Group chat support
- ✅ User profiles
- ✅ Responsive design
- ✅ Dark/Light themes

### Upcoming
- 🔄 Voice calling
- 🔄 File sharing
- 🔄 End-to-end encryption
- 🔄 Mobile app

---

<div align="center">

**Made with 💬 by Anurag Sen**

**Start chatting with Gup-Sup!**

[Visit Live App](https://gup-sup-byanurag-1.onrender.com/)

[⬆ Back to Top](#-gup-sup)

</div>

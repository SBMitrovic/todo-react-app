#  Todo Manager
Deployed at : https://todo-react-app-sbm.netlify.app/
A beautiful, modern React + Firebase todo app for your portfolio!

##  Features
- **User authentication** (sign up, login, logout)
- **User-specific todos** (each user sees only their own)
- **Add, complete, and delete todos**
- **Real-time updates** (instant sync with Firebase)
- **Responsive design** (mobile & desktop)
- **Glassmorphism UI** with smooth transitions
- **Date sorting** for todos
- **Animated delete effect**
- **Deployed on Netlify**

##  Tech Stack
- [React](https://react.dev/) (Vite)
- [Firebase](https://firebase.google.com/) (Auth + Firestore)
- [Netlify](https://netlify.com/) (hosting)
- Modern CSS

## 📦 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/SBMitrovic/todo-react-app.git
   cd todo-react-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up Firebase:**
   - Create a Firebase project
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Copy your config to `src/firebase/config.js`
4. **Run locally:**
   ```bash
   npm run dev
   ```
5. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 Deploying to Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify ("New site from Git")
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set any environment variables if needed

## 📝 Usage
- **Sign up** or **log in** with your email
- **Add todos** with name, description, and date
- **Mark as completed** with a checkbox or status badge
- **Delete todos** with animated fade-out
- **Log out** from the header

## 📱 Responsive Design
- 2-column grid on desktop
- 1-column grid on mobile
- Dynamic card sizing

## 🔒 Security
- Firestore rules restrict access to each user's own todos
- Authentication required for all actions

## 💡 Portfolio Value
- Demonstrates modern React, Firebase, and deployment skills
- Shows ability to build secure, real-world apps
- Beautiful UI and smooth UX

---

**by Stefan-Branko Mitrovic**

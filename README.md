# ELZIPO Portfolio ✨

## Overview

This is a modern and visually engaging personal portfolio website built with React, Vite, and React Router DOM. It features a dynamic user interface with smooth navigation, an interactive hero section, a showcase of the developer's technology stack, and responsive design elements to highlight software development skills.

**NEW**: Now includes a **Firebase backend** for dynamic project management! 🚀

## Features

- 🚀 **Interactive Navigation**: Seamless routing between Home, About, Projects, and Contact pages using React Router.
- 🌟 **Dynamic Hero Section**: A prominent introductory area designed to immediately capture attention.
- 🌐 **Social Media Integration**: Easy access to the developer's online presence via integrated social links.
- 🛠️ **Technology Stack Showcase**: A dedicated section visually listing the developer's proficiency in various programming languages and tools.
- 🌌 **Animated Background**: Subtle and captivating background animations to enhance the user experience.
- 📄 **Dedicated Pages**: Individual pages for detailed information about the developer, showcased projects, and contact methods.
- 🔐 **Admin Dashboard**: Secure authentication with Firebase
- 📋 **Project Management**: Add, edit, and delete projects dynamically
- 🖼️ **Cloud Image Hosting**: Integration with Cloudinary for reliable image storage
- ☁️ **Firestore Database**: Real-time project data storage and synchronization

## Getting Started

To get this project up and running on your local machine, follow these simple steps.

### Installation

- **Clone the Repository**:
  ```bash
  git clone https://github.com/Chukwudebere-ferd/ELZIPO.git
  cd ELZIPO
  ```
- **Install Dependencies**:
  ```bash
  npm install
  ```
- **Run the Development Server**:
  ```bash
  npm run dev
  ```
  This will start the Vite development server, usually on `http://localhost:5173`.

### Environment Variables

This project now requires Firebase and Cloudinary credentials for the admin backend.

**For local development**, create a `.env.local` file in the `Elzipo/` folder:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
```

**Setup Instructions**: See [QUICK_START.md](./QUICK_START.md) for a 5-minute setup guide.

**Detailed Setup**: See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for complete step-by-step instructions.

## Usage

Once the development server is running, open your web browser and navigate to the address provided by Vite (e.g., `http://localhost:5173`).

The application will display the main portfolio page. You can navigate through the different sections (Projects, About, Contact) using the sidebar navigation links. The hero section introduces the portfolio, while the social icons and technology stack showcase provide additional insights into the developer's capabilities.

## Technologies Used

This project leverages the following key technologies and libraries:

| Technology           | Description                                       | Link                                                                    |
| :------------------- | :------------------------------------------------ | :---------------------------------------------------------------------- |
| **React**            | A JavaScript library for building user interfaces | [React.js](https://react.dev/)                                          |
| **Vite**             | A fast build tool for modern web projects         | [Vite.js](https://vitejs.dev/)                                          |
| **React Router DOM** | Declarative routing for React                     | [React Router](https://reactrouter.com/web/guides/quick-start)          |
| **React Icons**      | Customizable SVG React icons                      | [React Icons](https://react-icons.github.io/react-icons/)               |
| **Firebase**         | Backend services (Auth, Firestore, Storage)       | [Firebase](https://firebase.google.com/)                                |
| **Firestore**        | Cloud database for project data                   | [Firestore](https://firebase.google.com/docs/firestore)                 |
| **Firebase Auth**    | User authentication system                        | [Firebase Auth](https://firebase.google.com/docs/auth)                  |
| **Cloudinary**       | Cloud image hosting and CDN                       | [Cloudinary](https://cloudinary.com/)                                   |
| **JavaScript**       | The programming language for web development      | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **CSS3**             | Styling language for web pages                    | [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)        |

_Note: The "Stacks" section within the portfolio also showcases proficiency in additional technologies like Node.js, Flutter, TypeScript, MongoDB, and MySQL, indicating a broader skillset._

## Author Info

- **Name**: Elzipo
- **Email**: Elzipo106@gmail.com
- **Twitter**: [@elzipoferd](https://x.com/elzipoferd)
- **WhatsApp**: [+2349047594112](https://wa.me/2349047594112)

---

[![Vite](https://img.shields.io/badge/build%20with-Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/Built%20with-React-61DAFB.svg?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](http://unlicense.org/)
[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
# Updated Sun, Dec 21, 2025  8:03:13 AM

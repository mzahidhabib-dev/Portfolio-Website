# React + Vite

This project is built using **React + Vite** and includes a fully automated **CI/CD pipeline** using GitHub Actions and Vercel.

---

## 🚀 Project Overview

This setup provides:

- Fast development with Vite + HMR
- ESLint for code quality
- Automated build, lint, and deployment pipeline



## 🔌 Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)  
  Uses **Babel** (or **oxc**) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)  
  Uses **SWC** for Fast Refresh

---

## ⚙️ React Compiler

The React Compiler is not enabled by default due to its impact on development and build performance.

To enable it, see the official documentation:  
https://react.dev/learn/react-compiler/installation

---

## 🧹 ESLint Configuration

For production-grade applications, it is recommended to use **TypeScript** with type-aware linting.

Refer to the official TypeScript template:  
https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

---

## 🚀 CI/CD Pipeline

### 🔹 Continuous Integration (CI)

On every **push** or **pull request**:

- Installs dependencies using `npm ci`
- Runs ESLint to ensure code quality
- Builds the React + Vite project
- Uses dependency caching to speed up builds

---

### 🔹 Continuous Deployment (CD)

- Runs **only after CI passes successfully**
- Automatically deploys the project to **Vercel**
- **Production deployments** happen from the `main` branch

---

### 🔹 Tools Used

- **GitHub Actions** – CI/CD automation
- **Node.js 18**
- **Vercel** – Hosting & deployment
- **Vite + React**

---

### 🔹 Pipeline Benefits

- Prevents broken builds from being deployed
- Enforces linting before deployment
- Faster builds using npm cache
- Fully automated production deployment







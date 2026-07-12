# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# XL Package Recommendation Frontend

Frontend aplikasi **XL Package Recommendation System** yang dibangun menggunakan **React**, **TypeScript**, **Vite**, **Axios**, **React Router**, dan **Tailwind CSS**.

Aplikasi ini menyediakan antarmuka pengguna untuk melihat paket internet, melakukan autentikasi pengguna, serta nantinya akan terintegrasi dengan backend **Spring Boot REST API** menggunakan JWT Authentication.

---

# Tech Stack

| Technology | Version |
|------------|----------|
| React | 19.x |
| TypeScript | 5.x |
| Vite | 8.x |
| Axios | Latest |
| React Router DOM | 7.x |
| TailwindCSS | 4.x |
| shadcn/ui | Latest |
| Sonner | Latest |
| Lucide React | Latest |

---

# Features

- Landing Page
- Authentication UI
    - Login
    - Register
    - Google Login (Coming Soon)
- Responsive Navbar
- Package Listing
- Package Detail
- About Page
- Protected Route (Coming Soon)
- JWT Authentication (Coming Soon)
- Refresh Token (Coming Soon)

---

# Folder Structure

```
src
│
├── api
│   └── axios.ts
│
├── assets
│
├── components
│   ├── AuthForm.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Logo.tsx
│   ├── PackageCard.tsx
│   ├── PackageFeatures.tsx
│   └── ui/
|
├── data
│   ├── packages.tsx
│
├── hooks
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│
├── lib
│   ├── utils.ts
│
├── pages
│   ├── AuthPage.tsx
│   ├── AboutPage.tsx
│   ├── Index.tsx
│   ├── PackagesPage.tsx
│   ├── PurchasePage.tsx
│   └── NotFound.tsx
│
├── services
│
├── types
│
├── App.css
├── App.tsx
├── main.tsx
└── index.css
```

---

# Installation

Clone repository

```bash
git clone https://github.com/JokoKusnandi/data-package-booster.git
```

Masuk ke folder project

```bash
cd data-package-booster
```

Install dependency

```bash
npm install
```

atau

```bash
yarn
```

---

# Environment Variables

Buat file

```
.env
```

isi

```env
VITE_API_URL=http://localhost:8088/api
```

Contoh production

```env
VITE_API_URL=https://api.domain.com/api
```

---

# Running Development Server

```bash
npm run dev
```

Server akan berjalan pada

```
http://localhost:8088
```

---

# Build Production

```bash
npm run build
```

Preview

```bash
npm run preview
```

---

# Axios Configuration

```typescript
import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default api;
```

---

# Authentication

Saat ini frontend masih menggunakan **Local Storage** sebagai mock authentication.

Data yang disimpan

```
token
```

dan

```
user
```

contoh

```json
{
    "username":"joko",
    "fullName":"Joko Kusnandi",
    "email":"joko@gmail.com"
}
```

---

# Planned Backend Integration

Frontend akan terhubung dengan Spring Boot REST API.

Endpoint yang akan digunakan

| Method | Endpoint | Description |
|---------|----------|------------|
| POST | /auth/register | Register User |
| POST | /auth/login | Login |
| POST | /auth/logout | Logout |
| GET | /auth/me | Current User |
| POST | /auth/refresh-token | Refresh JWT |
| GET | /packages | Get Packages |
| GET | /packages/{id} | Package Detail |

---

# Authentication Flow

```
User Login
      │
      ▼
React Form
      │
      ▼
Axios
      │
      ▼
Spring Boot API
      │
      ▼
JWT Token
      │
      ▼
Local Storage
      │
      ▼
Protected Routes
```

---

# Future Improvements

- JWT Authentication
- Refresh Token
- Google OAuth
- Facebook OAuth
- Role Based Access Control
- Dark Mode
- Internationalization (i18n)
- Package Recommendation AI
- React Query
- Redux Toolkit
- Zustand
- Unit Testing
- Integration Testing
- Docker
- CI/CD GitHub Actions

---

# Available Scripts

```bash
npm run dev
```

Menjalankan development server.

```bash
npm run build
```

Build production.

```bash
npm run preview
```

Preview production build.

```bash
npm run lint
```

Menjalankan ESLint.

---

# Screenshots

```
Coming Soon
```

---

# License

MIT License

---

# Author

**Joko Kusnandi**

Backend Developer

- Java
- Spring Boot
- React
- TypeScript
- PostgreSQL
- Redis
- Docker
- Kubernetes

---

# Related Project

Backend Repository

```
(Spring Boot Backend)
Coming Soon
```

---

# Status

Project sedang dalam tahap pengembangan.

Current Progress

- ✅ UI
- ✅ Authentication UI
- ✅ Responsive Layout
- ✅ Axios Setup
- ⏳ Spring Boot Integration
- ⏳ JWT Authentication
- ⏳ Google OAuth
- ⏳ Package Recommendation Engine



# let's start create new project with terminal cmd :
```text
npm create vite@latest data-package-booster -- --template react
```
```text
rm -rf node_modules package-lock.json
```
```text
npm install
```

## If not Running , install module react

```text
npm install --save-dev @types/react @types/react-dom
```
```text
npx tailwindcss -v
```
```text
npm install tailwindcss@3.4.19
```
```text
npx shadcn@latest init
```

```text
npm install react-icons
```
```text
npm install vite-plugin-component-tagger --save-dev
```
```text
npm install -D @vitejs/plugin-react-
```
```text
npm install -D lovable-tagger
```
## build application 
```text
npm run dev
```
# Endpoint API
```text
http://localhost:8088/

# React 19 + TypeScript + Vite + Shadcn/ui + Redux Toolkit Template

## About
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Tech Stack

[![Vite][shields-vite-domain]](https://vitejs.dev/) </br>
[![React][shields-react-domain]](https://react.dev/) - version 19 </br>
[![TypeScript][shields-typescript-domain]](https://www.typescriptlang.org/) </br>
[![React Router][shields-react-router-domain]](https://reactrouter.com/) </br>
[![Redux Toolkit][shields-redux-domain]](https://redux-toolkit.js.org/) </br>
[![Shadcn/ui][shields-shadcn-domain]](https://ui.shadcn.com/) </br>

## How to install

Required: Node version >=20.18.0 and [Yarn](https://yarnpkg.com/) was installed


```
yarn install
```

## How to run

```
yarn dev
```

## How to build

```
yarn build
```

## Folder Structure

```
📦 my-app
├── 📂 public
│   ├── favicon.ico
│   ├── robots.txt
│   └── index.html
├── 📂 src
│   ├── 📂 app
│   │   ├── store.ts            # Redux store setup
│   │   ├── api.ts              # RTK Query base API setup
│   ├── 📂 features
│   │   ├── 📂 auth
│   │   │   ├── authSlice.ts    # Auth state management
│   │   │   ├── authAPI.ts      # RTK Query endpoints for auth (login, signup)
│   │   │   ├── authTypes.ts    # Type definitions
│   │   │   ├── AuthComponent.tsx
│   │   ├── 📂 user
│   │   │   ├── userSlice.ts    # User state management (optional)
│   │   │   ├── userAPI.ts      # RTK Query endpoints for user CRUD
│   │   │   ├── userTypes.ts    # Type definitions
│   │   │   ├── UserComponent.tsx
│   ├── 📂 components
│   │   ├── 📂 blocks           # Your own block components  
│   │   ├── 📂 ui               # All shared shadcn/ui components
│   ├── 📂 layout
│   │   ├── DashboardLayout.tsx # Layout for authenticated users
│   │   ├── AuthLayout.tsx      # Layout for auth pages (login, register)
│   │   ├── MainLayout.tsx      # Default layout
│   ├── 📂 pages
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   ├── 📂 routes
│   │   ├── index.tsx           # React Router configuration
│   ├── 📂 lib
│   │   ├── axios.ts            # Axios instance (if needed)
│   │   ├── shadcn.ts           # Theme provider for shadcn/ui
│   ├── 📂 assets
│   │   ├── images              # Folder for static images
│   │   ├── icons               # Folder for SVG/icons
│   │   ├── fonts               # Custom fonts
│   │   ├── global.css          # Global CSS (if needed)
│   ├── 📂 types
│   │   ├── index.ts            # Re-export global types
│   │   ├── auth.ts             # Auth-related types
│   │   ├── user.ts             # User-related types
│   ├── 📂 hooks
│   │   ├── useAuth.ts          # Custom hook for authentication
│   │   ├── useBreadcrumb.ts    # Custom hook for dynamic breadcrumbs
│   │   ├── useFetch.ts         # Custom fetch hook (if needed)
│   ├── 📂 constants
│   │   ├── routes.ts           # Route paths constants
│   │   ├── api.ts              # API endpoints constants
│   │   ├── roles.ts            # User roles/constants
│   ├── main.tsx
│   ├── App.tsx
├── 📦 node_modules
├── .eslintrc.cjs
├── .prettierrc
├── tsconfig.json
├── package.json
├── vite.config.ts

```

## UI Kit & Icons

### UI Kit

[Shadcn/ui](https://ui.shadcn.com) collection built with [Tailwindcss](https://tailwindcss.com) and [Radix UI](https://www.radix-ui.com/)

Taiwindcss v4: https://tailwindcss.com

### Icon Kit

Lucide: https://lucide.dev


[shields-react-router-domain]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[shields-typescript-domain]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[shields-vite-domain]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[shields-react-domain]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[shields-redux-domain]: https://img.shields.io/badge/redux_toolkit-%2320232a.svg?style=for-the-badge&logo=redux&logoColor=%764abc
[shields-shadcn-domain]: https://img.shields.io/badge/Shadcn_ui-CA4245?style=for-the-badge&logo=shadcnui&logoColor=white

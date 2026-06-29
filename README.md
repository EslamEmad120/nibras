# نبراس | Nebras - Frontend

This repository is a Vite + React frontend scaffold for the Nebras ecommerce store (Arabic RTL, Tailwind CSS).

Setup

1. Copy `.env.example` to `.env` and fill Firebase credentials and `VITE_WHATSAPP_NUMBER`.

2. Install dependencies (if not already):

```bash
npm install
```

3. Run dev server:

```bash
npm run dev
```

Firebase

- `src/firebase/firebase.js` initializes Firestore, Storage, and Auth using env vars.
- Add firestore and storage rules in the Firebase console before deploying.

WhatsApp order integration

Configured to use `BRAND.whatsappNumber` from `src/config/config.js` (reads `VITE_WHATSAPP_NUMBER`).
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Alex Portfolio

A personal portfolio website built with Vue3 + Bootstrap5 (frontend) and Express (backend).

## Tech Stack

### Frontend
- Vue 3 (Composition API)
- Pinia (state management)
- Vue Router
- axios
- Bootstrap 5

### Backend
- Node.js
- Express
- dotenv, cors, helmet, morgan

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Build for Production

```bash
npm run build   # outputs to docs/
```

## Project Structure

```
alexsuze/
├── src/                # Vue3 frontend
│   ├── api/            # axios client
│   ├── components/     # Vue components
│   ├── views/          # Page-level components
│   ├── stores/         # Pinia stores
│   ├── router/         # Vue Router config
│   └── utils/          # Utility functions
├── server/             # Express backend
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       ├── middleware/
│       ├── config/
│       └── app.js
├── package.json
└── vite.config.js
```

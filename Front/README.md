# Frontend - ChallengeForIT

Aplicación frontend para la gestión de tareas. Construida con **React**, **Vite** y **TailwindCSS**.

---

## Requisitos

- Node.js  
- npm

---

## Instalación

1. Cloná el repositorio y accedé a la carpeta del frontend:

   ```bash
   cd Front
   npm install
   ```

2. Crear un archivo `.env` en la raíz con el siguiente contenido:

   ```env
   VITE_API_URL=http://localhost:3000/api/tasks
   ```

3. Iniciar la aplicación en desarrollo:

   ```bash
   npm run dev
   ```

4. Accedé desde tu navegador a:

   ```
   http://localhost:5173
   ```

---

## Estructura

- `/src`: Código fuente principal
  - `components/`: Componentes 
  - `contexts/`: Context API para el estado global
  - `pages/`: Vistas principales (TaskList, TaskItem, TaskForm)
  - `types/`: Definiciones TypeScript
- `App.tsx`: Enrutamiento y estructura principal

---

# Backend - ChallengeForIT

API REST para la gestión de tareas. Construida con **Node.js**, **Express**, **Prisma** y **SQLite**.

---

## Requisitos

- Node.js  
- npm

---

## Instalación

1. Cloná el repositorio y accedé a la carpeta del backend:

   ```bash
   cd Back
   npm install
   ```

2. Crear un archivo `.env` en la raíz con el siguiente contenido:

   ```env
   PORT=3600
   DATABASE_URL="file:./dev.db"
   ```

3. Inicializar la base de datos con Prisma:

   ```bash
   npx prisma db push
   ```

4. Iniciar el servidor:

   ```bash
   npm run dev
   ```

---

## Endpoints

| Método | Ruta             | Descripción              |
|--------|------------------|--------------------------|
| GET    | `/api/tasks`     | Obtener todas las tareas |
| POST   | `/api/tasks`     | Crear una tarea          |
| PUT    | `/api/tasks/:id` | Actualizar una tarea     |
| DELETE | `/api/tasks/:id` | Eliminar una tarea       |

---

## Estructura

- `/src`: Código fuente
- `/prisma`: Esquema de Prisma y base de datos SQLite (`dev.db`)



import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../contexts/task.context";
import type { ITasKContext } from "../../types/types";

const apiUrl = import.meta.env.VITE_API_URL;
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { SetTaskContext } = useContext(Context) as ITasKContext;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (res.ok) {
        const updatedRes = await fetch(apiUrl);
        const updatedTasks = await updatedRes.json();
        SetTaskContext(updatedTasks);
        navigate("/");
      } else {
        console.error("Error al crear la tarea");
      }
    } catch (err) {
      console.error("Error de red", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          rows={4}
        />
        <button
          type="submit"
          disabled={!title.trim() || !description.trim()}
          className={`py-2 px-4 rounded transition-colors
    ${!title.trim() || !description.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-zinc-800"}`}
        >
          Crear tarea
        </button>
      </form>
    </div>
  );
};

export default TaskForm;

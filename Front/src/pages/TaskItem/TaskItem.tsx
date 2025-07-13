import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/task.context";
import type { ITasKContext, Task } from "../../types/types";
import { useNavigate, useParams } from "react-router";

const apiUrl = import.meta.env.VITE_API_URL;

const TaskItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { TaskContext, SetTaskContext } = useContext(Context) as ITasKContext;
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const found = TaskContext.find((t) => t.id === Number(id));
    if (found) setTask(found);
  }, [TaskContext, id]);

  const handleCheck = async () => {
    if (!task) return;

    const updated = { ...task, completed: !task.completed };

    try {
      const res = await fetch(`${apiUrl}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });

      if (res.ok) {
        setTask(updated);


        SetTaskContext(
          TaskContext.map((t) => (t.id === task.id ? updated : t))
        );
      }
    } catch (err) {
      console.error("Error al actualizar la tarea", err);
    }
  };
  const handleDelete = async () => {
    try {
      if (task?.id) {
        const res = await fetch(`${apiUrl}/${task.id}`, {
          method: "DELETE",
        });

        if (res.ok) {

          SetTaskContext(TaskContext.filter((t) => t.id !== task.id));


          navigate("/");
        }
      }
    } catch (error) {
      console.error("Error al eliminar la tarea", error);
    }
  };
  return (
    <div className="p-4 border rounded relative m-9">
      {task ? (
        <>

          <button
            onClick={handleDelete}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700  text-5xl font-bold mr-4"
          >
            ×
          </button>

          <h2 className="text-xl font-bold mb-2">{task.title}</h2>
          <p className="text-gray-600">{task.description}</p>

          <label className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleCheck}
              className="w-4 h-4"
            />
            <span className="text-sm">
              {task.completed ? "Completada" : "Pendiente"}
            </span>
          </label>

          <p className="text-sm mt-2 text-gray-500">
            Estado: {task.completed ? "Completada" : "Pendiente"}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Creada el {new Date(task.createdAt).toLocaleString()}
          </p>
        </>
      ) : (
        <p>Cargando tarea...</p>
      )}
    </div>
  );

};

export default TaskItem;

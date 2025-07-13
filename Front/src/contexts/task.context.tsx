import { createContext, useState, useEffect, } from "react";
import type { ITasKContext, Props, Task } from "../types/types";

const apiUrl = import.meta.env.VITE_API_URL;

export const Context = createContext<ITasKContext | null>(null);

export function TaskProviderWrapper({ children }: Props) {
    const [TaskContext, SetTaskContext] = useState<Task[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                SetTaskContext(data);
            } catch (error) {
                console.error("Error cargando tareas", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <Context.Provider value={{ TaskContext, SetTaskContext }}>
            {children}
        </Context.Provider>
    );
}

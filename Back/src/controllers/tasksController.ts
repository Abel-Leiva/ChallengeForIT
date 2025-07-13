import { Request, Response } from "express"
import { createTaskService, deleteTaskService, getByIdService, getTasksService, updateTaskService } from "../services/tasksServices"
import { ITask } from "../interfaces/ITask"

//Listar Tareas
export const getTasks = async (req: Request, res: Response) => {
    try {

        const listTasks = await getTasksService()

        res.status(200).json(listTasks)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Error interno" })

    }
}

//Crea Nueva Tarea
export const createTask = async (req: Request, res: Response) => {
    try {

        const { title, description } = req.body
        const newTask: ITask = await createTaskService({ title, description })
        res.status(201).json(newTask)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Error interno" })
    }
}

//Trae tarea por ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const task = await getByIdService(id)
        res.status(200).json(task)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Error interno" })
    }



}


//Actualiza Tarea
export const updateTask = async (req: Request, res: Response) => {

    try {
        const id = Number(req.params.id)

        const { title, description, completed } = req.body
        const taskUpdate = await updateTaskService(id, { title, description, completed })
        res.status(201).json({ taskUpdate })
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Error al actualizar tarea" })
    }



}

//Borra Tarea
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const id: number = Number(req.params.id)
        await deleteTaskService(id)
        res.sendStatus(204)

    } catch (error: any) {
        res.status(404).json({ message: error.message || "No se pudo eliminar la tarea" })
    }



} 
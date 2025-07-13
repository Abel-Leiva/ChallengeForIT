
import { prisma } from "../config/prisma"

import { ICreateTaskDTO, IUpdateTaskDTO } from "../dto/TaskDTO"
import { ITask } from "../interfaces/ITask"

//Lista
export const getTasksService = async (): Promise<ITask[]> => {
    try {
        const tasks = await prisma.task.findMany()

        return tasks
    } catch (error) {
        throw new Error("Error al obtener lista de tareas")

    }
}

//Crea
export const createTaskService = async (dataTask: ICreateTaskDTO): Promise<ITask> => {
    try {

        const newTask: ITask = await prisma.task.create(
            {
                data: {
                    title: dataTask.title,
                    description: dataTask.description,

                }
            }
        )
        return newTask
    } catch (error) {
        throw new Error("No se pudo crear la tarea")

    }

}

export const getByIdService = async (id: number): Promise<ITask | null> => {

    try {
        const task = await prisma.task.findUnique({
            where: { id }
        })
        return task
    } catch (error) {
        throw new Error("No se pudo obtener la tarea")
    }





}


//Actualiza
export const updateTaskService = async (
    id: number,
    data: IUpdateTaskDTO
): Promise<ITask> => {
    try {
        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                title: data.title,
                description: data.description,
                completed: data.completed
            }
        })

        return updatedTask
    } catch (error) {
        throw new Error("No se pudo actualizar la tarea")
    }
}

//Elimina
export const deleteTaskService = async (id: number) => {
    try {
        await prisma.task.delete({
            where: { id }
        })
    } catch (error) {
        throw new Error("No se pudo eliminar la tarea")
    }



}
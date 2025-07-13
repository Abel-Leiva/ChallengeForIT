import type { ReactNode } from "react"

export type Task = {
    id: number
    title: string
    description: string
    completed: boolean
    createdAt: string
}

export type TaskListResponse = Task[]

export interface Props {
    children: ReactNode;
}

export interface ITasKContext {
    TaskContext: Task[];
    SetTaskContext: (value: Task[]) => void;
}

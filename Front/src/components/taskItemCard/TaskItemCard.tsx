import { Link } from 'react-router'
import type { Task } from '../../types/types'


export const TaskItemCard = (taskProp: Task) => {

    return (
        <div className="bg-white shadow-sm border rounded-lg p-4 mb-4">
            <Link to={`/task/${taskProp.id}`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">{taskProp.title}</h2>
                    <span className={`text-sm ${taskProp.completed ? "text-green-600" : "text-yellow-600"}`}>
                        {taskProp.completed ? "Completada" : "Pendiente"}
                    </span>
                </div>

                <p className="text-xs text-gray-400 mt-2">
                    Creada el {new Date(taskProp.createdAt).toLocaleString()}
                </p></Link>
        </div>
    )
}

import { useContext } from "react";
import ItemList from "../../components/itemList/ItemList";
import { TaskItemCard } from "../../components/taskItemCard/TaskItemCard";

import { Context } from "../../contexts/task.context"
import type { ITasKContext } from "../../types/types";

const TaskList = () => {
  const { TaskContext } = useContext(Context) as ITasKContext;
  console.log("aca esta el context", TaskContext, "yupiii")
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Lista de Tareas</h1>
      <ItemList
        items={TaskContext ?? []}
        renderCallBack={({ id, title, description, completed, createdAt }) => (
          <TaskItemCard
            id={id}
            title={title}
            description={description}
            completed={completed}
            createdAt={createdAt}
          />
        )}
      />
    </div>
  )

}

export default TaskList
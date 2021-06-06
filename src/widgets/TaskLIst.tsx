import { useContext } from "react"
import { Link } from "react-router-dom"

import { Button, Card } from "../components"

import { TaskContext } from "../Tasks"

const TaskList = () => {
  const { tasks, handleRemoveTask } = useContext(TaskContext)
  return (
    <div className="bg-gray-700 p-4 rounded-sm">
      { tasks.length > 0 ? tasks.map((task, index) => <Card handleRemoveTask={handleRemoveTask} {...task} key={index} />) :
        (<div className="py-36 text-center text-gray-300">
          <p className="mb-4">No se a encontrado tareas registradas</p>
          <Button>
            <Link to="/tasks/create">
              Agregar tarea
            </Link>
          </Button>
        </div>)}
    </div>
  )
}

export default TaskList
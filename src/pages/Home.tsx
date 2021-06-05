import { useContext } from "react"
import { TaskContext } from '../Tasks'
import { CreateTaskForm } from "../widgets"


const Home = () => {
  const { tasks } = useContext(TaskContext)
  return (
    <main className="bg-gray-800 min-h-screen">
      <div className="grid-cols-2	grid">
        <CreateTaskForm />
        <div>
          <h1>Lista de tareas</h1>
          <div>{tasks.map((task, index) => <article key={index}>
            <h2>{task.name}</h2>
            <p>Prioridad: {task.priority}</p>
            <p>{task.description}</p>
          </article>)}</div>
        </div>
      </div>
    </main>
  )
}

export default Home
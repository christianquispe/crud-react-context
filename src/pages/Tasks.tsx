import { Header } from "../layout"
import { TaskList } from "../widgets"

const Tasks = () => {
  return (<div className="bg-gray-800 min-h-screen">
    <Header />
    <TaskList />
  </div>
  )
}

export default Tasks
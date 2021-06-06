import { Header } from "../layout"
import { EditTaskForm } from "../widgets"

const EditTaskPage = () => {
  return (<div className="bg-gray-800 min-h-screen">
    <Header />
    <div className="flex justify-center">
      <EditTaskForm />
    </div>
  </div>
  )
}

export default EditTaskPage
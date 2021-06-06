import { Header } from "../layout"
import { CreateTaskForm } from "../widgets"

const CreateTaskPage = () => {
  return (<div className="bg-gray-800 min-h-screen">
    <Header />
    <div className="flex justify-center">
      <CreateTaskForm />
    </div>
  </div>
  )
}

export default CreateTaskPage
import { useContext } from "react"
import { TaskContext } from "../Tasks"
import { useFormik } from "formik";

const CreateTaskForm = () => {
  const { handleAddTask } = useContext(TaskContext)

  const formik = useFormik({
    initialValues: {
      name: '',
      priority: '',
      description: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      handleAddTask(values)
      resetForm()
    }
  })

  return (
    <div className="bg-gray-600 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
      <form onSubmit={formik.handleSubmit}>
        <input name="name" onChange={formik.handleChange} value={formik.values.name} type="text" className="border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 mr-4 text-black mb-4" />
        <input name="priority" onChange={formik.handleChange} value={formik.values.priority} type="text" className="border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 mr-4 text-black mb-4" />
        <input name="description" onChange={formik.handleChange} value={formik.values.description} type="text" className="border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 mr-4 text-black mb-4" />
        <input type="submit" value="Crear" />
      </form>
    </div>
  )
}

export default CreateTaskForm
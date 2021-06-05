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
    <form onSubmit={formik.handleSubmit}>
      <input name="name" onChange={formik.handleChange} value={formik.values.name} type="text" />
      <input name="priority" onChange={formik.handleChange} value={formik.values.priority} type="text" />
      <input name="description" onChange={formik.handleChange} value={formik.values.description} type="text" />
      <input type="submit" value="Crear" />
    </form>
  )
}

export default CreateTaskForm
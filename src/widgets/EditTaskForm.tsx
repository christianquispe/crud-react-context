import { useContext } from "react"
import { useHistory, useParams } from "react-router-dom";

import { TaskContext, TaskInterface } from "../Tasks"

import { useFormik } from "formik";
import { getTask } from "../helpers/helpers.tasks";

const CreateTaskForm = () => {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  const { handleEditTask, tasks } = useContext(TaskContext)

  const detailsTask = getTask(tasks, id)

  const formik = useFormik({
    initialValues: {
      id: detailsTask.id,
      name: detailsTask.name,
      priority: detailsTask.priority,
      description: detailsTask.description,
    },
    validate: (values) => {
      let errors: Partial<TaskInterface> = {}
      if (!values.name) {
        errors.name = 'Es necesario un nombre'
      }
      if (!values.priority) {
        errors.priority = 'Es necesario agregar una prioridad'
      }
      return errors
    },
    onSubmit: (values, { resetForm }) => {
      handleEditTask({ ...values, id })
      resetForm()
      history.push('/')
    }
  })

  const inputClass = "border border-gray-800 focus:border-blue-500 rounded w-full py-2 px-3 text-black"

  return (
    <div style={{ height: "fit-content" }} className="bg-gray-600 rounded shadow p-10 m-4 w-full lg:w-3/4 lg:max-w-lg md:max-w-2xl">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300" htmlFor="name">Nombre:</label>
          <input name="name" id="name" onChange={formik.handleChange} value={formik.values.name} type="text" className={inputClass} />
          {formik.errors.name && <p>{formik.errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300" htmlFor="priotity">Prioridad</label>
          <input name="priority" id="priotity" onChange={formik.handleChange} value={formik.values.priority} type="text" className={inputClass} />
          {formik.errors.priority && <p>{formik.errors.priority}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-300" htmlFor="description">Descripci??n</label>
          <input name="description" id="description" onChange={formik.handleChange} value={formik.values.description} type="text" className={inputClass} />
        </div>
        <div className="flex justify-center">
          <input type="submit" value="Crear" className="p-2 rounded-lg bg-gray-800 outline-none text-white shadow w-32 justify-center focus:bg-gray-700 hover:bg-gray-700 cursor-pointer" />
        </div>
      </form>
    </div>
  )
}

export default CreateTaskForm
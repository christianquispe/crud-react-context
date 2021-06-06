import { Link } from 'react-router-dom'
import { TaskInterface } from '../Tasks'

type ICard = TaskInterface & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

interface CardProps extends ICard {
  handleRemoveTask: (id: string) => void
}

const Card: React.FC<CardProps> = ({ name, priority, description, id, className, handleRemoveTask, ...restProps }) => (
  <article className={`py-4 px-8 bg-white shadow-lg rounded-lg my-5${className ? ` ${className}` : ''}`} {...restProps}>
    <div className="flex justify-between">
      <h1 className="text-gray-800 text-3l font-semibold">{name}</h1>
      <div className="flex">
        <Link to={`/tasks/edit/${id}`}>
          <span>Editar</span>
        </Link>
        <span className="ml-4" onClick={() => handleRemoveTask(id)}>Eliminar</span>
      </div>
    </div>
    <p className="my-2 text-gray-600">{description}</p>
    <div className="flex justify-end">
      <p className="text-gray-600">Prioridad: <span className="text-md font-medium text-indigo-500">{priority}</span></p>
    </div>
  </article>
)

export default Card
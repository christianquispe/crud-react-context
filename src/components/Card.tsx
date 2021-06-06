import { TaskInterface } from '../Tasks'

type ICard = TaskInterface & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

const Card: React.FC<ICard> = ({ name, priority, description, className, ...restProps }) => (
  <article className={`py-4 px-8 bg-white shadow-lg rounded-lg my-5${className ? ` ${className}` : ''}`} {...restProps}>
    <h1 className="text-gray-800 text-3l font-semibold">{name}</h1>
    <p className="my-2 text-gray-600">{description}</p>
    <div className="flex justify-end">
      <p className="text-gray-600">Prioridad: <span className="text-md font-medium text-indigo-500">{priority}</span></p>
    </div>
  </article>
)

export default Card
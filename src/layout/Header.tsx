import { Link } from "react-router-dom"

const Header = () => {
  return <header className="flex justify-between height-8 py-6 max-w-screen-lg mr-auto ml-auto">
    <h1 className="text-3xl font-bold text-white">
      <Link to="/">
        Mis tareas
      </Link>
    </h1>
    <nav>
      <ul className="flex">
        <li className="bg-white px-3 py-1 text-gray-700 shadow-lg rounded-lg">
          <Link to="/tasks/create">
            Crear
          </Link>
        </li>
        <li className="bg-white px-3 py-1 text-gray-700 shadow-lg rounded-lg ml-4">
          <Link to="/tasks">
            Todas las tareas
          </Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default Header
import { Header } from "../layout"
import { TaskList } from "../widgets"

const Home = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Header />
      <div className="max-w-screen-lg mr-auto ml-auto">
        <TaskList />
      </div>
    </div>
  )
}

export default Home
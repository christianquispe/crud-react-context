import React, { useState } from "react";

interface TaskInterface {
  name: string
  priority: string
  description: string
}

interface DataTaskInterface {
  handleAddTask: (task: TaskInterface) => void
  tasks: TaskInterface[]
}

const TaskContext = React.createContext<DataTaskInterface>({ tasks: [], handleAddTask: () => {} })
TaskContext.displayName = 'TaskContext'

const Tasks: React.FC = (props) => {
  const [tasks, setTask] = useState<TaskInterface[]>([])

  const handleAddTask = (task: TaskInterface) => {
    setTask([...tasks, task])
  }

  return (
    <TaskContext.Provider value={{ handleAddTask, tasks }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export { Tasks, TaskContext }
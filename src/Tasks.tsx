import React, { useState } from "react";

export interface TaskInterface {
  id: string
  name: string
  priority: string
  description: string
}

export interface DataTaskInterface {
  tasks: TaskInterface[]
  handleAddTask: (task: TaskInterface) => void
  handleEditTask: (task: TaskInterface) => void
  handleRemoveTask: (id: string) => void
}

const TaskContext = React.createContext<DataTaskInterface>({ tasks: [], handleAddTask: () => { }, handleRemoveTask: () => { }, handleEditTask: () => { } })
TaskContext.displayName = 'TaskContext'

const Tasks: React.FC = (props) => {
  const [tasks, setTask] = useState<TaskInterface[]>([])

  const handleAddTask = (task: TaskInterface) => {
    setTask([...tasks, task])
  }

  const handleEditTask = (taskEdited: TaskInterface) => {
    const newTasks = tasks.map((task) => task.id === taskEdited.id ? { ...taskEdited } : task)
    setTask(newTasks)
  }

  const handleRemoveTask = (id: string) => {
    const newTasks = [...tasks].filter((task) => task.id !== id)
    setTask(newTasks)
  }

  return (
    <TaskContext.Provider value={{ tasks, handleAddTask, handleEditTask, handleRemoveTask }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export { Tasks, TaskContext }
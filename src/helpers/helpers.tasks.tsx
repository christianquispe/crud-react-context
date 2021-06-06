import { TaskInterface } from "../Tasks"

export const getTask = (tasks: TaskInterface[], id: string) => {
  return [...tasks].filter((task) => task.id === id)[0]
}
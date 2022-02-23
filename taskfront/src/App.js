import { useEffect, useState } from 'react'
import './App.css'

import * as amplify from './amplify'

function App() {

  const [tasks, setTasks] = useState([])
  const [taskTitle, setTaskTitle] = useState("")

  useEffect(() => {
    async function getTasks() {
      const tasks = await amplify.getTasks()
      setTasks(tasks)
    }

    getTasks()
  }, [])

  const createTask = async (e) => {
    e.preventDefault()
    const task = await amplify.createTask(taskTitle)
    setTasks([task, ...tasks])
  }

  return (
    <div className="App">
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.title}, completed: {task.completed ? "✅" : "◼️"}</p>
          <p>{task.username}</p>
        </div>
      ))}

      <form onSubmit={createTask}>
        <input onChange={e => setTaskTitle(e.target.value)} type="text" />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default App

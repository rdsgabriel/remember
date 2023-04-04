import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

    const handleTask = (event) => {
      setNewTask(event.target.value)
    }

    const handleAddTask = () => {
      setTasks([...tasks, newTask])
      setNewTask('')
    }

    const handleRemoveTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    }

  return (
    <div>
      <p>Crie sua lista de tarefas.</p>
      <input type="text" value={newTask} onChange={handleTask}/>
      <button onClick={!!newTask && handleAddTask}>Criar</button>
      <ul>
        {tasks.map((task, index) => ( 
          <div id='unica'>
            <li id='input' key={index}>{task}</li>
            <button id='btn' onClick={() => handleRemoveTask(index)}>Excluir</button>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App

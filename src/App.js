import {useState} from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function App() {
  const [todos, setTodos] = useState([])

  const addTask = (task) => {
      if(task){
          const newItem = {
              id: Math.random().toString(36).substr(2,9),
              task: task,
              complete: false
          }
          setTodos([...todos, newItem])
      }
  }
  const removeTask = (id) => {
      setTodos(todos.filter((item) => item.id!==id))
  }
  const handleToggle = (id) => {
      setTodos([...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
  }
  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {todos.map((todo) => {
        return (
            <ToDo
                todo={todo}
                key={todos.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
            />
        )
      })}
    </div>
  )
}

export default App;

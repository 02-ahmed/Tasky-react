import { useState } from "react"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import "./App.css"

interface Todo {
  id: number,
  todo: string,
  dueDate: Date
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <>
    <div className="text-center heading">
      <h1>Tasky</h1>
    </div>
    <div className="mb-5 mt-5">
      <AddTodo onSubmit={(todo) => setTodos(([...todos, {...todo, id:todos.length + 1}]))}/>
    </div>

    <div>
      {todos.length > 0 && <TodoList todos={todos} onDelete={(id) => setTodos(todos.filter((todo) => todo.id !== id))}/>}
    </div>
      
      
    </>
  )
}

export default App

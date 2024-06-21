/* import React from 'react' */
import "./TodoList.css"

interface Todo {
  id: number,
  todo: string,
  dueDate: Date
}

interface Props {
  todos: Todo[];
  onDelete: (id:number) => void
}

const TodoList = ({todos, onDelete}:Props) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-8">
          <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Task</th>
              <th>Due Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr>
                <td className="col-6">{todo.todo}</td>
                <td className="col-1">{todo.dueDate.toLocaleDateString()}</td>
                <td className="col-1">
                  <button className='btn btn-danger' onClick={() => onDelete(todo.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      </div>
      
      
    </>
  )
}

export default TodoList
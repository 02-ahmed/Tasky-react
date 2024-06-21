/* import React from 'react' */

import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form'

import "./TodoList.css"

const schema = z.object({
  todo: z.string().min(3),
  dueDate: z.date(),
});

type TodoFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data:TodoFormData) => void;
}

const AddTodo = ({onSubmit}:Props) => {
  const {register, reset, handleSubmit, formState:{errors}} = useForm<TodoFormData>({resolver:zodResolver(schema)})
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
        <form className='row justify-content-center' onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
          })}>
              <div className='col-4'>
                <input {...register("todo")} type="text" id='todo' className='form-control' placeholder='Enter task' />
                {errors.todo && <p className='text-danger'>{errors.todo.message}</p>}
              </div>
              <div className='col-4'>
                <input {...register("dueDate", {valueAsDate:true})} type="date" id="dueDate" className='form-control'/>
                {errors.dueDate && <p className='text-danger'>{errors.dueDate.message}</p>}
              </div>
              <div className='row justify-content-center mt-3'>
                <div className="col-auto">
                  <button className='btn btn-success add-btn'>Add</button>
                </div>
              </div>
        </form>
      </div>
    </div>
      
    </>
  )
}

export default AddTodo
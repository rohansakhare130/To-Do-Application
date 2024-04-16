import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
          e.preventDefault();// prevent default action
          if (value) {
            addTodo(value);// add todo 
            setValue('');// clear form after submission
          }
        };
  return (
   <form onSubmit={handleSubmit} className="Form-main">
   <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task?'/>
   <button type="submit" className='todo-btn'>Add Task</button>
   </form>
  )
}

export default TodoForm
import React from 'react'

const Todo = (props) => {

  return (
    <div className='flex justify-between items-center my-4 w-full bg-[#865bfb] py-3 px-4 rounded-md text-white'>
      <div style={{ textDecoration: props.todo.complete ? "line-through" : '' }} onClick={props.toggleComplete}>{props.todo.text}</div>
      <div className='flex gap-2'>
        <button
          className='fill-white duration-500'
          onClick={props.done }
        >{props.todo.complete
            ? <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" className='fill-green-600 duration-200 scale-105' viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" /></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" /></svg>}
          
        </button>
        <button
          className='fill-white duration-500'
          onClick={props.onDelete}
        ><svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
        </button>

      </div>
    </div>
  )
}

export default Todo;
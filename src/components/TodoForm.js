import { React, useState } from 'react'
import shortid from 'shortid';

const TodoForm = (props) => {

  const [text, setText] = useState('');
  
  const handelSubmit = (e) => {
    e.preventDefault();
    if (text) {
      props.onSubmit({
        id: shortid.generate(),
        text: text,
        complete: false,
      });
    }

    setText('')
  };
  const handelChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className='bg-[#1b1a3f] '>
      <form onSubmit={handelSubmit} className='flex flex-col pt-12  text-white w-full'>
        <h1 className='md:text-4xl text-xl text-center font-extrabold text-white '>Get Things Done!</h1>
        <div className='flex justify-between flex-col md:flex-row items-center my-8 w-full  border rounded-sm'>
          <input className='p-2 bg-[#1b1a3f] w-auto outline-none '
            type="text"
            onChange={handelChange}
            value={text}
            placeholder='What is the task today?'
            
          />
          <button className='bg-[#865bfb] h-full p-2  duration-500' onClick={handelSubmit}>Add Todo</button>
        </div>

      </form>
    </div>

  )
}

export default TodoForm
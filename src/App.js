import { React, useEffect, useState } from "react";
import TodoForm from './components/TodoForm';
import Todo from "./components/Todo";


function App() {
  let [todos, setTodos] = useState([]);
  const [newText, setNewText] = useState('');
  const [edit, setEdit] = useState(false);
  const [ready, setReady] = useState(false);
  const [todoToShow, setTodoToShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('todos'))) {
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, [])

  useEffect(() => {
    localStorage.clear('todos', JSON.stringify(todos));
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter(((todo) => todo.id !== id)));
  }

  const onEdit = (Todo) => {
    if (ready) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === Todo.id) {
            return {
              ...todo,
              text: newText
            }
          } else {
            return todo;
          }
        })
      )
    }


  };

  const updateTodoToShow = (str) => {
    setTodoToShow(str);
  }
  const removeAllCompleted = () => {
    setTodos(
      todos.filter((todo) => !todo.complete)
    )
  }
  const done = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo;
        }
      })
    )
  }
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        } else {
          return todo;
        }
      })
    )
  }



  if (todoToShow === "active") {
    todos = todos.filter((todo) => !todo.complete)
  } else if (todoToShow === "completed") {
    todos = todos.filter((todo) => todo.complete)
  }


  return (
    <div className="container mx-auto flex flex-col rounded-sm justify-start  items-center md:my-40 my-12 px-4 pt-10 md:px-12 pb-32 w-fit  bg-[#1b1a3f]  ">
      <TodoForm onSubmit={addTodo} />
      {edit &&

        <div className='flex justify-between items-center  w-full  border rounded-sm text-white duration-500'>
          <input type="text"
            className='p-2 bg-[#1b1a3f] w-auto outline-none '
            onChange={(e) => { setNewText(e.target.value) }}
            value={newText}
            placeholder='edit task ?' />
          <button className='bg-[#865bfb] h-full p-2 duration-500 ' onClick={() => { setReady(true) }}>Edit Todo</button>
        </div>


      }
      {todos.map((todo) =>
      (<Todo
        key={todo.id}
        todo={todo}
        onDelete={() => deleteTodo(todo.id)}
        onEdit={() => {
          setEdit(true);
          onEdit(todo)
        }}
        done={() => done(todo.id)}
        toggleComplete={() => toggleComplete(todo.id)}
      />)
      )}
      <div className="flex md:gap-4 gap-2 px-2 md:px-0 justify-center text-sm md:text-md text-white font-extrabold mt-14 mb-6 ">
        <button className="duration-500 bg-[#865bfb]  px-4 py-1 rounded-md" onClick={() => { updateTodoToShow("all") }}>All</button>
        <button className="duration-500 bg-blue-600 px-4 py-1 rounded-md" onClick={() => { updateTodoToShow("active") }}>Active</button>
        <button className="duration-500 bg-green-700 px-4 py-1 rounded-md" onClick={() => { updateTodoToShow("completed") }}>Completed</button>

        
      </div>
      <div className="flex flex-col gap-3 text-sm md:text-md">
        <button
          className="duration-500 px-4 py-1 rounded-md text-white font-extrabold"
          style={toggleAllComplete ? { backgroundColor: "red" } : { backgroundColor: "green" }}
          onClick={() => {
          setTodos(
            todos.map((todo) => ({
              ...todo,
              complete: toggleAllComplete,
            }))
            )
            setToggleAllComplete(!toggleAllComplete)
          }}>Toggle all completed : {`${!toggleAllComplete}`}</button> 
        
        {todos.some((todo) => todo.complete) ? <button className="duration-200 bg-[#FF0000] px-4 py-1 rounded-md text-white font-extrabold" onClick={removeAllCompleted}>Remove all completed Todos</button>
          : <button className="duration-200 bg-transparent px-4 py-1 rounded-md text-transparent font-extrabold" >Remove all completed Todos</button>}
      </div>
    </div>
  );
}

export default App;

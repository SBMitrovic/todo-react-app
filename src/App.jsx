import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);

  const [todoArray, setTodoArray] = useState([{
    name: "Learn",
    description: "ssmsmssm",
    date: "12.1.1995",
    completed: false
  }]);

  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(description);
    let newTodo = {name : name, description: description, date: date, completed : completed };

    setTodoArray([...todoArray, newTodo]);
    setName("");
    setDescription("");
    setDate("");
    setCompleted(false);

  }

  function returnAllTodos(todo, index) {
    return (
      <div className='container' key={index}>
        <h3 className='name'>
          Name{index}: {todo.name}
        </h3>
        Description: <p>{todo.description}</p>
        Date: <p>{todo.date}</p>
        Completed :<p>{todo.completed.toString()}</p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'></input>
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description'></input>
        <input value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date'></input>
        <input
          type="checkbox"
          placeholder='Completed'
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <button type='submit'>Submit</button>
      </form>
      {todoArray.map(returnAllTodos)}
    </>
  )
}

export default App
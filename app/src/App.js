import { useState } from "react";


function App() {
  const [todo,setTodo] = useState("")
  const [todos,setTodos] = useState([ ])
  const onChange = (event) =>setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === ""){
      return;
    }
    setTodo("")
    setTodos(currentArray => [todo, ...currentArray])
  }
  console.log(todos)

  return (
    <div className="App">
      <h1>My todos({todos.length})</h1>
      <form onSubmit={onSubmit}>
      <input 
        onChange ={onChange} 
        value={todo} 
        type="text" 
        placeholder="Write your todo list" /> 
      <button>Add todo</button>
      </form>
      <hr></hr>
      <ul>
        {todos.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

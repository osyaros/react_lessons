import { useEffect, useState } from "react";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [updateContainer, setUpdateContainer] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data);
      console.log('pizda');
    };
    fetchData();

  }, [updateContainer]);
  return (
    <div className="app__container">
      <p className="app__todo_container">TODO LIST</p>
      <div>
        <ul>
          <button>Click to Update</button>
          {todos.map((el) =>{
          <li>el.title</li>
         })}
          </ul>
      </div>

    </div>
  )
  }
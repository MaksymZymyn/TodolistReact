import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOKAL_STORAGE_KEY="react-todo-list-todos";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const storageTodos=JSON.parse(localStorage.getItem(LOKAL_STORAGE_KEY));
        if (storageTodos) {
          setTodos(storageTodos);
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem(LOKAL_STORAGE_KEY, JSON.stringify(todos))
          }, [todos]);

    function addtodo(todo) {
      setTodos([todo, ...todos]);
    };

    function togglecomplete(id) {
        setTodos(
          todos.map(todo=>{
            if (todo.id===id) {
                return {
                  ...todo,
                  completed: !todo.completed,
                  };
            }
            return todo;
          })
          );
    };

    function removetodo(id) {
        setTodos(todos.filter(todo=>todo.id !== id));
    };

    return (
      <div className="App">
        
            <Typography style={{ padding: 16 }} variant="h1">
              to-do-list
            </Typography>
            <TodoForm addtodo={addtodo} />
            <TodoList 
              todos={todos} 
              togglecomplete={togglecomplete} 
              removetodo={removetodo} />
        
      </div>
  );
}

export default App;

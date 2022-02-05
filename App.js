import React, {useState} from "react";
import "/.App.css";
import TodoForm from "./src/components/TodoForm";
import TodoList from "./src/components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    function addtodo(todo) {
        setTodos([todo, ...todos]);
    };
    return (
        <div className="App">
            <header className="App-header">
                <p>to-do-list</p>
                <TodoForm addtodo={addtodo} />
                <TodoList todos={todos} />
            </header>
        </div>   
    )
};

export default App
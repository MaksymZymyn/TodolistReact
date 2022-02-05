import {Button, TextField} from "@material-ui/core";
import {v4 as uuid} from "uuid";
import React, {useState} from "react";

        
function TodoForm({addtodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
    });

    function handletaskinputchange(event) {
        setTodo({...todo, 
            task: event.target.value});
    };

    function handlesubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
                addtodo({...todo, id: uuid(),});
                setTodo({...todo, task: ''});        }
    };
    return (
    <form className="todo-form" onSubmit={handlesubmit}>
        <TextField value={todo.task} onChange={handletaskinputchange} label="Task" type="text" name='task' />
        <Button type="submit">Add</Button>
    </form>
    );
};

export default TodoForm;
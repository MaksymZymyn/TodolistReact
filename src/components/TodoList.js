import {List} from "@material-ui/core";
import React from "react";


function TodoList({todos, togglecomplete, removetodo}) {
    return (
        <List>
            {todos.map(todo=>(
                <todo 
                key={todo.id} 
                todo={todo} 
                togglecomplete={togglecomplete}
                removetodo={removetodo} />
            ))}
        </List>
    );
};

export default TodoList;
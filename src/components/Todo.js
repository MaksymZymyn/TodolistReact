import {Checkbox, IconButton, ListItem, Typography} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({todo, togglecomplete, removetodo}) {
    function handlecheckboxclick() {
        togglecomplete(todo.id);
    };

    function handleremoveclick() {
        removetodo(todo.id);
    };

    return (
        <ListItem style={{display: "flex" }}>
            <Checkbox 
                checked={todo.completed}
                onClick={handlecheckboxclick} />
            <Typography variant="body1"  style={{
                textDecoration: todo.completed ? "line-through" : null,
            }}>{todo.task}</Typography>
            <IconButton onClick={handleremoveclick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
};

export default Todo;
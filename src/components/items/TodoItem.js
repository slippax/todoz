import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import classes from "./TodoItem.module.css";
const TodoItem = () => {
  const dispatch = useDispatch();

  const itemAddHandler = (item) => {
    dispatch(addTodo(item));
  };
  let todoItem = [];
  return (
    <div className={classes.form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          itemAddHandler(todoItem);
          e.target.reset();
        }}
      >
        <div className={classes.textArea}>
        <TextField
          variant="outlined"
          onChange={(e) => {
            todoItem = e.target.value;
          }}
          
        />
        </div>
        <div className={classes.todoButton}>
        <Button variant="contained" color="default" type="submit">Add Todo</Button>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;

import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./TodoItem.module.css";
import { FaPlus } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';
const TodoItem = () => {
  const dispatch = useDispatch();
  let todoItem = [];
  let todoLast = [];
  const itemAddHandler = (item) => {
    console.log(item);
    if (item.length === 0) {
      return;
    } else if (item === todoLast) {
      return;
    } else if (!item.trim()) {
      return;
    }
    todoLast = item;
    dispatch(addTodo(item));
  };
  return (
    <div className={classes.form}>
      <Zoom>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            itemAddHandler(todoItem);
            e.target.reset();
          }}
        >
          <span className={classes.textArea}>
            <TextField
              variant="outlined"
              id="outlined-search"
              onChange={(e) => {
                todoItem = e.target.value;
              }}
            />
          </span>
          <span className={classes.todoButton}>
            <Button variant="outlined" color="default" type="submit">
              <FaPlus />
            </Button>
          </span>
        </form>
      </Zoom>
    </div>
  );
};

export default TodoItem;

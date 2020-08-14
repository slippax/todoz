import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./TodoItem.module.css";
import { FaPlus } from "react-icons/fa";
import Bounce from "react-reveal/Fade";
const TodoItem = () => {
  const dispatch = useDispatch();
  let todoItem = [];
  let todoLast = [];
  const itemAddHandler = (item) => {
    if (item === "") {
      return;
    } else if (item === todoLast) {
      return;
    }
    todoLast = item;
    dispatch(addTodo(item));
  };
  return (
    <div className={classes.form}>
      <Bounce top>
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
      </Bounce>
    </div>
  );
};

export default TodoItem;

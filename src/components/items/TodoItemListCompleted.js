import React from "react";
import { useSelector } from "react-redux";
import { deleteTodo } from "../../actions";
import { useDispatch } from "react-redux";
import classes from "./TodoItemListCompleted.module.css";
import HeadShake from "react-reveal/HeadShake";

const TodoItemListCompleted = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const changedData = data.filter((i) => i.completed === true);
  const itemList = changedData.map((d) => <li onClick={() => dispatch(deleteTodo(d.id))} key={d.id}>{d.item}</li>);
  return (
    <div>
      <HeadShake spy={changedData}>
        <div className={classes.list}>
          <ul>{itemList}</ul>
        </div>
      </HeadShake>
    </div>
  );
};

export default TodoItemListCompleted;

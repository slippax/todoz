import React from "react";
import { useSelector } from "react-redux";
import { deleteTodo, revertTodo } from "../../actions";
import { useDispatch } from "react-redux";
import classes from "./TodoItemListCompleted.module.css";
import HeadShake from "react-reveal/HeadShake";
import { MdDelete, MdRedo } from "react-icons/md";

const TodoItemListCompleted = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const changedData = data.filter((i) => i.completed === true);
  const itemList = changedData.map((d) => (
    <div>
      <div className={classes.itemBox}>
        <li onClick={() => dispatch(deleteTodo(d.id))} key={d.id}>
          {d.item}
        </li>
        <button
          className={classes.button1}
          onClick={() => dispatch(revertTodo(d.id))}
        >
          <MdRedo />
        </button>
        <button
          className={classes.button2}
          onClick={() => dispatch(deleteTodo(d.id))}
        >
          <MdDelete />
        </button>
      </div>
      <div className={classes.boxApart}></div>
    </div>
  ));
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

import React from "react";
import { useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../../actions";
import { useDispatch } from "react-redux";
import classes from "./TodoItemList.module.css";
import HeadShake from "react-reveal/HeadShake";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItemList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const newData = data.filter((i) => i.completed === false);
  const itemList = newData.map((d) => (
    <div>
      <div className={classes.itemBox}>
        <li onClick={() => dispatch(completedTodo(d.id))} key={d.id}>
          {d.item}
        </li>
        <button
          className={classes.button1}
          onClick={() => dispatch(completedTodo(d.id))}
        >
          <FaCheck />
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
      <HeadShake spy={newData}>
        <div className={classes.list}>
          <ul>{itemList}</ul>
        </div>
      </HeadShake>
    </div>
  );
};

export default TodoItemList;

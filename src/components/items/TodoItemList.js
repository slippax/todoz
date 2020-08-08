import React from "react";
import { useSelector } from "react-redux";
import { deleteTodo } from "../../actions";
import { useDispatch } from "react-redux";
import classes from "./TodoItemList.module.css";
import HeadShake from "react-reveal/HeadShake";

const TodoItemList = () => {
  const dispatch = useDispatch();
  const completedList = [];
  const data = useSelector((state) => state.todos);
  const itemList = data.map((d) => (
    <li onClick={() => itemdeleteHandler(d.id)} key={d.id}>
      {d.item}
    </li>
  ));
  const itemdeleteHandler = (item) => {
    completedList.push(data)
    console.log(data);
    dispatch(deleteTodo(item));
  };
  return (
    <HeadShake spy={itemList}>
      <div className={classes.list}>
        <ul>{itemList}</ul>
      </div>
    </HeadShake>
  );
};

export default TodoItemList;

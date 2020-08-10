import React from "react";
import { useSelector } from "react-redux";
import { completedTodo } from "../../actions";
import { useDispatch } from "react-redux";
import classes from "./TodoItemList.module.css";
import HeadShake from "react-reveal/HeadShake";

const TodoItemList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const newData = data.filter((i) => i.completed === false);
  const itemList = newData.map((d) => (
    <li onClick={() => dispatch(completedTodo(d.id))} key={d.id}>
      {d.item}
    </li>
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

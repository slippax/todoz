import React from "react";
import { useSelector } from "react-redux";
import {completeTodo,  deleteTodo } from "../../actions";
import { useDispatch } from "react-redux";
import classes from "./TodoItemList.module.css";
import Zoom from "react-reveal/Zoom";
import Pulse from "react-reveal/Pulse";
import { FaCheck, FaTrash} from "react-icons/fa";

const TodoItemList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const newData = data.filter((i) => i.completed === false);
  const itemList = newData.map((d) => (
    <div key={d.id}>
      <div className={classes.itemBox}>
        <li onClick={() => dispatch(completeTodo(d.id))}>
          {d.item}
        </li>
        <button
          className={classes.button1}
          onClick={() => dispatch(completeTodo(d.id))} 
        >
          <FaCheck />
        </button>
        <button
          className={classes.button2}
          onClick={() => dispatch(deleteTodo(d.id))} 
        >
          <FaTrash/>
        </button>
      </div>
      <div className={classes.boxApart}></div>
    </div>
  ));
  return (
    <div>
      <Zoom>
        <div className={classes.list}>
          <Pulse spy={newData}>
          <ul>{itemList}</ul>
          </Pulse>
        </div>
      </Zoom>
    </div>
  );
};

export default TodoItemList;

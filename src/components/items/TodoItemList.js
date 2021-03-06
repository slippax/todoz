import React from "react";
import { useSelector } from "react-redux";
import {completeTodo,  deleteTodo } from "../../actions";
import { useDispatch } from "react-redux";
import classes from "./TodoItemList.module.css";
import Zoom from "react-reveal/Flip";
import Pulse from "react-reveal/Pulse";
import { FaCheck, FaTrash} from "react-icons/fa";
import Rotate from 'react-reveal/LightSpeed';
const TodoItemList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const newData = data.filter((i) => i.completed === false);
  
  const itemList = newData.map((d) => (
    <div key={d.id}>
      <Rotate right>
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
      </Rotate>
      <div className={classes.boxApart}></div>
    </div>
  ));
  return (
    <div>
      <Zoom top>
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

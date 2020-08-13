import React, { useState } from "react";
import TodoItem from "../items/TodoItem";
import TodoItemList from "../items/TodoItemList";
import TodoItemListCompleted from "../items/TodoItemListCompleted";
import TitleMenu from "./TitleMenu/TitleMenu";
import ItemCounter from "../items/ItemCounter/ItemCounter";
import classes from "./views.module.css";
import Bounce from "react-reveal/Zoom";
import { FaMinusCircle } from "react-icons/fa";
const Views = () => {
  const [progress, toggleProgress] = useState(true);
  const [completed, setCompleted] = useState(true);
  return (
    <div className={classes.pageWrapper}>
      <TitleMenu />
      <div className={classes.inputBox}>
        <TodoItem />
        <ItemCounter
          progressClicked={() => toggleProgress(!progress)}
          completedClicked={() => setCompleted(!completed)}
        />
      </div>
      <Bounce cascade>
        {progress ? (
          <span className={classes.goWrapper}>
            <h3 className={classes.goText}>
              ON THE GO{" "}
              <button className={classes.minusButton} onClick={()=>toggleProgress(!progress)}>
                <FaMinusCircle size='1.2em' />
              </button>
            </h3>
            <TodoItemList />
          </span>
        ) : (
          <div></div>
        )}
        {completed ? (
          <span className={classes.completedWrapper}>
            <h3 className={classes.completedText}>
              COMPLETED{" "}
              <button className={classes.minusButton} onClick={()=> setCompleted(!completed)}>
                <FaMinusCircle size='1.2em' />
              </button>
            </h3>
            <TodoItemListCompleted />
          </span>
        ) : (
          <div></div>
        )}
      </Bounce>
    </div>
  );
};

export default Views;

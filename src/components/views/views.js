import React, { useState } from "react";
import TodoItem from "../items/TodoItem";
import TodoItemList from "../items/TodoItemList";
import TodoItemListCompleted from "../items/TodoItemListCompleted";
import TitleMenu from "./TitleMenu/TitleMenu";
import ItemCounter from "../items/ItemCounter/ItemCounter";
import classes from "./views.module.css";
import Bounce from "react-reveal/Zoom";
import Zoom from "react-reveal/Fade";
import { FaMinusCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa"
const Views = () => {
  const [progress, toggleProgress] = useState(true);
  const [completed, setCompleted] = useState(true);
  const [statusBox, setStatusBox] = useState(true);
  return (
    <div className={classes.pageWrapper}>
      <TitleMenu />
      <div className={classes.inputBox}>
        <TodoItem />
        <Bounce top opposite when={statusBox}>
          {statusBox ? (
            <div>
              <ItemCounter
                minusStatusClicked={() => setStatusBox(!statusBox)}
                progressClicked={() => toggleProgress(!progress)}
                completedClicked={() => setCompleted(!completed)}
              />
            </div>
          ) : (
            <div></div>
          )}
        </Bounce>
        <Bounce top opposite when={!statusBox}>
        {!statusBox ? (
          <button
            className={classes.plusStatusButton}
            onClick={() => setStatusBox(!statusBox)}
          ><Zoom>
            <FaInfoCircle size="2.5em" /></Zoom>
          </button>
        ) : (
          <div></div>
        )}
        </Bounce>
      </div>
      <Bounce top opposite when={progress}>
        {progress ? (
          <span className={classes.goWrapper}>
            <Bounce>
            <h3 className={classes.goText}>
              
              <button
                className={classes.minusButton}
                onClick={() => toggleProgress(!progress)}
              >
                <FaMinusCircle size="1.2em" />
              </button>{" "}
              ON THE GO
              
            </h3>
            <TodoItemList />
            </Bounce>
          </span>
        ) : (
          <div></div>
        )}
      </Bounce>
      <Bounce top opposite when={completed}>
        {completed ? (
          <span className={classes.completedWrapper}>
            <Bounce>
            <h3 className={classes.completedText}>
              <button
                className={classes.minusButton}
                onClick={() => setCompleted(!completed)}
              >
                <FaMinusCircle size="1.2em" />
              </button>{" "}
              COMPLETED
            </h3>
            <TodoItemListCompleted />
            </Bounce>
          </span>
        ) : (
          <div></div>
        )}
      </Bounce>
    </div>
  );
};

export default Views;

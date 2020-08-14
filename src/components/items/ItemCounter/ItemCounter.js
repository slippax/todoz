import React from "react";
import { useSelector } from "react-redux";
import classes from "./ItemCounter.module.css";
import Flash from "react-reveal/Flash";
import Bounce from "react-reveal/Fade";
import { FaRegEye } from "react-icons/fa";
const ItemCounter = (props) => {
  const data = useSelector((state) => state.todos);
  const onGoData = data.filter((i) => i.completed === false);
  const completedData = data.filter((i) => i.completed === true);
  const onGoCount = onGoData.length;
  const completedCount = completedData.length;
  return (
    <Bounce top>
      <div className={classes.progress}>
        <span className={classes.onGO}>
          <Flash spy={onGoCount}></Flash>
          IN PROGRESS: <strong>{onGoCount}</strong>
        </span>
        <div>
          <button className={classes.progressButton}>
            <FaRegEye size="1.5em" onClick={props.progressClicked} />
          </button>
        </div>
        <span className={classes.completed}>
          <Flash spy={completedCount}></Flash>
          COMPLETED: <strong>{completedCount}</strong>
        </span>
        <div>
          <button className={classes.completedButton}>
            <FaRegEye size="1.5em" onClick={props.completedClicked} />
          </button>
        </div>
      </div>
    </Bounce>
  );
};

export default ItemCounter;

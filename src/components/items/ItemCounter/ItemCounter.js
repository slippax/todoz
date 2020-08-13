import React from "react";
import { useSelector } from "react-redux";
import classes from "./ItemCounter.module.css";
import Flash from "react-reveal/Flash";
import Bounce from "react-reveal/Fade";
const ItemCounter = () => {
  const data = useSelector((state) => state.todos);
  const onGoData = data.filter((i) => i.completed === false);
  const completedData = data.filter((i) => i.completed === true);
  const onGoCount = onGoData.length;
  const completedCount = completedData.length;
  return (
      <Bounce top >
    <div className={classes.progress}>
      <p className={classes.onGO}>
        <Flash spy={onGoCount}>
          <strong>{onGoCount}</strong>
        </Flash>{" "}
        IN PROGRESS
      </p>
      <p className={classes.completed}>
        <Flash spy={completedCount}>
          <strong>{completedCount}</strong>
        </Flash>{" "}
        COMPLETED
      </p>
    </div>
    </Bounce>
  );
};

export default ItemCounter;

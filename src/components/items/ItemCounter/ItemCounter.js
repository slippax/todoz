import React from "react";
import { useSelector } from "react-redux";
import classes from "./ItemCounter.module.css";
import Flash from "react-reveal/Flash";
import Bounce from "react-reveal/Fade";
import {FaRegEye} from 'react-icons/fa';
const ItemCounter = (props) => {
  const data = useSelector((state) => state.todos);
  const  onGoData = data.filter((i) => i.completed === false);
  const completedData = data.filter((i) => i.completed === true);
  const onGoCount = onGoData.length;
  const completedCount = completedData.length;
  return (
      <Bounce top >
    <div className={classes.progress} >
      <div className={classes.onGO}>
        <Flash spy={onGoCount}>
          <strong>{onGoCount}</strong>
        </Flash>{" "}
        IN PROGRESS
        <button className={classes.progressButton}><FaRegEye size='1.5em' onClick={props.progressClicked}/></button>
      </div>
      <div className={classes.completed}>
        <Flash spy={completedCount}>
          <strong>{completedCount}</strong>
        </Flash>{" "}
        COMPLETED
        <button className={classes.completedButton}><FaRegEye size='1.5em' onClick={props.completedClicked}/></button>
      </div>
    </div>
    </Bounce>
  );
};

export default ItemCounter;

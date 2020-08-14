import React from "react";
import { useSelector } from "react-redux";
import { deleteProgress, deleteCompleted } from "../../../actions/index";
import { useDispatch } from "react-redux";
import classes from "./ItemCounter.module.css";
import Flash from "react-reveal/Flash";
import Flip from "react-reveal/Flip";
import { FaRegEye } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { FaMinusCircle } from "react-icons/fa";
const ItemCounter = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todos);
  const onGoData = data.filter((i) => i.completed === false);
  const completedData = data.filter((i) => i.completed === true);
  const onGoCount = onGoData.length;
  const completedCount = completedData.length;
  return (
    <Flip top>
      <div className={classes.progress}>
        <span className={classes.onGO}>
        <button
        className={classes.minusStatusButton}
        onClick={props.minusStatusClicked}
      >
        <FaMinusCircle size="1.2em" />
      </button>
          <Flash spy={onGoCount}></Flash>
          IN PROGRESS: <strong>{onGoCount}</strong>
        </span>
        <div>
          <button
            className={classes.progressButton}
            onClick={props.progressClicked}
          >
            <FaRegEye size="2em" />
          </button>
          <button className={classes.progressDeleteButton} onClick={() => { if (window.confirm('Are you sure you wish to delete all in progress items?')) dispatch(deleteProgress()) } }>
            <FiTrash2 size="2em" />
          </button>
        </div>
        <span className={classes.completed}>
          <Flash spy={completedCount}></Flash>
          COMPLETED: <strong>{completedCount}</strong>
        </span>
        <div>
          <button
            className={classes.completedButton}
            onClick={props.completedClicked}
          >
            <FaRegEye size="2em" />
          </button>
          <button className={classes.completedDeleteButton} onClick={() => { if (window.confirm('Are you sure you wish to delete all completed items?')) dispatch(deleteCompleted()) } }>
            <FiTrash2 size="2em" />
          </button>
        </div>
      </div>
    </Flip>
  );
};

export default ItemCounter;

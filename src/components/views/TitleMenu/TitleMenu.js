import React from "react";
import classes from "./TitleMenu.module.css";
import Flip from 'react-reveal/Roll';
const TitleMenu = () => {
  return (
    <div className={classes.titleText}>
      <Flip top cascade>
        <h1>Todoz</h1>
        <p className={classes.descriptionText}>Add a todo below to begin</p>
      </Flip>
    </div>
  );
};

export default TitleMenu;

import React from "react";
import classes from "./TitleMenu.module.css";
import Flip from 'react-reveal/Flip';
const TitleMenu = () => {
  return (
    <div className={classes.titleText}>
      <Flip cascade>
        <h1>Todoz</h1>
        <p className={classes.descriptionText}>Add a todo below to begin</p>
      </Flip>
    </div>
  );
};

export default TitleMenu;

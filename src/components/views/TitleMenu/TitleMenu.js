import React from "react";
import classes from "./TitleMenu.module.css";
import Bounce from "react-reveal/Roll";
const TitleMenu = () => {
  return (
    <div className={classes.titleText}>
      <Bounce top cascade>
        <h1>Todoz</h1>
        <p className={classes.descriptionText}>Add a todo below to begin</p>
      </Bounce>
    </div>
  );
};

export default TitleMenu;
import React from "react";
import TodoItem from "../items/TodoItem";
import TodoItemList from "../items/TodoItemList";
import TitleMenu from "./TitleMenu/TitleMenu";
import classes from "./views.module.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Bounce from "react-reveal/Flip";
const views = () => {
  const theme = createMuiTheme({
    typography: {
      button: {
        fontFamily: "Permanent Marker",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.pageWrapper}>
        <Bounce top>
          <TitleMenu />
          <TodoItem />
          <div className={classes.goWrapper}>
            <h3 className={classes.goText}>ON THE GO</h3>
            <TodoItemList/>
          </div>
          <div className={classes.completedWrapper}>
          <h3 className={classes.completedText}>COMPLETED</h3>
          </div>
        </Bounce>
      </div>
    </MuiThemeProvider>
  );
};

export default views;

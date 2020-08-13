import React from "react";
import TodoItem from "../items/TodoItem";
import TodoItemList from "../items/TodoItemList";
import TodoItemListCompleted from '../items/TodoItemListCompleted';
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
          <span className={classes.goWrapper}>
            <h3 className={classes.goText}>ON THE GO</h3>
            <TodoItemList/>
          </span>
          <span className={classes.completedWrapper}>
          <h3 className={classes.completedText}>COMPLETED</h3>
          <TodoItemListCompleted/>
          </span>
        </Bounce>
      </div>
    </MuiThemeProvider>
  );
};

export default views;

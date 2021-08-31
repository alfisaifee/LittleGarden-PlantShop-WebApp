import React from "react";
import useStyles from "./styles";

export default function ErrorDisplay(props) {
  const classes = useStyles();
  return (
    <div className={classes.errorNotice}>
      <div style={{ whiteSpace: "pre-wrap" }}>{props.message}</div>
      <button className={classes.errorNoticeButton} onClick={props.clearError}>
        X
      </button>
    </div>
  );
}

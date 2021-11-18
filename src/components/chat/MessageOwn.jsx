import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useCommonStyles } from "./commonStyles";

const useStyles = makeStyles((theme) =>
  createStyles({
    messageOrange: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#99FF99",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #dfd087",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #99FF99",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #dfd087",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px",
      },
    },
  })
);

const MessageOwn = (props) => {
  const { message } = props;
  const commomClasses = useCommonStyles();
  const classes = useStyles();
  const asLocaleString = (value) => {
    return new Date(value).toLocaleString();
  };
  return (
    <div className={commomClasses.messageRowRight}>
      <div className={classes.messageOrange}>
        <pre className={commomClasses.messageContent}>{message.contents}</pre>
        <div className={commomClasses.messageTimeStampRight}>
          {asLocaleString(message.created_at)}
        </div>
      </div>
    </div>
  );
};

export default MessageOwn;

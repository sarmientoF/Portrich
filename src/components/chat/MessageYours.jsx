import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { useCommonStyles } from "./commonStyles";

const useStyles = makeStyles((theme) =>
  createStyles({
    messageBlue: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#FFFFFF",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #97C6E3",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #FFFFFF",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #97C6E3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px",
      },
    },
  })
);

const MessageYours = (props) => {
  const { message } = props;
  const commomClasses = useCommonStyles();
  const classes = useStyles();
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = message.name ? message.name : "名無しさん";
  const asLocaleString = (value) => {
    return new Date(value).toLocaleString();
  };
  return (
    <div className={commomClasses.messageRow}>
      <Avatar
        alt={displayName}
        className={commomClasses.orange}
        src={photoURL}
      ></Avatar>
      <div>
        <div className={commomClasses.displayName}>{displayName}</div>
        <div className={classes.messageBlue}>
          <div>
            <pre className={commomClasses.messageContent}>
              {message.contents}
            </pre>
          </div>
          <div className={commomClasses.messageTimeStampRight}>
            {asLocaleString(message.created_at)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageYours;

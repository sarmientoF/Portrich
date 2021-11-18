import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { FormControl, MenuItem, TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { sendAndFetch } from "./operations";
import { color } from "@material-ui/system";

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "98%",
      height: "10%",
      margin: `${theme.spacing(0)} auto`,
      marginTop: 10,
      "& .MuiSvgIcon-root": {
        color: "#f7f7f7",
      },
    },
    wrapText: {
      width: "100%",
    },
    button: {},
  })
);

const MessageInput = (props) => {
  const { queryParameters, setMessageList } = props;
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    if (!message) {
      return;
    }
    sendAndFetch(
      message,
      setMessageList,
      queryParameters && queryParameters.cargo_status_id
    );
    setMessage("");
  };
  return (
    <>
      <div className={classes.wrapForm}>
        <TextField
          id="standard-text"
          label="メッセージを入力"
          className={classes.wrapText}
          multiline
          value={message}
          onChange={handleMessage}
          multiline={true}
          rows={3}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={sendMessage}
        >
          <SendIcon />
        </Button>
      </div>
    </>
  );
};

export default MessageInput;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "../../../dist/css/shipments_detail.module.css";
import { getId } from "../../../reducks/users/selectors";
import { Paper } from "@material-ui/core";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { fetchChatMessages } from "../../../common/services/chat";
import {
  MessageInput,
  MessageOwn,
  MessageYours,
} from "../../../components/chat/";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100%",
      height: "390px",
      display: "flex",
      flexDirection: "column",
      background: "#fff",
      border: "1px solid #dadbdb",
      boxSizing: "border-box",
    },
    messagesBody: {
      width: "100%",
      marginBottom: 10,
      overflowY: "scroll",
      height: "270px",
    },
  })
);

const ShipmentsDetailsChats = (props) => {
  const { queryParameters } = props;
  const messageclasses = useStyles();
  const [messageList, setMessageList] = useState([]);
  const selector = useSelector((state) => state);
  const userId = getId(selector);
  const isOwnMessage = (message) => {
    if (!message || !message.user_id) {
      return false;
    }
    if (!userId) {
      return false;
    }
    return message.user_id.replaceAll(/-/g, "") === userId.replaceAll(/-/g, "");
  };
  useEffect(() => {
    console.log(userId);
    fetchChatMessages(
      queryParameters && queryParameters.cargo_status_id,
      setMessageList
    );
  }, [queryParameters]);

  return (
    <div className={messageclasses.container}>
      <Paper className={messageclasses.paper} zDepth={2}>
        <Paper id="style-1" className={messageclasses.messagesBody}>
          {messageList.map((message, index) =>
            isOwnMessage(message) ? (
              <MessageOwn message={message} />
            ) : (
              <MessageYours message={message} />
            )
          )}
        </Paper>
        <MessageInput
          queryParameters={queryParameters}
          setMessageList={setMessageList}
        />
      </Paper>
    </div>
  );
};

export default ShipmentsDetailsChats;

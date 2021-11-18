import React from "react";
import classes from "../../../dist/css/chatpage.module.css";
import { ChatPageItem } from "../../../components/chatpage/index";

const ChatPage = () => {
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <ChatPageItem />
      </div>
    </section>
  );
};

export default ChatPage;

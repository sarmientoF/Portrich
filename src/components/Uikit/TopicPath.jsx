import React from "react";
import classes from "../../dist/css/topicpath.module.css";
import { ReactComponent as ArrowNext } from '../../dist/images/arrow_TopicPath.svg';

const TopicPath = (props) => {
  const {old, now} = props

  return (
    <div className={classes.topic_path}>
      <div className={classes.path_old}>{old}</div>
      <ArrowNext />
      <div className={classes.path_now}>{now}</div>
    </div>
  )
}
export default TopicPath;

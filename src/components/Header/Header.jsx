import React from "react";
import { useSelector } from "react-redux";
import classes from "../../dist/css/common.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { ReactComponent as Logo } from "../../dist/images/05.svg";
import { getIsStaff } from "../../reducks/users/selectors";
import AccountIcon from "../../dist/images/user1.svg";
import { NewsList, ChatList } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBadge-colorSecondary": {
      color: "#fff",
    },
    "& .MuiBadge-badge": {
      fontSize: 11,
    },
  },
}));

const Header = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const isStaff = getIsStaff(selector);

  return (
    <header className={classes.header}>
      <div className={classes.header_title_area}>
        <a
          className={classes.header_title}
          onClick={() => dispatch(push("/top"))}
        >
          <Logo />
        </a>
      </div>

      <div className={classes.header_right_area}>
        <div className={classes.header_right_item}>
          <div className={styles.root}>
            <ChatList />
          </div>
        </div>
        <div className={classes.header_right_item}>
          <div className={styles.root}>
            <NewsList />
          </div>
        </div>
        <div className={classes.header_right_item}>
          <a>
            <img
              className={classes.user}
              src={AccountIcon}
              onClick={() => dispatch(push("/mypages"))}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

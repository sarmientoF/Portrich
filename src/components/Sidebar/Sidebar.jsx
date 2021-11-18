import React from "react";
import classes from "../../dist/css/common.module.css";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { SidebarItem } from "./items/oparations";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  action: {
    backgroundColor: "#f2f3f5",
  },
}));

const Sidebar = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section className={classes.sidebar}>
      <div className={classes.sidebar_menu_area}>
        {SidebarItem.map((value) => (
          <div
            className={`${classes.sidebar_menu_item} ${
              pathname === value.path && styles.action
            }`}
            onClick={() => dispatch(push(value.path))}
          >
            {value.icon}
            <span className={classes.sidebar_menu_item_text}>{value.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;

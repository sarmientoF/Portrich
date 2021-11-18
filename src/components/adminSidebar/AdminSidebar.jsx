import React, { useState } from "react";
import classes from "../../dist/css/common.module.css";
import { SidebarTitleItem } from "./items/oparations";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { ManegimentList, ImportList, ExportList, MasterList } from "./ListItem";

const useStyles = makeStyles((theme) => ({
  action: {
    backgroundColor: "#f2f3f5",
    color: "#333 !important",
  },
}));

const AdminSidebar = () => {
  const styles = useStyles();
  const location = useLocation();
  const pathname = location.pathname;

  const [toggleManagement, setToggleManagement] = useState("");
  const [toggleImport, setToggleImport] = useState("");
  const [toggleExport, setToggleExport] = useState("");
  const [toggleMaster, setToggleMaster] = useState("");

  const toggleAccordionManagement = () => {
    setToggleManagement(toggleManagement === "" ? classes.active : "");
  };
  const toggleAccordionImport = () => {
    setToggleImport(toggleImport === "" ? classes.active : "");
  };
  const toggleAccordionExport = () => {
    setToggleExport(toggleExport === "" ? classes.active : "");
  };
  const toggleAccordionMaster = () => {
    setToggleMaster(toggleMaster === "" ? classes.active : "");
  };

  return (
    <section className={classes.admin_sidebar}>
      <div className={classes.admin_sidebar_title_area}>
        {SidebarTitleItem.map((value) => (
          <div
            className={
              value.id === 1
                ? toggleManagement
                : value.id === 2
                ? toggleImport
                : value.id === 3
                ? toggleExport
                : value.id === 4
                ? toggleMaster
                : undefined
            }
          >
            <div
              className={classes.admin_sidebar_title_item}
              onClick={
                value.id === 1
                  ? toggleAccordionManagement
                  : value.id === 2
                  ? toggleAccordionImport
                  : value.id === 3
                  ? toggleAccordionExport
                  : value.id === 4
                  ? toggleAccordionMaster
                  : undefined
              }
            >
              <div className={classes.admin_sidebar_title_item_icon}>
                <span class="material-icons">{value.icon}</span>
              </div>
              <span className={classes.admin_sidebar_title_item_text}>
                {value.title}
              </span>
              <span
                className={`${classes.admin_sidebar_title_item_arrow} ${
                  value.id === 1
                    ? toggleManagement
                    : value.id === 2
                    ? toggleImport
                    : value.id === 3
                    ? toggleExport
                    : value.id === 4
                    ? toggleMaster
                    : undefined
                }`}
              >
                <span class="material-icons">expand_more</span>
              </span>
            </div>
            <div className={classes.admin_sidebar_list_area}>
              {value.id === 1 ? (
                <ManegimentList pathname={pathname} styles={styles} />
              ) : value.id === 2 ? (
                <ImportList pathname={pathname} styles={styles} />
              ) : value.id === 3 ? (
                <ExportList pathname={pathname} styles={styles} />
              ) : value.id === 4 ? (
                <MasterList pathname={pathname} styles={styles} />
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminSidebar;

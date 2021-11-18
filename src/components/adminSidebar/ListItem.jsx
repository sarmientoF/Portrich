import React from "react";
import classes from "../../dist/css/common.module.css";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import {
  manegimentListItem,
  importListItem,
  masterListItem,
  exportListItem,
} from "./items/oparations";

export const ManegimentList = (props) => {
  const dispatch = useDispatch();
  const { pathname, styles } = props;
  return (
    <>
      {manegimentListItem.map((value) => (
        <div
          className={`${classes.admin_sidebar_list_item} ${
            pathname === value.path && styles.action
          }`}
          onClick={() => dispatch(push(value.path))}
        >
          {value.name}
        </div>
      ))}
    </>
  );
};

export const ImportList = (props) => {
  const dispatch = useDispatch();
  const { pathname, styles } = props;
  return (
    <>
      {importListItem.map((value) => (
        <div
          className={`${classes.admin_sidebar_list_item} ${
            pathname === value.path && styles.action
          }`}
          onClick={() => dispatch(push(value.path))}
        >
          {value.name}
        </div>
      ))}
    </>
  );
};

export const ExportList = (props) => {
  const dispatch = useDispatch();
  const { pathname, styles } = props;
  return (
    <>
      {exportListItem.map((value) => (
        <div
          className={`${classes.admin_sidebar_list_item} ${
            pathname === value.path && styles.action
          }`}
          onClick={() => dispatch(push(value.path))}
        >
          {value.name}
        </div>
      ))}
    </>
  );
};

export const MasterList = (props) => {
  const dispatch = useDispatch();
  const { pathname, styles } = props;
  return (
    <>
      {masterListItem.map((value) => (
        <div
          className={`${classes.admin_sidebar_list_item} ${
            pathname === value.path && styles.action
          }`}
          onClick={() => dispatch(push(value.path))}
        >
          {value.name}
        </div>
      ))}
    </>
  );
};

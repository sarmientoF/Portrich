import React from "react";
import { Button, makeStyles } from "@material-ui/core/";
import classes from "../../../dist/css/shipments_detail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppConfig } from "../../../common/config";
import {
  uploadFileAndFetchAll,
  getFileIcon,
  getFileColor,
} from "./files/operations";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    width: "15%",
    padding: "8px 0",
    fontSize: 15,
    background: "#0052cc",
    textTransform: "capitalize",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
    "&:hover": {
      background: "#0052cc",
      opacity: 0.8,
    },
  },
}));

const ENDPOINTS = {
  FILE_DOWNLOAD: "/api/v1/cargo_statuses/documents/download/",
};

const ShipmentsDetailsDocument = (props) => {
  const { queryParameters, fileList, setFileList } = props;
  const styles = useStyles();
  const upload = (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    uploadFileAndFetchAll(
      queryParameters.cargo_status_id,
      e.target.files[0],
      setFileList
    );
  };

  return (
    <div className={classes.s_d_area}>
      <div className={classes.document_upload_btn_area}>
        <Button className={styles.btn} variant="contained" component="label">
          Upload File
          <input type="file" hidden onInput={upload}></input>
        </Button>
      </div>
      <div className={classes.document_area}>
        {fileList.map((row, index) => (
          <a
            href={`${AppConfig.api.url}${ENDPOINTS.FILE_DOWNLOAD}${row.id}/`}
            className={classes.document_item}
            key={index}
          >
            <div className={classes.document_item_title}>{row.title}</div>
            <div className={classes.document_item_icon}>
              <FontAwesomeIcon
                icon={getFileIcon(row.title)}
                style={getFileColor(row.title)}
              />
            </div>
            <div className={classes.document_item_registered_person}>
              {row.created_by}
            </div>
            <div className={classes.document_item_date}>{row.created_at}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShipmentsDetailsDocument;

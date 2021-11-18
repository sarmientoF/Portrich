import React from "react";
import { Button, makeStyles } from "@material-ui/core/";
import classes from "../../../dist/css/shipments_detail.module.css";
import { uploadImage } from "./images/operations";

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

const ShipmentsDetailsPhoto = (props) => {
  const { queryParameters, imageList } = props;
  const styles = useStyles();
  const upload = (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    uploadImage(queryParameters.cargo_status_id, e.target.files[0]);
  };
  return (
    <div className={classes.s_d_area}>
      <div className={classes.photo_upload_btn}>
        <Button className={styles.btn} variant="contained" component="label">
          Upload Image
          <input type="file" hidden onInput={upload}></input>
        </Button>
      </div>
      <div className={classes.photo_area}>
        {imageList.map((row, index) => (
          <div className={classes.photo_item} key={index}>
            <div className={classes.photo_item_img_area}>
              <img className={classes.photo_item_img_item} src={row.contents} />
            </div>
            <div className={classes.photo_item_name}>{row.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentsDetailsPhoto;

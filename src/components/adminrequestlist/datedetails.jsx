import React from "react";
import { TextField } from "@material-ui/core";

const DateDetails = (props) => {
  const { state, setState, classes, styles } = props;

  function createData(id, name) {
    return { id, name };
  }
  const dateItem = [
    createData("etd", "出発日(ETD)"),
    createData("eta", "到着日(ETA)"),
    createData("cy_open", "CY OPEN"),
    createData("cy_cut", "CY CUT"),
    createData("cfs_cut", "CFS OPEN"),
    createData("cfs_open", "CFS CUT"),
  ];

  const handleChange = (e) => {
    setState((items) => {
      return {
        ...items,
        [e.target.id]: e.target.value,
      };
    });
  };

  return (
    <>
      {dateItem.map((value) => (
        <div className={classes.dialog_content_item}>
          <div className={classes.dialog_content_item_title}>{value.name}</div>
          <div
            className={`${styles.form} ${classes.dialog_content_item_textfield}`}
          >
            <TextField
              type="date"
              id={value.id}
              defaultValue={state[value.id]}
              onChange={handleChange}
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default DateDetails;

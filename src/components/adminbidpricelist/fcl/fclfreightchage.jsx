import React, { useState } from "react";
import { TextField, FormControl, Select, MenuItem } from "@material-ui/core";

const FclFreightChage = (props) => {
  const { state, setState, classes, styles } = props;

  function createData(id, name) {
    return { id, name };
  }
  const dateItem = [createData("ocean_freight", "Ocean Freight")];
  const costItem = [createData("usd", "USD"), createData("jpy", "JPY")];

  const handleChange = (e) => {
    setState((items) => {
      return {
        ...items,
        [e.target.id]: e.target.value,
      };
    });
  };
  const [age, setAge] = useState("usd");

  const handleChangeCost = (e) => {
    setAge(e.target.value);
  };
  return (
    <>
      {dateItem.map((value) => (
        <div className={classes.dialog_content_item}>
          <div className={classes.dialog_content_item_title_cost}>
            {value.name}
          </div>
          <div
            className={`${styles.form} ${classes.dialog_content_item_costarea}`}
          >
            <div className={classes.dialog_content_item_costarea_cost}>
              <FormControl variant="filled" sx={{ m: 1, minWidth: 50 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChangeCost}
                  autoWidth
                >
                  {costItem.map((value, index) => (
                    <MenuItem key={index} value={value.id}>
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className={classes.dialog_content_item_costarea_field}>
              <TextField
                type="number"
                id={value.id}
                defaultValue={state[value.id]}
                onChange={handleChange}
                variant="filled"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default FclFreightChage;

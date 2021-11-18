import React, { useState } from "react";
import { TextField, FormControl, Select, MenuItem } from "@material-ui/core";

const FclOriginChage = (props) => {
  const { state, setState, classes, styles } = props;

  function createData(id, name) {
    return { id, name };
  }
  const dateItem = [
    createData("origin_fuel_surchage", "FUEL SURCHARGE"),
    createData("origin_wrs", "WRS"),
    createData("origin_sequrity_charge", "SECURITY CHARGE"),
    createData("origin_lss", "LSS"),
    createData("origin_ams", "AMS"),
    createData("origin_thc", "THC"),
    createData("origin_doc_fee", "Doc Fee"),
    createData("origin_seal_fee", "Seal Fee"),
    createData("origin_cfs_charge", "CFS CHARGE"),
    createData("origin_pss", "PSS"),
    createData("origin_drayage_recovery_charge", "DRC"),
    createData("origin_afs", "AFS"),
    createData("origin_ems", "EMS"),
    createData("origin_err", "ERR"),
    createData("origin_cic", "CIC"),
    createData("origin_afr", "AFR"),
    createData("origin_surrendered_fee", "Surrendered Fee"),
    createData("origin_gbf", "GBF"),
    createData("origin_cds", "CDS"),
    createData("origin_faf", "FAF"),
    createData("origin_yas", "YAS"),
    createData("origin_ebs", "EBS"),
  ];
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
export default FclOriginChage;

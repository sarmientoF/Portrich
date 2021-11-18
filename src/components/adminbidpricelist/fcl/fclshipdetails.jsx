import React, { useState } from "react";
import { TextField, FormControl, Select, MenuItem } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab/";

const FclShipDetails = (props) => {
  const { state, setState, classes, styles, portList, shippngCompanyList } =
    props;

  const handleChangeShippingCompany = (_, value) => {
    setState({ ...state, shipping_company: value });
  };
  const handleChangeOverseasFW = (_, value) => {
    setState({ ...state, overseas_FW: value });
  };
  const handleChangeCargoName = (_, value) => {
    setState({ ...state, cargo_name: value });
  };
  const handleChangePol = (_, value) => {
    setState({ ...state, pol: value });
  };
  const handleChangePod = (_, value) => {
    setState({ ...state, pod: value });
  };
  const handleChangeContainerTypes = (_, value) => {
    setState({ ...state, container_types: value });
  };
  const handleChangeEstimatedDeadline = (e) => {
    setState({ ...state, estimated_deadline: e.target.value });
  };
  const handleChangeIncoterms = (_, value) => {
    setState({ ...state, incoterms: value });
  };

  const [freetimetype, setFreeTimeType] = useState("combine");
  const handleChangeFreeTimeType = (e) => {
    setFreeTimeType(e.target.value);
  };
  const handleChangeFreeTime = (e) => {
    setState({ ...state, freetime: e.target.value });
  };
  const freeTimeTypeItem = [
    { id: "combine", name: "Combine" },
    { id: "dem_det", name: "Dem/Det" },
  ];
  return (
    <>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>船会社</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            options={shippngCompanyList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeShippingCompany}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>国外FW</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            options={shippngCompanyList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeOverseasFW}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>貨物名</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            options={shippngCompanyList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeCargoName}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>

      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>出発港(POL)</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            options={portList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangePol}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>到着港(POD)</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            options={portList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangePod}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>インコタームズ</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            options={portList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeIncoterms}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>コンテナタイプ</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            options={portList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeContainerTypes}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>見積期限日</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <TextField
            type="date"
            defaultValue={state.estimated_deadline}
            onChange={handleChangeEstimatedDeadline}
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>Free Time</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_freetime}`}
        >
          <div className={classes.dialog_content_item_freetime_type}>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 50 }}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={freetimetype}
                onChange={handleChangeFreeTimeType}
                autoWidth
              >
                {freeTimeTypeItem.map((value, index) => (
                  <MenuItem key={index} value={value.id}>
                    {value.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className={classes.dialog_content_item_freetime_value}>
            <TextField
              type="number"
              defaultValue={state.freetime}
              onChange={handleChangeFreeTime}
              variant="filled"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FclShipDetails;

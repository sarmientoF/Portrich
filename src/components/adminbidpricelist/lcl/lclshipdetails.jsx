import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab/";

const LclShipDetails = (props) => {
  const { state, setState, classes, styles, portList, shippngCompanyList } =
    props;
  const handleChangeShippingCompany = (_, value) => {
    setState({ ...state, shipping_company: value });
  };
  const handleOverseasShipName = (e) => {
    setState({ ...state, ship_name: e.target.value });
  };
  const handleOverseasVoyageNo = (e) => {
    setState({ ...state, voyage_no: e.target.value });
  };
  const handleOverseasShipId = (e) => {
    setState({ ...state, ship_id: e.target.value });
  };
  const handleChangePol = (_, value) => {
    setState({ ...state, pol: value });
  };
  const handleChangePod = (_, value) => {
    setState({ ...state, pod: value });
  };
  const handleChangeTransit1 = (_, value) => {
    setState({ ...state, transit1: value });
  };
  const handleChangeTransit2 = (_, value) => {
    setState({ ...state, transit2: value });
  };
  const handleChangeTransit3 = (_, value) => {
    setState({ ...state, transit3: value });
  };
  return (
    <>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>船会社</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            id="shipping_company"
            options={shippngCompanyList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeShippingCompany}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>船名</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <TextField
            id="ship_name"
            defaultValue={state.ship_name}
            onChange={handleOverseasShipName}
            variant="filled"
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>Voyage No</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <TextField
            id="voyage_no"
            defaultValue={state.voyage_no}
            onChange={handleOverseasVoyageNo}
            variant="filled"
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>Ship Id</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <TextField
            id="ship_id"
            defaultValue={state.ship_id}
            onChange={handleOverseasShipId}
            variant="filled"
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>出発港(POL)</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            id="pol"
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
            id="pod"
            options={portList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangePod}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>経由港1</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            id="pod"
            options={portList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeTransit1}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>経由港2</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            id="pod"
            options={portList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeTransit2}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
      <div className={classes.dialog_content_item}>
        <div className={classes.dialog_content_item_title}>経由港3</div>
        <div
          className={`${styles.form} ${classes.dialog_content_item_textfield}`}
        >
          <Autocomplete
            id="pod"
            options={portList}
            getOptionLabel={(option) => option.name}
            onChange={handleChangeTransit3}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
        </div>
      </div>
    </>
  );
};
export default LclShipDetails;

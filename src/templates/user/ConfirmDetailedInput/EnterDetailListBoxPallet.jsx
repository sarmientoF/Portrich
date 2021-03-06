import React, { useState, useEffect } from "react";
import classes_1 from "../../../dist/css/enter_detail.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { fetchPalletTypeList } from "../../../common/services/fetchData";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  root2: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(1.5),
      width: "17ch",
    },
  },
  root3: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  root4: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "95%",
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1.5),
    width: "17ch",
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
    width: 200,
  },
}));

const EnterDetailListBoxPallet = (props) => {
  const { state, setState } = props;
  const mt_30 = { marginTop: "30px" };
  const classes = useStyles();

  const [palletTypeList, setPalletTypeList] = useState([]);
  useEffect(() => {
    fetchPalletTypeList(setPalletTypeList);
  }, []);

  const handleChangeQuontity = (e) => {
    setState({ ...state, quantity: e.target.value });
  };
  const handleChangeRadio = (e) => {
    setState({
      ...state,
      radios: e.target.value,
      volumeM3: undefined,
      sizeL: undefined,
      sizeW: undefined,
      sizeH: undefined,
      pallettype: undefined,
    });
  };

  const handleChangeVolumeM3 = (e) => {
    setState({ ...state, volumeM3: e.target.value });
  };
  const handleChangeSizeL = (e) => {
    setState({ ...state, sizeL: e.target.value });
  };
  const handleChangeSizeW = (e) => {
    setState({ ...state, sizeW: e.target.value });
  };
  const handleChangeSizeH = (e) => {
    setState({ ...state, sizeH: e.target.value });
  };
  const handleChangeWeight = (e) => {
    setState({ ...state, weight: e.target.value });
  };
  const handlePalletTypeList = (e) => {
    setState({ ...state, pallettype: e.target.value });
  };
  const handleChangeCustoms = (e) => {
    setState({ ...state, customs: e.target.value });
  };
  const handleChangeTruck = (e) => {
    setState({ ...state, truck: e.target.value });
    if (e.target.value === "???????????????") {
      setState({
        ...state,
        truck: e.target.value,
        truckloading: undefined,
        workplace: undefined,
        workplace_address: undefined,
        pickup_datetime: undefined,
        delivery_datetime: undefined,
      });
    }
  };
  const handleChangeTruckLoading = (e) => {
    setState({ ...state, truckloading: e.target.value });
  };
  const handleWorkPalce = (e) => {
    setState({ ...state, workplace: e.target.value });
  };
  const handleWorkPalceAddress = (e) => {
    setState({ ...state, workplace_address: e.target.value });
  };
  const handlePickupDateTime = (e) => {
    setState({ ...state, pickup_datetime: e.target.value });
  };
  const handleDeliveryDateTime = (e) => {
    setState({ ...state, delivery_datetime: e.target.value });
  };
  const handleReMarks = (e) => {
    setState({ ...state, remarks: e.target.value });
  };
  return (
    <div className={classes_1.block_body}>
      <div className={classes_1.block_title}>??????</div>
      <div className={classes_1.flex_box}>
        <div className={classes.root2}>
          <TextField
            label="??????"
            type="number"
            variant="outlined"
            defaultValue={state.quantity}
            onChange={handleChangeQuontity}
          />
        </div>
      </div>
      <div className={classes_1.block_title}>?????????</div>
      <RadioGroup
        row
        aria-label="position"
        name="radios"
        value={state.radios || ""}
        onChange={handleChangeRadio}
      >
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="?????????????????????????????????????????????"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="??????3????????????????????????"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="?????????????????????3????????????????????????"
        />
      </RadioGroup>
      <div hidden={state.radios !== "1"}>
        <div className={classes_1.flex_box}>
          <div className={classes.root2}>
            <TextField
              label="????????????m&#xB3;"
              type="number"
              variant="outlined"
              value={state.volumeM3 || ""}
              onChange={handleChangeVolumeM3}
            />
          </div>
        </div>
      </div>
      <div hidden={state.radios !== "2"}>
        <div className={classes_1.flex_box}>
          <div className={classes.root2}>
            <TextField
              label="?????????L (m)"
              type="number"
              variant="outlined"
              value={state.sizeL || ""}
              onChange={handleChangeSizeL}
            />
            <TextField
              label="?????????W (m)"
              type="number"
              variant="outlined"
              value={state.sizeW || ""}
              onChange={handleChangeSizeW}
            />
            <TextField
              label="?????????H (m)"
              type="number"
              variant="outlined"
              value={state.sizeH || ""}
              onChange={handleChangeSizeH}
            />
          </div>
        </div>
      </div>
      <div hidden={state.radios !== "3"}>
        <div className={classes_1.flex_box}>
          <div className={classes.root2}>
            <TextField
              label="?????????L (m)"
              type="number"
              variant="outlined"
              value={state.sizeL || ""}
              onChange={handleChangeSizeL}
            />
            <TextField
              label="?????????W (m)"
              type="number"
              variant="outlined"
              value={state.sizeW || ""}
              onChange={handleChangeSizeW}
            />
            <TextField
              label="?????????H (m)"
              type="number"
              variant="outlined"
              value={state.sizeH || ""}
              onChange={handleChangeSizeH}
            />
          </div>
        </div>
      </div>
      <div className={classes_1.block_title}>??????</div>
      <div className={classes_1.flex_box}>
        <div className={classes.root2}>
          <TextField
            label="??????Kg"
            type="number"
            variant="outlined"
            value={state.weight || ""}
            onChange={handleChangeWeight}
          />
        </div>
      </div>
      {state.radios === "2" ? (
        <></>
      ) : (
        <>
          <div className={classes_1.block_title}>?????????????????????</div>
          <div className={classes_1.flex_box}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="shipping_company">????????????</InputLabel>
              <Select
                value={state.pallettype || ""}
                onChange={handlePalletTypeList}
                label="pallettype"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {palletTypeList.map((value, index) => (
                  <MenuItem key={index} value={value.id}>
                    {value.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </>
      )}
      <div className={classes_1.block_title}>????????????</div>
      <div className={classes_1.order_title}>
        ?????????????????????????????????????????????????????????
      </div>
      <div className={classes_1.radio_area}>
        <RadioGroup
          row
          aria-label="position"
          onChange={handleChangeCustoms}
          name="custom"
          value={state.customs || ""}
        >
          <FormControlLabel
            value="????????????"
            control={<Radio color="primary" />}
            label="????????????"
          />
          <FormControlLabel
            value="???????????????"
            control={<Radio color="primary" />}
            label="???????????????"
          />
        </RadioGroup>
      </div>
      <div className={classes_1.block_title}>??????</div>
      <div className={classes_1.order_title}>
        ????????????????????????????????????????????????
      </div>
      <div className={classes_1.radio_area}>
        <RadioGroup
          row
          aria-label="position"
          onChange={handleChangeTruck}
          name="truck"
          value={state.truck || ""}
        >
          <FormControlLabel
            value="????????????"
            control={<Radio color="primary" />}
            label="????????????"
          />
          <FormControlLabel
            value="???????????????"
            control={<Radio color="primary" />}
            label="???????????????"
          />
        </RadioGroup>
      </div>

      {state.truck === "????????????" ? (
        <div>
          <div className={classes_1.order_title} style={mt_30}>
            ????????????????????????????????????
          </div>
          <div className={classes_1.radio_area}>
            <RadioGroup
              row
              aria-label="position"
              onChange={handleChangeTruckLoading}
              name="truck"
              value={state.truckloading || ""}
            >
              <FormControlLabel
                value="????????????"
                control={<Radio color="primary" />}
                label="????????????"
              />
              <FormControlLabel
                value="???????????????"
                control={<Radio color="primary" />}
                label="???????????????"
              />
            </RadioGroup>
          </div>
          <div className={classes_1.form_area}>
            <div className={classes_1.form_input_area}>
              <div className={classes_1.flex_box}>
                <div className={classes.root}>
                  <TextField
                    label="????????????"
                    type="text"
                    variant="outlined"
                    value={state.workplace || ""}
                    onChange={handleWorkPalce}
                  />

                  <TextField
                    label="??????????????????"
                    type="text"
                    variant="outlined"
                    defaultValue={state.workplace_address}
                    onChange={handleWorkPalceAddress}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={classes_1.form_area}>
            <div className={classes_1.container}>
              <div className={classes.root3}>
                <TextField
                  label="??????????????????"
                  type="datetime-local"
                  defaultValue=""
                  className={classes.textField}
                  value={state.pickup_datetime || ""}
                  onChange={handlePickupDateTime}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField
                  label="????????????????????????"
                  type="datetime-local"
                  className={classes.textField}
                  value={state.delivery_datetime || ""}
                  onChange={handleDeliveryDateTime}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={classes_1.block_title}>??????</div>
      <div className={classes_1.flex_box}>
        <div className={classes.root4}>
          <TextField
            label="Booking?????????????????????????????????????????????????????????????????????????????????"
            placeholder="?????????????????????????????????????????????????????????????????????????????????????????????"
            type="text"
            multiline={true}
            rows={5}
            variant="outlined"
            defaultValue={state.remarks}
            onChange={handleReMarks}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterDetailListBoxPallet;

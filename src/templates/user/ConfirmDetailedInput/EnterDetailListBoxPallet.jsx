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
    if (e.target.value === "依頼しない") {
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
      <div className={classes_1.block_title}>数量</div>
      <div className={classes_1.flex_box}>
        <div className={classes.root2}>
          <TextField
            label="数量"
            type="number"
            variant="outlined"
            defaultValue={state.quantity}
            onChange={handleChangeQuontity}
          />
        </div>
      </div>
      <div className={classes_1.block_title}>サイズ</div>
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
          label="箱またはパレットの体積から入力"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="箱の3辺の長さから入力"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="パレットを含む3辺の長さから入力"
        />
      </RadioGroup>
      <div hidden={state.radios !== "1"}>
        <div className={classes_1.flex_box}>
          <div className={classes.root2}>
            <TextField
              label="積載容量m&#xB3;"
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
              label="サイズL (m)"
              type="number"
              variant="outlined"
              value={state.sizeL || ""}
              onChange={handleChangeSizeL}
            />
            <TextField
              label="サイズW (m)"
              type="number"
              variant="outlined"
              value={state.sizeW || ""}
              onChange={handleChangeSizeW}
            />
            <TextField
              label="サイズH (m)"
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
              label="サイズL (m)"
              type="number"
              variant="outlined"
              value={state.sizeL || ""}
              onChange={handleChangeSizeL}
            />
            <TextField
              label="サイズW (m)"
              type="number"
              variant="outlined"
              value={state.sizeW || ""}
              onChange={handleChangeSizeW}
            />
            <TextField
              label="サイズH (m)"
              type="number"
              variant="outlined"
              value={state.sizeH || ""}
              onChange={handleChangeSizeH}
            />
          </div>
        </div>
      </div>
      <div className={classes_1.block_title}>重量</div>
      <div className={classes_1.flex_box}>
        <div className={classes.root2}>
          <TextField
            label="重量Kg"
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
          <div className={classes_1.block_title}>パレットタイプ</div>
          <div className={classes_1.flex_box}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="shipping_company">パレット</InputLabel>
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
      <div className={classes_1.block_title}>通関書類</div>
      <div className={classes_1.order_title}>
        ・輸出または輸入の通関依頼をしますか？
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
            value="依頼する"
            control={<Radio color="primary" />}
            label="依頼する"
          />
          <FormControlLabel
            value="依頼しない"
            control={<Radio color="primary" />}
            label="依頼しない"
          />
        </RadioGroup>
      </div>
      <div className={classes_1.block_title}>配送</div>
      <div className={classes_1.order_title}>
        ・トラックの配送を依頼しますか？
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
            value="依頼する"
            control={<Radio color="primary" />}
            label="依頼する"
          />
          <FormControlLabel
            value="依頼しない"
            control={<Radio color="primary" />}
            label="依頼しない"
          />
        </RadioGroup>
      </div>

      {state.truck === "依頼する" ? (
        <div>
          <div className={classes_1.order_title} style={mt_30}>
            ・積載の依頼をしますか？
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
                value="依頼する"
                control={<Radio color="primary" />}
                label="依頼する"
              />
              <FormControlLabel
                value="依頼しない"
                control={<Radio color="primary" />}
                label="依頼しない"
              />
            </RadioGroup>
          </div>
          <div className={classes_1.form_area}>
            <div className={classes_1.form_input_area}>
              <div className={classes_1.flex_box}>
                <div className={classes.root}>
                  <TextField
                    label="作業場所"
                    type="text"
                    variant="outlined"
                    value={state.workplace || ""}
                    onChange={handleWorkPalce}
                  />

                  <TextField
                    label="作業場所住所"
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
                  label="配送希望日時"
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
                  label="引き取り希望日時"
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
      <div className={classes_1.block_title}>備考</div>
      <div className={classes_1.flex_box}>
        <div className={classes.root4}>
          <TextField
            label="Bookingに関してご要望がある場合はこちらに記載をお願いします。"
            placeholder="例）出港は横浜港ですが、コンテナのピックは東京でお願いします。"
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

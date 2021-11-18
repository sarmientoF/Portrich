import React, { useEffect } from "react";
import classes_1 from "../../../dist/css/enter_detail.module.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
    width: 200,
  },
}));

const EnterDetailListContainer = (props) => {
  const { state, setState } = props;
  const mt_30 = { marginTop: "30px" };
  const classes = useStyles();

  const handleChangeQuontity = (e) => {
    setState({ ...state, quantity: e.target.value });
  };
  const handleChangeCustoms = (e) => {
    setState({ ...state, customs: e.target.value });
  };
  const handleChangeDrayage = (e) => {
    setState({ ...state, drayage: e.target.value });
    if (e.target.value === "依頼しない") {
      setState({
        ...state,
        drayage: e.target.value,
        daikan: undefined,
        axes: undefined,
        workplace: undefined,
        workplace_address: undefined,
        pickup_datetime: undefined,
        delivery_datetime: undefined,
      });
    }
  };

  const handleChangeDrayageDaikan = (e) => {
    setState({ ...state, daikan: e.target.value });
  };
  const handleChangeDrayageAxes = (e) => {
    setState({ ...state, axes: e.target.value });
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
      <div className={classes_1.block_title}>コンテナ本数</div>
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
      <div className={classes_1.block_title}>通関書類</div>
      <div className={classes_1.block_body}>
        <div className={classes_1.order_title}>
          ・輸出または輸入の通関依頼をしますか？
        </div>
        <div className={classes_1.radio_area}>
          <RadioGroup
            row
            aria-label="position"
            onChange={handleChangeCustoms}
            name="customs"
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
      </div>

      <div className={classes_1.block_title}>配送</div>

      <div className={classes_1.order_title}>
        ・ドレージの配送を依頼をしますか？
      </div>
      <div className={classes_1.radio_area}>
        <RadioGroup
          row
          aria-label="position"
          onChange={handleChangeDrayage}
          name="drayage"
          value={state.drayage || ""}
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
      {state.drayage === "依頼する" ? (
        <div>
          <div className={classes_1.order_title} style={mt_30}>
            ・台貫の依頼をしますか？
          </div>
          <div className={classes_1.radio_area}>
            <RadioGroup
              row
              aria-label="position"
              onChange={handleChangeDrayageDaikan}
              name="daikan"
              value={state.daikan || ""}
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
          <div className={classes_1.order_title} style={mt_30}>
            ・軸数
          </div>
          <div className={classes_1.radio_area}>
            <RadioGroup
              row
              aria-label="position"
              onChange={handleChangeDrayageAxes}
              name="jikusuu"
              value={state.axes || ""}
            >
              <FormControlLabel
                value="2軸"
                control={<Radio color="primary" />}
                label="2軸"
              />
              <FormControlLabel
                value="3軸"
                control={<Radio color="primary" />}
                label="3軸"
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
export default EnterDetailListContainer;

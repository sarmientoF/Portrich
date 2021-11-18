import React, { useState } from "react";
import classes_1 from "../../dist/css/enter_detail.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { TruckRadio, TruckLoadingRadio } from "./index";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
  root2: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(3),
    width: 200,
  },
}));

const EnterDetailFormTruck = () => {
  const mt_30 = { marginTop: "30px" };

  const classes = useStyles();

  const [radiotruck, setTruckRadios] = useState();

  const handleChange = (val) => setTruckRadios(val);

  return (
    <div className={classes_1.block_body}>
      <div className={classes_1.order_title}>
        ・トラック配送の依頼をしますか？
      </div>
      <div className={classes_1.radio_area}>
        <TruckRadio onChange={handleChange} />
      </div>
      <div hidden={radiotruck !== 1}>
        <div className={classes_1.order_title} style={mt_30}>
          ・トラック会社に積載又は荷下しを依頼しますか？
        </div>

        <div className={classes_1.radio_area}>
          <TruckLoadingRadio />
        </div>
        <div className={classes_1.form_area}>
          <div className={classes_1.form_input_area}>
            <div className={classes_1.flex_box}>
              <div className={classes.root}>
                <TextField
                  required
                  id="outlined-required"
                  label="作業場所"
                  type="text"
                  variant="outlined"
                />

                <TextField
                  required
                  id="outlined-required"
                  label="作業場所住所"
                  type="text"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes_1.form_area}>
          <div className={classes_1.container}>
            <div className={classes.root2}>
              <TextField
                id=""
                label="配送希望日時"
                type="datetime-local"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <TextField
                id=""
                label="引き取り望日時"
                type="datetime-local"
                defaultValue=""
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </div>
          </div>
        </div>
      </div>
      <div hidden={radiotruck !== 2}></div>
    </div>
  );
};

export default EnterDetailFormTruck;

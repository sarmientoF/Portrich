import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const EnterDetailRadios = ({ onChange }) => {
  return (
    <RadioGroup row aria-label="position" name="position" defaultValue="1">
      <FormControlLabel
        value="1"
        control={<Radio color="primary" />}
        label="箱またはパレットの体積から入力"
        onClick={() => onChange(1)}
      />
      <FormControlLabel
        value="2"
        control={<Radio color="primary" />}
        label="箱の3辺の長さから入力"
        onClick={() => onChange(2)}
      />
      <FormControlLabel
        value="3"
        control={<Radio color="primary" />}
        label="パレットの3辺の長さから入力"
        onClick={() => onChange(3)}
      />
    </RadioGroup>
  );
};
export default EnterDetailRadios;

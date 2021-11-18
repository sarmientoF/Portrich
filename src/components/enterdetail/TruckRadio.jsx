import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const TruckRadio = ({onChange}) => {

  const [radiotruck, setRadioTruck] = useState();

  const handleChangeTruck = e => setRadioTruck(e.target.value);

  return (
    <RadioGroup row aria-label="position" name="truck" defaultValue="truck">
      {/* トラック配送の依頼をしますか？ */}
      <FormControlLabel
        value="truck"
        control={<Radio color="primary" />}
        label="依頼する"
        onChange={handleChangeTruck}
        onClick={() => onChange(1)}
      />
      <FormControlLabel
        value="nottruck"
        control={<Radio color="primary" />}
        label="依頼しない"
        onChange={handleChangeTruck}
        onClick={() => onChange(2)}
      />
    </RadioGroup>
  );
};
export default TruckRadio;

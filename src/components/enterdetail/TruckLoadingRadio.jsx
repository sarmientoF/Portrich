import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const TruckLoadingRadio = () => {

  const [radiotruckloading, setRadioTruckLoading] = useState();

  const handleChangeTruckLoading = e => setRadioTruckLoading(e.target.value);

  return (
    <RadioGroup row aria-label="position" name="sekisai" defaultValue="loading">
      {/* トラック会社に積載又は荷下しを依頼しますか？ */}
      <FormControlLabel
        value="loading"
        control={<Radio color="primary" />}
        label="依頼する"
        onChange={handleChangeTruckLoading}
      />
      <FormControlLabel
        value="notloading"
        control={<Radio color="primary" />}
        label="依頼しない"
        onChange={handleChangeTruckLoading}
      />
    </RadioGroup>
  );
};
export default TruckLoadingRadio;

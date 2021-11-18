import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const DrayageRadio = ({onChange}) => {

  const [radiodrayage, setRadioDrayage] = useState();

  const handleChangeDrayage = e => setRadioDrayage(e.target.value);

  return (
    <RadioGroup row aria-label="position" name="dorage" defaultValue="drayage">
      {/* ドレージ配送の依頼をしますか？ */}
      <FormControlLabel
        value="drayage"
        control={<Radio color="primary" />}
        label="依頼する"
        onChange={handleChangeDrayage}
        onClick={() => onChange(1)}
      />
      <FormControlLabel
        value="notdrayage"
        control={<Radio color="primary" />}
        label="依頼しない"
        onChange={handleChangeDrayage}
        onClick={() => onChange(2)}
      />
    </RadioGroup>
  );
};
export default DrayageRadio;

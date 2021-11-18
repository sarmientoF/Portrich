import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const DrayageDaikanRadio = () => {

  const [radiodrayagedaikan, setRadioDrayageDaikan] = useState();

  const handleChangeDrayageDaikan = e => setRadioDrayageDaikan(e.target.value);

  return (
    <RadioGroup row aria-label="position" name="jikusuu" defaultValue="依頼する">
      {/* 台貫 */}
      <FormControlLabel
        value="依頼する"
        control={<Radio color="primary" />}
        label="依頼する"
        onChange={handleChangeDrayageDaikan}
      />
      <FormControlLabel
        value="依頼しない"
        control={<Radio color="primary" />}
        label="依頼しない"
        onChange={handleChangeDrayageDaikan}
      />
    </RadioGroup>
  );
};
export default DrayageDaikanRadio;

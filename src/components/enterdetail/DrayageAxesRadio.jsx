import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const DrayageAxesRadio = () => {

  const [radiodrayageaxes, setRadioDrayageAxes] = useState();

  const handleChangeDrayageAxes = e => setRadioDrayageAxes(e.target.value);

  return (
    <RadioGroup row aria-label="position" name="jikusuu" defaultValue="2軸">
      {/* 軸数 */}
      <FormControlLabel
        value="2axes"
        control={<Radio color="primary" />}
        label="2軸"
        onChange={handleChangeDrayageAxes}
      />
      <FormControlLabel
        value="3axes"
        control={<Radio color="primary" />}
        label="3軸"
        onChange={handleChangeDrayageAxes}
      />
    </RadioGroup>
  );
};
export default DrayageAxesRadio;

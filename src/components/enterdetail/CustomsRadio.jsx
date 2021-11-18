import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CustomsRadio = () => {

  const [radiocustoms, setRadioCustoms] = useState();

  const handleChangeCustoms = e => setRadioCustoms(e.target.value);

  return (
    <RadioGroup row aria-label="position" name="custom" defaultValue="customs">
      <FormControlLabel
        value="customs"
        control={<Radio color="primary" />}
        label="依頼する"
        onChange={handleChangeCustoms}
      />
      <FormControlLabel
        value="notcustoms"
        control={<Radio color="primary" />}
        label="依頼しない"
        onChange={handleChangeCustoms}
      />
    </RadioGroup>
  );
};
export default CustomsRadio;

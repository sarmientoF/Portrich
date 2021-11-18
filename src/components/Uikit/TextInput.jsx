import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = (props) => {
  return (
    <TextField
      id={props.id || undefined}
      variant="outlined"
      fullWidth={true}
      label={props.label}
      margin={"normal"}
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      ref={props.ref}
      value={props.value}
      defaultValue={props.defaultValue}
      type={props.type}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
};

export default TextInput;

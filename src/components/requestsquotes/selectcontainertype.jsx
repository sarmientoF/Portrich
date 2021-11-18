import React from "react";
import classes from "../../dist/css/requests_quotes.module.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core/";

const SelectContainerType = (props) => {
  const { state, setState, styles, containerTypeList } = props;

  const SelectedContainerType = (_, value) => {
    setState({ ...state, containertype: value });
  };
  return (
    <>
      <div className={classes.block_title}>
        コンテナの種類を選択してください。
      </div>
      <Autocomplete
        id="container_type"
        size="small"
        className={styles.select}
        options={containerTypeList}
        getOptionLabel={(option) => option.name}
        onChange={SelectedContainerType}
        renderInput={(params) => (
          <TextField {...params} label="コンテナタイプ" variant="outlined" />
        )}
      />
      <div className={classes.mb_30}></div>
    </>
  );
};
export default SelectContainerType;

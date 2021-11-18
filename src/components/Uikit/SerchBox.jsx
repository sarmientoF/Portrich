import React from "react";
import { TextField, Box, makeStyles } from "@material-ui/core";
import classes from "../../dist/css/serchbox.module.css";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiInputBase-input": {
      paddingLeft: "30px",
    },
    "& .MuiButton-contained": {
      boxShadow: "none",
    },
  },
  searchIcon: {
    color: "#7D7D7D",
  },
}));

const SerchBox = () => {
  const styles = useStyles();

  return (
    <div className={`${classes.head_search_box} ${styles.root}`}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon
          sx={{ color: "action.active", mr: 1, my: 0.5 }}
          className={styles.searchIcon}
        />
        <TextField id="input-with-sx" placeholder="検索" variant="standard" />
      </Box>
    </div>
  );
};

export default SerchBox;

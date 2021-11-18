import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classes_1 from "../../dist/css/dataentrys.module.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  sellPrices: {
    "& .MuiTextField-root": {
      margin: "8px 4px!important",
      width: "12.5ch !important",
    },
  },
}));

const SellPriceInputListComponent = (props) => {
  const { selectedSellPrices, setSelectedSellPrices, inputSellList } = props;
  const classes = useStyles();
  const handleChange = (e) => {
    setSelectedSellPrices((items) => {
      return {
        ...items,
        [e.target.id]: e.target.value,
      };
    });
  };
  return (
    <div className={classes.sellPrices}>
      <div className={classes_1.flex_box}>
        {inputSellList.map((item, index) => (
          <TextField
            id={item.id}
            key={index}
            value={selectedSellPrices[item.id] || ""}
            label={item.label}
            type="number"
            variant="outlined"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {item.currency}
                </InputAdornment>
              ),
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default SellPriceInputListComponent;

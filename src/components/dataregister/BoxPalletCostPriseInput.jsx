import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import classes_1 from "../../dist/css/dataentrys.module.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buyPrices: {
    "& .MuiTextField-root": {
      margin: "8px 4px!important",
      width: "12.5ch !important",
    },
  },
  formControl: {
    margin: "8px 4px!important",
    width: "27ch",
  },
  addIcon: {
    color: "#0052cc",
    margin: "auto 0",
    padding: 0,
    height: 48,
    width: 48,
  },
  removeIcon: {
    color: "#0052cc",
    margin: "auto 0",
    padding: 0,
    height: 48,
    width: 48,
  },
}));

const BoxPalletCostPriceInput = (props) => {
  const {
    index,
    shippingCompanyList,
    initialState,
    selectedCostPricesList,
    setSelectedCostPricesList,
    inputCostList,
  } = props;
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState(
    selectedCostPricesList[index]
  );
  const handleShippingCompany = (e) => {
    setSelectedItem((item) => {
      return {
        ...item,
        shipping_company: e.target.value,
      };
    });
  };
  const handleChange = (e) => {
    setSelectedItem((item) => {
      return {
        ...item,
        [e.target.id]: e.target.value,
      };
    });
  };
  const increaseItems = () => {
    setSelectedCostPricesList((items) => [...items, initialState]);
  };
  const decreaseItems = () => {
    setSelectedCostPricesList((items) =>
      items.filter((_, rowindex) => rowindex !== index)
    );
  };
  useEffect(() => {
    setSelectedItem(selectedCostPricesList[index]);
  }, [selectedCostPricesList, selectedCostPricesList.length]);
  useEffect(() => {
    setSelectedCostPricesList((items) => {
      const newline = [...items];
      newline[index] = selectedItem;
      return newline;
    });
  }, [selectedItem]);
  return (
    <>
      <div className={classes_1.flex_box}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="shipping_company">船会社</InputLabel>
          <Select
            labelId="shipping_company"
            value={selectedItem.shipping_company}
            onChange={handleShippingCompany}
            label="shipping_company_select"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {shippingCompanyList.map((value, index) => (
              <MenuItem key={index} value={value.id}>
                {value.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="freetime"
          label="Free Time"
          type="number"
          variant="outlined"
          value={selectedItem.freetime}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">日</InputAdornment>
            ),
          }}
        />
        <TextField
          id="estimated_deadline_date"
          label="見積期限"
          type="date"
          value={selectedItem.estimated_deadline_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />
      </div>
      <div className={classes.buyPrices}>
        <div className={classes_1.flex_box}>
          {inputCostList.map((item, index) => (
            <TextField
              key={index}
              id={item.id}
              label={item.label}
              type="number"
              value={selectedItem[item.id]}
              onChange={handleChange}
              variant="outlined"
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
      {selectedCostPricesList.length - 1 === index ? (
        <IconButton className={classes.addIcon} onClick={increaseItems}>
          <AddIcon />
        </IconButton>
      ) : (
        <></>
      )}
      {selectedCostPricesList.length <= 1 ? (
        <></>
      ) : (
        <IconButton className={classes.removeIcon} onClick={decreaseItems}>
          <RemoveIcon />
        </IconButton>
      )}
    </>
  );
};
export default BoxPalletCostPriceInput;

import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import classes_1 from "../../dist/css/dataentrys.module.css";
import {
  fetchViewUserCompanies,
  fetchContainerTypeList,
  fetchCargoList,
} from "./masterdata/operations";
import { fetchShipPortList } from "../../common/services/fetchData";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "8px 4px!important",
      width: "27ch",
    },
  },
  formControl: {
    margin: "8px 4px!important",
    width: "27ch",
  },
}));

const ContainerCommonItems = (props) => {
  const classes = useStyles();
  const { selectedCommonItems, setSelectedCommonItems } = props;
  const [shipPortList, setShipPortList] = useState([]);
  const [containerTypeList, setContainerTypeList] = useState([]);
  const [cargoList, setCargoList] = useState([]);
  const [userCompanyList, setUserCompanyList] = useState([]);
  useEffect(() => {
    fetchViewUserCompanies(setUserCompanyList);
    fetchShipPortList(setShipPortList);
    fetchContainerTypeList(setContainerTypeList);
    fetchCargoList(setCargoList);
  }, []);
  const handleUserCompany = (e, value) => {
    setSelectedCommonItems((items) => {
      return {
        ...items,
        users_company: e.target.value,
      };
    });
  };
  const handleDeparturePort = (e, value) => {
    setSelectedCommonItems((items) => {
      return {
        ...items,
        departure_port: value,
      };
    });
  };
  const handleArrivalPort = (e, value) => {
    setSelectedCommonItems((items) => {
      return {
        ...items,
        arrival_port: value,
      };
    });
  };
  const handleContainerType = (e) => {
    setSelectedCommonItems((items) => {
      return {
        ...items,
        container_type: e.target.value,
      };
    });
  };
  const handleCargo = (e, value) => {
    setSelectedCommonItems((items) => {
      return {
        ...items,
        cargo_name: value,
      };
    });
  };

  return (
    <div className={classes_1.flex_box}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="users_company_id">顧客名</InputLabel>
        <Select
          labelId="users_company_id"
          value={selectedCommonItems.users_company}
          onChange={handleUserCompany}
          label="users_company"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {userCompanyList.map((value, index) => (
            <MenuItem key={index} value={value.id}>
              {value.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        options={shipPortList}
        getOptionLabel={(option) => option.value}
        value={selectedCommonItems.departure_port}
        onChange={handleDeparturePort}
        renderInput={(params) => (
          <TextField {...params} label="港名(From)" variant="outlined" />
        )}
      />
      <Autocomplete
        options={shipPortList}
        getOptionLabel={(option) => option.value}
        value={selectedCommonItems.arrival_port}
        onChange={handleArrivalPort}
        renderInput={(params) => (
          <TextField {...params} label="港名(To)" variant="outlined" />
        )}
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="container_type_id">コンテナの種類</InputLabel>
        <Select
          labelId="container_type_id"
          value={selectedCommonItems.container_type}
          onChange={handleContainerType}
          label="container_type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {containerTypeList.map((value, index) => (
            <MenuItem key={index} value={value.id}>
              {value.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Autocomplete
        options={cargoList}
        getOptionLabel={(option) => option.value}
        value={selectedCommonItems.cargo_name}
        onChange={handleCargo}
        renderInput={(params) => (
          <TextField {...params} label="貨物名" variant="outlined" />
        )}
      />
    </div>
  );
};
export default ContainerCommonItems;

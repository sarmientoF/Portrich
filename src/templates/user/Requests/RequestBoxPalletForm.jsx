import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import classes_1 from "../../../dist/css/request.module.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  root2: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(5),
      marginRight: theme.spacing(1.5),
      width: "30ch",
    },
  },
  cargoarea: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(5),
      marginRight: theme.spacing(1.5),
      width: "62ch",
    },
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

const RequestBoxPalletForm = (props) => {
  const classes = useStyles();
  const selectedPortList = props.selectedPortList || [];
  return (
    <div className={classes.root}>
      <div className={classes_1.block_title_small}>ルート</div>
      <SelectPortComponent
        index={0}
        portList={props.portList}
        selectedPortList={selectedPortList}
        setSelectedPortList={props.setSelectedPortList}
      />
      {selectedPortList
        .filter((_, index) => index !== 0)
        .map((value, index) => (
          <SelectPortComponent
            key={index}
            index={index + 1}
            portList={props.portList}
            selectedPortList={selectedPortList}
            setSelectedPortList={props.setSelectedPortList}
          />
        ))}
      <div className={classes_1.mb_30}></div>
      <div className={classes_1.block_title_small}>貨物</div>
      <SelectCargoComponent
        cargoNameList={props.cargoNameList}
        selectedCargo={props.selectedCargo}
        setSelectedCargo={props.setSelectedCargo}
      />
    </div>
  );
};

const SelectCargoComponent = (props) => {
  const classes = useStyles();
  const updateSelectedCargo = (e, value) => {
    props.setSelectedCargo(value);
  };
  return (
    <Autocomplete
      id="cargo_name"
      className={classes.cargoarea}
      options={props.cargoNameList}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      onChange={updateSelectedCargo}
      renderInput={(params) => (
        <TextField {...params} label="貨物名" variant="outlined" />
      )}
    />
  );
};

const SelectPortComponent = (props) => {
  const classes = useStyles();
  const index = props.index;
  const increaseSelectedPort = () => {
    props.setSelectedPortList([
      ...props.selectedPortList,
      {
        departure_port: null,
        arrival_port: null,
      },
    ]);
  };
  const decreaseSelectedPort = (removeindex) => {
    const newlist = props.selectedPortList.filter(
      (_, index) => index !== removeindex
    );
    props.setSelectedPortList(newlist);
  };
  const [japanPort, setJapanPort] = useState([]);
  const [worldPort, setWorldPort] = useState([]);
  useEffect(() => {
    setJapanPort(props.portList.filter((item) => item.title.includes("Japan")));
    setWorldPort(
      props.portList.filter((item) => !item.title.includes("Japan"))
    );
  }, [props.portList]);
  return (
    <div className={classes_1.flex_box}>
      <JapanPortComponent
        setSelectedPortList={props.setSelectedPortList}
        selectedPortList={props.selectedPortList}
        id={`departure_port_${index}`}
        japanPort={japanPort}
        index={index}
        name={"departure_port"}
        label={"港名(From)"}
      />
      <WorldPortComponent
        setSelectedPortList={props.setSelectedPortList}
        selectedPortList={props.selectedPortList}
        id={`arrival_port_${index}`}
        worldPort={worldPort}
        index={index}
        name={"arrival_port"}
        label={"港名(To)"}
      />
      {props.selectedPortList.length - 1 === index ? (
        <IconButton className={classes.addIcon} onClick={increaseSelectedPort}>
          <AddIcon />
        </IconButton>
      ) : (
        <></>
      )}
      {props.selectedPortList.length > 1 ? (
        <IconButton
          className={classes.removeIcon}
          onClick={(e) => decreaseSelectedPort(index)}
        >
          <RemoveIcon />
        </IconButton>
      ) : (
        <></>
      )}
    </div>
  );
};

const JapanPortComponent = (props) => {
  const id = props.id || "";
  const japanPortList = props.japanPort || [];
  const index = props.index;
  const name = props.name;
  const label = props.label;
  const selectedPortList = props.selectedPortList;
  const setSelectedPortList = props.setSelectedPortList;
  const [currentItem, setCurrentItem] = useState(selectedPortList[index][name]);
  const updateSelectedPortList = (e, value) => {
    setCurrentItem(value);
  };
  useEffect(() => {
    setCurrentItem(selectedPortList[index][name]);
  }, [selectedPortList]);
  useEffect(() => {
    setSelectedPortList((list) => {
      if (list[index]) {
        list[index][name] = currentItem;
        return list;
      }
      list.push({ [name]: currentItem });
      return list;
    });
  }, [currentItem]);

  return (
    <Autocomplete
      id={id}
      options={japanPortList}
      getOptionLabel={(option) => option.title}
      onChange={updateSelectedPortList}
      value={currentItem}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};
const WorldPortComponent = (props) => {
  const id = props.id || "";
  const worldPortList = props.worldPort || [];
  const index = props.index;
  const name = props.name;
  const label = props.label;
  const selectedPortList = props.selectedPortList;
  const setSelectedPortList = props.setSelectedPortList;
  const [currentItem, setCurrentItem] = useState(selectedPortList[index][name]);
  const updateSelectedPortList = (e, value) => {
    setCurrentItem(value);
  };
  useEffect(() => {
    setCurrentItem(selectedPortList[index][name]);
  }, [selectedPortList]);
  useEffect(() => {
    setSelectedPortList((list) => {
      if (list[index]) {
        list[index][name] = currentItem;
        return list;
      }
      list.push({ [name]: currentItem });
      return list;
    });
  }, [currentItem]);

  return (
    <Autocomplete
      id={id}
      options={worldPortList}
      getOptionLabel={(option) => option.title}
      onChange={updateSelectedPortList}
      value={currentItem}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

export default RequestBoxPalletForm;

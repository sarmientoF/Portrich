import React, { useState, useEffect } from "react";
import classes from "../../../dist/css/requests_quotes.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  IconButton,
} from "@material-ui/core/";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { ReactComponent as Arrow1 } from "../../../dist/images/arrow1.svg";
import { ReactComponent as Arrow2 } from "../../../dist/images/arrow2.svg";

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

const RequestForm = (props) => {
  const styles = useStyles();
  const selectedPortList = props.selectedPortList || [];
  const handleChange = (e, checked) => {
    props.setSelectedContainerTypeList({
      ...props.selectedContainerTypeList,
      [e.target.name]: checked,
    });
  };

  return (
    <div className={styles.root}>
      <div className={classes.block_title}>ルートを選択してください。</div>
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
      <div className={classes.mb_30}></div>
      <div className={classes.block_title}>輸送形態を選択して下さい。</div>
      <RadioGroup row aria-label="position" name="shipping_type">
        <FormControlLabel
          className={classes.radio_item}
          value="FCL"
          control={<Radio color="primary" />}
          label="コンテナ（FCL）"
        />
        <FormControlLabel
          className={classes.radio_item}
          value="LCL"
          control={<Radio color="primary" />}
          label="箱/パレット（LCL）"
        />
      </RadioGroup>
      <div className={classes.mb_30}></div>
      <div className={classes.block_title}>
        コンテナタイプを選択してください。
      </div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          {props.containerTypeList.map((value, index) => (
            <FormControlLabel
              className={classes.checkbox_item}
              key={index}
              control={
                <Checkbox
                  color="primary"
                  name={Number(value.id).toString()}
                  onChange={handleChange}
                />
              }
              label={value.title}
              labelPlacement="end"
            />
          ))}
        </FormGroup>
      </FormControl>
      <div className={classes.mb_30}></div>
      <div className={classes.block_title}>貨物の種類を選択してください。</div>
      <SelectCargoComponent
        cargoNameList={props.cargoNameList}
        selectedCargo={props.selectedCargo}
        setSelectedCargo={props.setSelectedCargo}
      />
    </div>
  );
};

const SelectCargoComponent = (props) => {
  const styles = useStyles();
  const updateSelectedCargo = (e, value) => {
    props.setSelectedCargo(value);
  };
  return (
    <Autocomplete
      id="cargo_name"
      className={styles.cargoarea}
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
  const styles = useStyles();
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
    <div className={classes.flex_wrap}>
      <JapanPortComponent
        setSelectedPortList={props.setSelectedPortList}
        selectedPortList={props.selectedPortList}
        id={`departure_port_${index}`}
        japanPort={japanPort}
        index={index}
        name={"departure_port"}
        label={"出発港"}
      />
      <div className={classes.arrow_area}>
        <Arrow1 className={classes.arrow1} />
        <Arrow2 className={classes.arrow2} />
      </div>
      <WorldPortComponent
        setSelectedPortList={props.setSelectedPortList}
        selectedPortList={props.selectedPortList}
        id={`arrival_port_${index}`}
        worldPort={worldPort}
        index={index}
        name={"arrival_port"}
        label={"到着港"}
      />
      {props.selectedPortList.length - 1 === index ? (
        <IconButton className={styles.addIcon} onClick={increaseSelectedPort}>
          <AddIcon />
        </IconButton>
      ) : (
        <></>
      )}
      {props.selectedPortList.length > 1 ? (
        <IconButton
          className={styles.removeIcon}
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
export default RequestForm;

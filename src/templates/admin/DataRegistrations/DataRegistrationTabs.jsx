import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  DataRegistrationBoxPalletExport,
  DataRegistrationBoxPalletImport,
  DataRegistrationContainerExport,
  DataRegistrationContainerImport,
  DataRegistrationContainerSchedule,
  DataRegistrationBoxPalletSchedule,
  DataRegistrationHead,
} from "../../index";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "0px",
    backgroundColor: "f7f7f7",
    fontSize: 20,
    "& .MuiBox-root": {
      padding: 0,
      fontSize: 20,
      width: "100%",
    },
    "& .MuiTab-wrapper ": {
      fontSize: 12,
    },
  },
}));
const DataRegistrationTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="　●　輸出（コンテナ・FCL）" {...a11yProps(0)} />
          <Tab label="　●　輸入（コンテナ・FCL）" {...a11yProps(1)} />
          <Tab label="　●　スケジュール（コンテナ・FCL）" {...a11yProps(2)} />
          <Tab label="　●　輸出（箱/パレット・LCL）" {...a11yProps(3)} />
          <Tab label="　●　輸入（箱/パレット・LCL）" {...a11yProps(4)} />
          <Tab
            label="　●　スケジュール（箱/パレット・LCL）"
            {...a11yProps(5)}
          />
          {/* <Tab label="輸入（飛行機）" {...a11yProps(5)} /> */}
          {/* <Tab label="輸出（飛行機）" {...a11yProps(6)} /> */}
          {/* <Tab label="スケジュール/CY・OP登録(飛行機)" {...a11yProps(7)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DataRegistrationHead />
        <DataRegistrationContainerExport />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataRegistrationHead />
        <DataRegistrationContainerImport />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataRegistrationHead />
        <DataRegistrationContainerSchedule />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DataRegistrationHead />
        <DataRegistrationBoxPalletExport />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DataRegistrationHead />
        <DataRegistrationBoxPalletImport />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <DataRegistrationHead />
        <DataRegistrationBoxPalletSchedule />
      </TabPanel>
      {/* <TabPanel value={value} index={5}>
        <DataRegistrationHead />
        <DataRegistrationAirImport />
      </TabPanel> */}
      {/* <TabPanel value={value} index={6}>
        <DataRegistrationHead />
        <DataRegistrationAirExport />
      </TabPanel> */}
      {/* <TabPanel value={value} index={7}>
        <DataRegistrationHead />
        <DataRegistrationAirSchedule />
      </TabPanel> */}
    </div>
  );
};

export default DataRegistrationTabs;

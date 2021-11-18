import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  QuoteContainerHead,
  QuoteContainer,
  QuoteBoxPallet,
  QuoteBoxPalletHead,
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
          <Typography>{children}</Typography>
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
      fontSize: 16,
    },
  },
}));
const QuotesTabs = () => {
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
          <Tab label="コンテナ（FCL）" {...a11yProps(0)} />
          <Tab label="箱/パレット（LCL）" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <QuoteContainerHead />
        <QuoteContainer />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuoteBoxPalletHead />
        <QuoteBoxPallet />
      </TabPanel>
    </div>
  );
};

export default QuotesTabs;

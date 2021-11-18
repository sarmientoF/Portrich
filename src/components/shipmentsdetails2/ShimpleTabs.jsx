import React, { useState } from "react";
import classes from "../../dist/css/shipments_detail2.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& .MuiAppBar-colorPrimary": {
      color: "#333",
      backgroundColor: "#fff",
      fontSize: "14px",
      fontWeight: "normal",
    },
    "& .MuiTab-root": {
      minWidth: "100px !important",
      margin: "0 10px",
    },
  },
}));

const ShimpleTabs = (props) => {
  const { tabTitle, children } = props;
  const styles = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.root}>
      <div position="static" className={classes.tab_area}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#333",
              height: "2px",
            },
          }}
        >
          {tabTitle.map((value, index) => (
            <Tab label={value} {...a11yProps(index)} />
          ))}
        </Tabs>
      </div>
      {children.map((child, index) => (
        <TabPanel value={value} index={index}>
          {child}
        </TabPanel>
      ))}
    </div>
  );
};

export default ShimpleTabs;

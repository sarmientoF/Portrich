import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  ShipmentsDetailsChats,
  ShipmentsDetailsDocument,
  ShipmentsDetailsPhoto,
  ShipmentsDetailsQuote,
  ShipmentsManagement,
  ShipmentsManagementInvoice,
  ShipmentsManagementBilling,
} from "../../index";
import {
  fetchFiles,
  billofladingsFetchFiles,
  permitcertificatesFetchFiles,
  paymentinvoicesFetchFiles,
} from "./files/operations";
import { fetchImages } from "./images/operations";
import { getIsStaff } from "../../../reducks/users/selectors";

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
      fontSize: 16,
      width: "100%",
    },
    "& .MuiPaper-elevation4": {
      boxShadow: "none",
    },
    "& .MuiTab-wrapper ": {
      fontSize: 16,
    },
    "& .MuiTab-root": {
      minWidth: 120,
    },
    "& .MuiTabs-scroller": {
      borderTop: "1px solid #dadbdb",
      borderLeft: "1px solid #dadbdb",
      borderRight: "1px solid #dadbdb",
      background: "#ececec",
    },
  },
}));
const ShipmentsDetailsTabs = (props) => {
  const { queryParameters, textStates, setTextStates, cargoStatus } = props;
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [fileList, setFileList] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [billofladings, setBillOfLadings] = useState({});
  const [permitcertificates, sePermitCertificates] = useState({});
  const [paymentinvoices, setPaymentInvoices] = useState({});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const cargo_status = queryParameters.cargo_status_id;
    const bill_of_lading_id = cargoStatus.bill_of_lading_id;
    const permit_certificate_id = cargoStatus.permit_certificate_id;
    const payment_invoice_id = cargoStatus.payment_invoice_id;
    if (cargo_status) {
      fetchFiles(cargo_status, setFileList);
      fetchImages(cargo_status, setImageList);
    }
    if (bill_of_lading_id) {
      billofladingsFetchFiles(bill_of_lading_id, setBillOfLadings);
    }
    if (permit_certificate_id) {
      permitcertificatesFetchFiles(permit_certificate_id, sePermitCertificates);
    }
    if (payment_invoice_id) {
      paymentinvoicesFetchFiles(payment_invoice_id, setPaymentInvoices);
    }
  }, [queryParameters]);

  const selector = useSelector((state) => state);
  const isStaff = getIsStaff(selector);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        {isStaff ? (
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="チャット" {...a11yProps(0)} />
            <Tab label="書類" {...a11yProps(1)} />
            <Tab label="見積" {...a11yProps(2)} />
            <Tab label="写真" {...a11yProps(3)} />
            <Tab label="管理画面" {...a11yProps(4)} />
            <Tab label="Invoice" {...a11yProps(5)} />
            <Tab label="請求書" {...a11yProps(6)} />
          </Tabs>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="チャット" {...a11yProps(0)} />
            <Tab label="書類" {...a11yProps(1)} />
            <Tab label="見積" {...a11yProps(2)} />
            <Tab label="写真" {...a11yProps(3)} />
          </Tabs>
        )}
      </AppBar>
      <TabPanel value={value} index={0}>
        <ShipmentsDetailsChats queryParameters={queryParameters} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShipmentsDetailsDocument
          queryParameters={queryParameters}
          fileList={fileList}
          setFileList={setFileList}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ShipmentsDetailsQuote
          cargoStatus={cargoStatus}
          queryParameters={queryParameters}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ShipmentsDetailsPhoto
          queryParameters={queryParameters}
          imageList={imageList}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ShipmentsManagement
          cargoStatus={cargoStatus}
          textStates={textStates}
          setTextStates={setTextStates}
          queryParameters={queryParameters}
        />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ShipmentsManagementInvoice
          cargoStatus={cargoStatus}
          textStates={textStates}
          setTextStates={setTextStates}
        />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ShipmentsManagementBilling
          cargoStatus={cargoStatus}
          textStates={textStates}
          setTextStates={setTextStates}
          queryParameters={queryParameters}
          billofladings={billofladings}
          setBillOfLadings={setBillOfLadings}
          permitcertificates={permitcertificates}
          sePermitCertificates={sePermitCertificates}
          paymentinvoices={paymentinvoices}
          setPaymentInvoices={setPaymentInvoices}
        />
      </TabPanel>
    </div>
  );
};

export default ShipmentsDetailsTabs;

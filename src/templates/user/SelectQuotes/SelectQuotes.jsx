import React from "react";
import classes from "../../../dist/css/selectquotes.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core/";
import { ReactComponent as Transportation } from "../../../dist/images/transportation.svg";
import { ReactComponent as UnderRight } from "../../../dist/images/→.svg";
import { ReactComponent as SelectQuotesCard } from "../../../dist/images/card.svg";
import { makeStyles } from "@material-ui/core/styles";
import { SelectQuotesContent } from "./items/operations";
import {
  SelectQuotesListItem,
  SelectQuotesDialog,
} from "../../../components/selectquotes/index";

const useStyles = makeStyles((theme) => ({
  table: {
    boxShadow: "none !important",
  },
  tablehead: {
    "& .MuiTableCell-root": {
      fontSize: 14,
    },
  },
  tablebody: {
    "& .MuiTableCell-root": {
      border: "none",
      fontSize: 14,
    },
    "& .MuiTableRow-root": {
      "&:hover": {
        backgroundColor: "#f8f9fa",
      },
    },
  },
  innertablebody: {
    "& .MuiTableCell-root": {
      border: "none",
      fontSize: 14,
      padding: "16px 0",
    },
  },
  span: {
    color: "#0753cc",
    paddingLeft: 10,
  },
  icon: {
    color: "#0753cc",
  },
  actionbutton: {
    background: "#0753CC",
    color: "#fff",
    textAlign: "center",
    fontSize: "12px",
    display: "block",
    width: "100%",
    borderRadius: "4px",
    boxShadow: "none",
    marginLeft: "auto",
    "&:hover": {
      opacity: "0.8",
    },
  },
  schedulebutton: {
    background: "#0753CC",
    color: "#fff",
    textAlign: "center",
    fontSize: "12px",
    display: "block",
    width: "70%",
    borderRadius: "4px",
    boxShadow: "none",
    marginLeft: "auto",
    "&:hover": {
      opacity: "0.8",
      background: "#0753CC",
      boxShadow: "none",
    },
  },
  btn: {
    color: "#fff",
    width: "100%",
    padding: "5px 15px",
    fontSize: 12,
    background: "#0052cc",
    textTransform: "capitalize",
    boxShadow: "none",
    "&:hover": {
      opacity: "0.8",
      background: "#0052cc",
      boxShadow: "none",
    },
  },
  buttonroot: {
    marginLeft: "auto",
    marginRight: 40,
  },
  dialog_btn: {
    textTransform: "capitalize",
    fontSize: 12,
  },
}));

const SelectQuotes = () => {
  const styles = useStyles();
  return (
    <section className={classes.main}>
      <div className={classes.body}>
        <div className={classes.title}>見積を選択する</div>
        <div className={classes.mb_30}></div>
        <div className={classes.head_menu}>
          <div className={classes.head_menu_trade}>
            <div className={classes.head_menu_selectname}>Japan, Tokyo</div>
            <div className={classes.head_menu_arrow}>
              <UnderRight />
            </div>
            <div className={classes.head_menu_selectname}>
              Pakistan, katachi
            </div>
          </div>
          <div className={classes.head_menu_info}>
            <div className={classes.head_menu_info_left}>
              <div className={classes.hed_menu_incotermses}>FOB</div>
              <div className={classes.hed_menu_shippingtype}>
                <Transportation />
                FCL
              </div>
              <div className={classes.hed_menu_card}>
                <SelectQuotesCard />
                Aircraft, spacecraft, Aircraft, spacecraft
              </div>
            </div>

            <div className={classes.head_menu_info_right}>
              <div className={styles.buttonroot}>
                <SelectQuotesDialog styles={styles} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.mb_30}></div>
        <TableContainer component={Paper} className={styles.table}>
          <Table aria-label="collapsible table">
            <TableHead className={styles.tablehead}>
              <TableRow>
                <TableCell>船会社</TableCell>
                <TableCell align="left">フリータイム</TableCell>
                <TableCell align="left">料金</TableCell>
                <TableCell align="left">見積もり期限</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={styles.tablebody}>
              {SelectQuotesContent.map((item) => (
                <SelectQuotesListItem item={item} styles={styles} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default SelectQuotes;

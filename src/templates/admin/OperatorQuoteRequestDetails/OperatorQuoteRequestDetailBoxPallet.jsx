import React, { useEffect, useState } from "react";
import classes_1 from "../../../dist/css/operatorquotes_detail.module.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  fetchViewForQuotesDetailsBoxPallet,
  fetchSalesStaffs,
} from "./items/operations";
import { useLocation } from "react-router-dom";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core/";
import InputAdornment from "@material-ui/core/InputAdornment";
import { OperatorQuoteRequestDetailBoxPalletDialog } from "../../index";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { uploadSiForBoxPallet } from "./files/operations";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#878B8D",
    color: theme.palette.common.white,
    fontSize: 16,
    padding: theme.spacing(1),
  },
  body: {
    fontSize: 16,
    padding: theme.spacing(0.8),
  },
  enableButton: {
    background: "#0052cc",
    color: "#fff",
    width: "24ch",
  },
  disableButton: {
    width: "24ch",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "24ch",
      background: "#fff",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      width: "24ch",
      background: "#fff",
    },
    table: {
      minWidth: 700,
    },
  },
  root2: {
    "& .MuiTextField-root": {
      width: "100%",
      background: "#fff",
    },
  },
  btn: {
    width: "100%",
    padding: "8px 0",
    backgroundColor: "#0052cc",
    color: "#fff",
    fontSize: 15,
    textTransform: "capitalize",
    padding: theme.spacing(1.5),
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #C0C0C0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const OperatorQuoteRequestDetailBoxPallet = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchViewForQuotesDetailsBoxPallet(location.search, setItems);
  }, [location.search]);

  const uploadShippingInstruction = async (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    await uploadSiForBoxPallet(items.id, e.target.files[0], items);
    fetchViewForQuotesDetailsBoxPallet(location.search, setItems);
  };

  const quote = (item) => {
    const params = createQuoteParams(item);
    const url = `/operator/quote/edit/boxpallet?${params}`;
    dispatch(push(url));
  };

  const createQuoteParams = (item) => {
    const params = new URLSearchParams();
    params.append("id", item.quote_id);
    return params.toString();
  };

  const schedule = (item) => {
    const params = createScheduleParams(item);
    const url = `/operator/schedule/edit/boxpallet?${params}`;
    dispatch(push(url));
  };

  const createScheduleParams = (item) => {
    const params = new URLSearchParams();
    params.append("id", item.schedule_id);
    return params.toString();
  };

  function createData(name, value) {
    return { name, value };
  }

  function createPriceData(name, buy, sell) {
    return { name, buy, sell };
  }

  const data = [
    createData("顧客名", items.users_company_name),
    createData("輸送タイプ", "コンテナ・FCL"),
    createData("船会社名", items.shipping_company_name),
    createData("出発地", items.departure_port_name),
    createData("到着地", items.arrival_port_name),
    createData("貨物名", items.cargo_name_name),
    createData(
      "見積期限",
      items.estimated_deadline_date &&
        items.estimated_deadline_date.replaceAll(/-/g, "/")
    ),
    createData(
      "見積状況",
      items.shipping_company_name === null ? "見積登録完了" : "見積登録未完了"
    ),
    createData(
      "スケジュール状況",
      items.schedule_id === null
        ? "スケジュール紐付け有り"
        : "スケジュール紐付け無し"
    ),
  ];

  const pricedata = [
    createPriceData(
      "OceanFreight/RT($)",
      "$" + Number(items.ocean_freight_usd_buy).toLocaleString(),
      "$" + Number(items.ocean_freight_usd_sell).toLocaleString()
    ),
    createPriceData(
      "OceanFreight(¥)",
      "¥" + Number(items.ocean_freight_jpy_buy).toLocaleString(),
      "¥" + Number(items.ocean_freight_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "WRS($)",
      "$" + Number(items.wrs_usd_buy).toLocaleString(),
      "$" + Number(items.wrs_usd_sell).toLocaleString()
    ),
    createPriceData(
      "LSS/RT($)",
      "$" + Number(items.lss_usd_buy).toLocaleString(),
      "$" + Number(items.lss_usd_sell).toLocaleString()
    ),
    createPriceData(
      "LSS/RT(¥)",
      "¥" + Number(items.lss_jpy_buy).toLocaleString(),
      "¥" + Number(items.lss_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "THC/RT(¥)",
      items.thc_jpy_buy === "0"
        ? "Incl"
        : "¥" + Number(items.thc_jpy_buy).toLocaleString(),
      items.thc_jpy_sell === "0"
        ? "Incl"
        : "¥" + Number(items.thc_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "DOC FEE(¥)",
      "¥" + Number(items.doc_fee_jpy_buy).toLocaleString(),
      "¥" + Number(items.doc_fee_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "DO FEE(¥)",
      "¥" + Number(items.do_fee_jpy_buy).toLocaleString(),
      "¥" + Number(items.do_fee_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "CFS CHARGE(¥)",
      "¥" + Number(items.cfs_charge_jpy_buy).toLocaleString(),
      "¥" + Number(items.cfs_charge_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "PSS($)",
      "$" + Number(items.pss_usd_buy).toLocaleString(),
      "$" + Number(items.pss_usd_sell).toLocaleString()
    ),
    createPriceData(
      "DRAYGE RECOVERY CHARGE/RT(¥)",
      "¥" + Number(items.drayge_recovery_charge_jpy_buy).toLocaleString(),
      "¥" + Number(items.drayge_recovery_charge_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "AFS(¥)",
      "$" + Number(items.afs_jpy_buy).toLocaleString(),
      "$" + Number(items.afs_jpy_sell).toLocaleString()
    ),
    createPriceData(
      "GRI($)",
      "$" + Number(items.gri_usd_buy).toLocaleString(),
      "$" + Number(items.gri_usd_sell).toLocaleString()
    ),
    createPriceData(
      "ERR($)",
      "$" + Number(items.err_usd_buy).toLocaleString(),
      "$" + Number(items.err_usd_sell).toLocaleString()
    ),
    createPriceData(
      "CIC($)",
      "$" + Number(items.cic_usd_buy).toLocaleString(),
      "$" + Number(items.cic_usd_sell).toLocaleString()
    ),
    createPriceData(
      "CIC(¥)",
      "$" + Number(items.cic_jpy_buy).toLocaleString(),
      "$" + Number(items.cic_jpy_sell).toLocaleString()
    ),
  ];

  return (
    <div className={classes.root}>
      <div className={classes_1.main}>
        <div className={classes_1.main_head}>
          <div className={classes_1.main_head_title}>Booking詳細</div>
        </div>
        <div className={classes_1.main_body}>
          <div className={classes_1.main_body_left}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>項目</StyledTableCell>
                    <StyledTableCell align="right">入力値</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.value}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={classes_1.main_body_right}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>項目</StyledTableCell>
                    <StyledTableCell align="right">買い</StyledTableCell>
                    <StyledTableCell align="right">売値</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pricedata.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.buy}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.sell}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className={classes_1.main_form_area_upload_area}>
          <div className={classes_1.main_form_area_upload_btn}>
            <Button
              variant="contained"
              component="label"
              className={classes.btn}
              onClick={() => quote(items)}
            >
              見積編集
            </Button>
          </div>
          <div className={classes_1.main_form_area_upload_btn}>
            <Button
              variant="contained"
              component="label"
              className={classes.btn}
              onClick={() => schedule(items)}
            >
              スケジュール編集
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorQuoteRequestDetailBoxPallet;

import React, { useState } from "react";
import classes from "../../dist/css/selectquotes.module.css";
import {
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Checkbox,
  Button,
} from "@material-ui/core/";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const SelectQuotesListItem = (props) => {
  const { item, styles } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {item.company}
        </TableCell>
        <TableCell align="left">{item.freetime}</TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)}>
          USD
          <span className={classes.money}>{item.money}</span>
          <span className={styles.span}>{open ? "閉じる" : "内訳を表示"}</span>
          <IconButton
            className={styles.icon}
            aria-label="expand row"
            size="small"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">{item.deadline} </TableCell>
        <TableCell align="center">
          {item.isexport ? (
            <div className={styles.buttonroot}>
              <Button
                variant="contained"
                className={styles.schedulebutton}
                onClick={() => dispatch(push("./schedulelist"))}
              >
                スケジュール
              </Button>
            </div>
          ) : (
            <Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              color="secondary"
            />
          )}
        </TableCell>
      </TableRow>
      <TableRow className={styles.innertablebody}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className={classes.breakdown_area_wrap}>
              <div className={classes.breakdown_area}>
                <div className={classes.breakdown_area_unit}>
                  <div className={classes.breakdown_area_head}>
                    Freight Charges
                  </div>
                  <div
                    className={`${classes.breakdown_area_detail} ${classes.mb_10}`}
                  >
                    <div className={classes.breakdown_area_text}>
                      Freight Charges
                    </div>
                    <div className={classes.breakdown_area_money}>
                      {item.freight}
                    </div>
                  </div>
                  <div className={classes.breakdown_area_head}>
                    Origin Charges
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>割増料金</div>
                    <div className={classes.breakdown_area_money}>
                      {item.extra}
                    </div>
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>
                      ドレージ料金
                    </div>
                    <div className={classes.breakdown_area_money}>
                      {item.drage}
                    </div>
                  </div>
                </div>
                <div className={classes.breakdown_area_unit}>
                  <div className={classes.breakdown_area_head}>
                    Customs Charges
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>
                      輸入通関料
                    </div>
                    <div className={classes.breakdown_area_money}>
                      {item.importCustoms}
                    </div>
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>
                      輸入取扱料
                    </div>
                    <div className={classes.breakdown_area_money}>
                      {item.importHandling}
                    </div>
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>関税</div>
                    <div className={classes.breakdown_area_money}>
                      {item.tariffs}
                    </div>
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>消費税</div>
                    <div className={classes.breakdown_area_money}>
                      {item.tax}
                    </div>
                  </div>
                </div>
                <div className={classes.breakdown_area_unit}>
                  <div className={classes.breakdown_area_head}>
                    Additional Charges
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>延滞料金</div>
                    <div className={classes.breakdown_area_money}>
                      {item.lateFees}
                    </div>
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>検査費用</div>
                    <div className={classes.breakdown_area_money}>
                      {item.costOfTesting}
                    </div>
                  </div>
                  <div className={classes.breakdown_area_detail}>
                    <div className={classes.breakdown_area_text}>
                      Short Drayage
                    </div>
                    <div className={classes.breakdown_area_money}>
                      {item.shortDrayage}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.breakdown_text}>
                ※1ドル＝¥110で計算されているため請求時と誤差が生じる場合がございます。予めご了承ください。
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default SelectQuotesListItem;

import React, { useEffect, useState, useMemo } from "react";
import classes from "../../../dist/css/mypages.module.css";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { makeStyles, createStyles, TextField, Button } from "@material-ui/core";
import { MyPageTables, MyPageAddDestination } from "../../index";
import { fetchRepUser, updateRepUser } from "./representative/operations";
import { getId } from "../../../reducks/users/selectors";
import { useSelector } from "react-redux";
import UserIcon from "../../../dist/images/usericon.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiFormControl-root": {
        margin: theme.spacing(0.5),
        width: "100%",
      },
      "& .MuiFilledInput-input": {
        padding: "27px 6px 5px",
        background: "#f7f7f7",
        borderBottom: "none",
      },
      "& .MuiFilledInput-underline:before": {
        borderBottom: "none",
      },
    },
    button: {
      width: "40%",
      fontSize: 12,
      marginTop: 20,
      marginLeft: 3,
      padding: "8px",
      background: "#0052cc",
      color: "#fff",
      textAlign: "center",
      textTransform: "capitalize",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#0052cc",
        opacity: "0.8",
        color: "#fff",
      },
    },
  })
);

const fields = [
  { id: "company_name", label: "会社名" },
  { id: "name", label: "お名前" },
  { id: "name_pronunciation", label: "ふりがな" },
  { id: "phone_number", label: "電話番号" },
  { id: "email", label: "メールアドレス" },
  { id: "postal_code", label: "郵便番号" },
  { id: "street_address", label: "住所" },
];

const initialRepresentativeUser = {
  name: "",
  name_pronunciation: "",
  email: "",
  phone_number: "",
  company_name: "",
  postal_code: "",
  street_address: "",
  isRepresentative: false,
};

const MyPageForms = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const selector = useSelector((state) => state);
  const isId = getId(selector);
  const [representativeUser, setRepresentativeUser] = useState(
    initialRepresentativeUser
  );
  const isRepresentativeUser = useMemo(
    () => representativeUser.isRepresentative,
    [representativeUser.isRepresentative]
  );
  const disabledList = ["company_name", "postal_code", "street_address"];
  const isDisable = (id) => {
    if (isRepresentativeUser) {
      return false;
    }
    return disabledList.some((item) => item === id);
  };
  useEffect(() => {
    fetchRepUser(setRepresentativeUser, isId);
  }, []);
  const handleChange = (key, value) => {
    setRepresentativeUser({ ...representativeUser, [key]: value });
  };
  const update = () => {
    updateRepUser(representativeUser, isId);
  };

  return (
    <div className={classes.main_body_left}>
      <div className={classes.main_body_left_title}>プロフィール</div>
      <div className={classes.main_body_left_icon_area}>
        <div className={classes.main_body_left_icon_area_title}>
          プロフィール画像
        </div>
        <div className={classes.main_body_left_icon_area_icon}>
          <img src={UserIcon} className={classes.icon} />
        </div>
      </div>
      <div className={classes.main_body_left_profile_area}>
        <div className={classes.main_body_left_profile_area_item}>
          <div className={classes.main_body_left_profile_area_item_title}>
            会社名
          </div>
          <div className={classes.main_body_left_profile_area_item_item}>
            <div className={styles.root}>
              <TextField label="会社名" variant="filled" />
            </div>
          </div>
        </div>
        <div className={classes.main_body_left_profile_area_item}>
          <div className={classes.main_body_left_profile_area_item_title}>
            ふりがな
          </div>
          <div className={classes.main_body_left_profile_area_item_item}>
            <div className={styles.root}>
              <TextField label="ふりがな" variant="filled" />
            </div>
          </div>
        </div>
        <div className={classes.main_body_left_profile_area_item}>
          <div className={classes.main_body_left_profile_area_item_title}>
            電話番号
          </div>
          <div className={classes.main_body_left_profile_area_item_item}>
            <div className={styles.root}>
              <TextField label="電話番号" variant="filled" />
            </div>
          </div>
        </div>
        <div className={classes.main_body_left_profile_area_item}>
          <div className={classes.main_body_left_profile_area_item_title}>
            メールアドレス
          </div>
          <div className={classes.main_body_left_profile_area_item_item}>
            <div className={styles.root}>
              <TextField label="メールアドレス" variant="filled" />
            </div>
          </div>
        </div>
        <div className={classes.main_body_left_profile_area_item}>
          <div className={classes.main_body_left_profile_area_item_title}>
            郵便番号
          </div>
          <div className={classes.main_body_left_profile_area_item_item}>
            <div className={styles.root}>
              <TextField label="郵便番号" variant="filled" />
            </div>
          </div>
        </div>
        <div className={classes.main_body_left_profile_area_item}>
          <div className={classes.main_body_left_profile_area_item_title}>
            住所
          </div>
          <div className={classes.main_body_left_profile_area_item_item}>
            <div className={styles.root}>
              <TextField label="住所" variant="filled" />
            </div>
          </div>
        </div>
        <div className={classes.main_body_left_profile_area_item}>
          <div className={classes.main_body_left_profile_area_item_title}></div>
          <div className={classes.main_body_left_profile_area_item_item}>
            <div className={styles.root}>
              <Button variant="contained" className={styles.button}>
                変更を保存
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageForms;

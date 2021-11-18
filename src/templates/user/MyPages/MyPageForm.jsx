import React, { useEffect, useState, useMemo } from "react";
import classes_1 from "../../../dist/css/mypage.module.css";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { MyPageTable, MyPageAddDestination } from "../../index";
import { fetchRepUser, updateRepUser } from "./representative/operations";
import { getId } from "../../../reducks/users/selectors";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "40ch",
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

const MyPageForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
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
    <div className={classes.root}>
      <div className={classes_1.block}>
        <div className={classes_1.block_body}>
          <div className={classes_1.block_body_left}>
            <div className={classes_1.block_title}>プロフィール</div>
            <div className={classes_1.block_body_item}>
              {fields.map((field, index) => (
                <TextField
                  key={index}
                  disabled={isDisable(field.id)}
                  id={field.id}
                  label={field.label}
                  value={representativeUser[field.id]}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  variant="outlined"
                />
              ))}
            </div>
            <div className={classes_1.form_area}>
              <div className={classes_1.submit_area}>
                <input
                  type="submit"
                  className={classes_1.submit}
                  value="変更する"
                  onClick={update}
                />
              </div>
            </div>
          </div>
          <div className={classes_1.block_body_right}>
            <div className={classes_1.block_title}>メンバー</div>
            <div className={classes_1.block_body_item}>
              <div className={classes_1.mt20}></div>
              <MyPageTable />
              <div className={classes_1.form_area}>
                {isRepresentativeUser ? (
                  <div className={classes_1.submit_area}>
                    <input
                      disabled={!isRepresentativeUser}
                      type="submit"
                      className={classes_1.submit}
                      value="アカウントを追加する"
                      onClick={() => dispatch(push("/addmember"))}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <MyPageAddDestination />
        </div>
      </div>
    </div>
  );
};

export default MyPageForm;

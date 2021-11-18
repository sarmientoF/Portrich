import React, { useState } from "react";
import classes from "../../../dist/css/addmenber.module.css";
import { TextInput } from "../../../components/Uikit";
import { AddMemberDialogContainer } from "../../index";

const fields = [
  { id: "name", label: "お名前", type: "text" },
  { id: "name_pronunciation", label: "ふりがな", type: "text" },
  { id: "department", label: "役職", type: "text" },
  { id: "email", label: "メールアドレス", type: "email" },
  { id: "phone_number", label: "電話番号", type: "email" },
  {
    id: "password",
    label: "パスワード(半角英数字で8文字以上)",
    type: "password",
  },
  {
    id: "password_re",
    label: "パスワード再入力)",
    type: "password",
  },
];

const initialState = {
  name: "",
  name_pronunciation: "",
  department: "",
  email: "",
  phone_number: "",
  password: "",
  password_re: "",
};

const AddMenberForm = () => {
  const [userInfo, setUserInfo] = useState(initialState);

  const handleChange = (value, id) => {
    setUserInfo({ ...userInfo, [id]: value });
  };

  return (
    <div className={classes.block}>
      <div className={classes.block_title}>アカウント追加</div>
      <div className={classes.block_body}>
        {fields.map((field, index) => (
          <TextInput
            key={index}
            fullWidth={true}
            label={field.label}
            multiline={false}
            required={true}
            rows={1}
            defaultValue={userInfo[field.id]}
            type={field.type}
            onChange={(e) => handleChange(e.target.value, field.id)}
          />
        ))}
        <div className={classes.form_area}>
          <div className={classes.submit_area}>
            <AddMemberDialogContainer userInfo={userInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenberForm;

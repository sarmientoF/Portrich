import React, { useState } from "react";
import classes_1 from "../../../dist/css/mypage.module.css";
import TextField from "@material-ui/core/TextField";
import { MyPageMailList } from "../../index";
import { addEmailAddress, ValidationEmail } from "./users/operations";
import { getCompanyId } from "../../../reducks/users/selectors";
import { useSelector } from "react-redux";
import { AnnounceModal } from "../../../components/common/index";

const MyPageAddDestination = () => {
  const selector = useSelector((state) => state);
  const CompanyId = getCompanyId(selector);
  const [addemail, setAddEmail] = useState("");
  const handleAddEmail = (e) => {
    setAddEmail(e.target.value);
  };

  const update = () => {
    ValidationEmail(
      addemail,
      CompanyId,
      addEmailAddress,
      handleModalOpen,
      setAddEmail
    );
  };

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className={classes_1.block_body_left}>
        <div className={classes_1.block_title}>メール共有設定</div>
        <div className={classes_1.block_body_item}>
          <TextField
            label="追加宛先メールアドレス"
            type="mail"
            variant="outlined"
            value={addemail}
            onChange={handleAddEmail}
          />
        </div>
        <div className={classes_1.form_area}>
          <div className={classes_1.submit_area}>
            <input
              type="submit"
              className={classes_1.submit}
              value="追加する"
              onClick={update}
            />
          </div>
        </div>
      </div>
      <div className={classes_1.block_body_right}>
        <div className={classes_1.block_title}>宛先一覧</div>
        <div className={classes_1.block_body_item}>
          <div className={classes_1.mt20}></div>
          <MyPageMailList CompanyId={CompanyId} />
        </div>
      </div>
      <AnnounceModal
        isOpen={modalopen}
        setModalOpen={setModalOpen}
        title="追加宛先メールアドレスを登録しました。"
        text="追加されたメールアドレスはccに登録されます。"
      />
    </>
  );
};

export default MyPageAddDestination;

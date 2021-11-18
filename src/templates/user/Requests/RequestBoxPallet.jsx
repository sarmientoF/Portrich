import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/request.module.css";
import { RequestBoxPalletForm, RequestBoxPalletSubmit } from "../../index";
import { fetchPortList, fetchCargoNameList } from "./items/operations";
import { CONSTANTS } from "./constants";

const initialPortList = [
  {
    departure_port: null,
    arrival_port: null,
  },
];

const RequestContainer = () => {
  const [portList, setPortList] = useState([]);
  const [cargoNameList, setCargoNameList] = useState([]);
  const [selectedPortList, setSelectedPortList] = useState(initialPortList);
  const [selectedCargo, setSelectedCargo] = useState();
  useEffect(() => {
    fetchPortList(setPortList);
    fetchCargoNameList(setCargoNameList);
  }, []);
  return (
    <section className={classes.main}>
      <div className={classes.main_head}>
        <div className={classes.main_head_left}>箱/パレット 見積依頼</div>
        <div className={classes.main_head_right}>
          ※お見積の依頼は24時間可能です。
        </div>
      </div>

      <div className={classes.main_body}>
        <RequestBoxPalletForm
          portList={portList}
          cargoNameList={cargoNameList}
          selectedPortList={selectedPortList}
          setSelectedPortList={setSelectedPortList}
          selectedCargo={selectedCargo}
          setSelectedCargo={setSelectedCargo}
        />
        <RequestBoxPalletSubmit
          shipping_type={CONSTANTS.SHIPPING_TYPE.BOX_OR_PALLET}
          selectedPortList={selectedPortList}
          selectedCargo={selectedCargo}
        />
      </div>
    </section>
  );
};

export default RequestContainer;

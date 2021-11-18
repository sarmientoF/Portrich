import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/requests_quotes.module.css";
import { RequestForm, RequestSubmit } from "../../index";
import {
  fetchPortList,
  fetchContainerTypeList,
  fetchCargoNameList,
} from "./items/operations";
import { CONSTANTS } from "./constants";

const initialPortList = [
  {
    departure_port: null,
    arrival_port: null,
  },
];

const Request = () => {
  const [portList, setPortList] = useState([]);
  const [containerTypeList, setContainerTypeList] = useState([]);
  const [cargoNameList, setCargoNameList] = useState([]);
  const [selectedPortList, setSelectedPortList] = useState(initialPortList);
  const [selectedContainerTypeList, setSelectedContainerTypeList] = useState(
    []
  );
  const [selectedCargo, setSelectedCargo] = useState();
  useEffect(() => {
    fetchPortList(setPortList);
    fetchContainerTypeList(setContainerTypeList);
    fetchCargoNameList(setCargoNameList);
  }, []);
  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <div className={classes.main_body_title}>定期見積を依頼する</div>
        <RequestForm
          portList={portList}
          containerTypeList={containerTypeList}
          cargoNameList={cargoNameList}
          selectedPortList={selectedPortList}
          setSelectedPortList={setSelectedPortList}
          selectedContainerTypeList={selectedContainerTypeList}
          setSelectedContainerTypeList={setSelectedContainerTypeList}
          selectedCargo={selectedCargo}
          setSelectedCargo={setSelectedCargo}
        />
        <RequestSubmit
          shipping_type={CONSTANTS.SHIPPING_TYPE.CONTAINER}
          selectedPortList={selectedPortList}
          selectedContainerTypeList={selectedContainerTypeList}
          selectedCargo={selectedCargo}
        />
      </div>
    </section>
  );
};

export default Request;

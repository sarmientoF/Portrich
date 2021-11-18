import React from "react";
// import classes from "../../dist/css/shipments_detail2.module.css";
import ShimpleTabs from "./ShimpleTabs";
import Message from "./message/Message";
import Document from "./document/Document";
// import PhotoManagement from './photoManagement/PhotoManagement'
import Invoice from "./invoice/Invoice";
import Quote from "./Quote/Quote";
import CustomsClearanceRequest from "./customsClearanceRequest/CustomsClearanceRequest";

const TabArea = () => {
  const tabTitle = [
    "メッセージ",
    "ドキュメント",
    "写真管理",
    "請求書",
    "見積",
    "トラック通関依頼",
  ];

  return (
    <ShimpleTabs tabTitle={tabTitle}>
      <div>
        <Message />
      </div>
      <div>
        <Document />
      </div>
      <div>
        <Document />
      </div>
      {/* <div><PhotoManagement /></div> */}
      <div>
        <Invoice />
      </div>
      <div>
        <Quote />
      </div>
      <div>
        <CustomsClearanceRequest />
      </div>
    </ShimpleTabs>
  );
};

export default TabArea;

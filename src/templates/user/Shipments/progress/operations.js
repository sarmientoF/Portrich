import CheckIcon from "../../../../dist/images/check.png";
import ShipIcon from "../../../../dist/images/ship.png";
import ShipGrayIcon from "../../../../dist/images/shipgray.png";
import ShipDengerIcon from "../../../../dist/images/shipdenger.png";
import CustomIcon from "../../../../dist/images/customs.png";
import CustomGrayIcon from "../../../../dist/images/customsgray.png";
import CustomDengerIcon from "../../../../dist/images/customsdenger.png";
import WareHouseIcon from "../../../../dist/images/warehouse.png";
import WareHouseGrayIcon from "../../../../dist/images/warehouse_gray.png";

export const getCurrentStateData = (cargoStatusList) => {
  const info_item = { border: "solid 2px #0052cc" };
  const gray_item = { border: "solid 1px #cccccc" };
  const turn_item = { border: "solid 2px #2e354b" };
  const denger_item = { border: "solid 2px #e34040" };
  const items = {};
  const today = new Date(Date.now());
  const cutDay = new Date(
    cargoStatusList.changed_cut_date || cargoStatusList.cut_date
  );
  const preferredDeliveryDay = new Date(cargoStatusList.preferred_delivery_day);
  const preferredPickUpDay = new Date(cargoStatusList.preferred_pick_up_day);

  const changeddeparturedate =
    cargoStatusList.changed_departure_date || cargoStatusList.departure_date;
  const changedarrivaldate =
    cargoStatusList.changed_arrival_date || cargoStatusList.arrival_date;

  const actualDepartureDay = new Date(changeddeparturedate);
  const actualArrivalDay = new Date(changedarrivaldate);

  //輸出トラック・ドレージ依頼
  if (today < preferredDeliveryDay) {
    items["export_werahouse"] = WareHouseGrayIcon;
    items["export_werahouse_styles"] = gray_item;
  }
  if (preferredDeliveryDay <= today && today < preferredPickUpDay) {
    items["export_werahouse"] = WareHouseIcon;
    items["export_werahouse_styles"] = turn_item;
  }
  if (cargoStatusList.is_delivery_completed) {
    items["export_werahouse"] = CheckIcon;
    items["export_werahouse_styles"] = info_item;
    items["export_werahouse_hr"] = true;
  }
  //輸出通関
  if (
    cargoStatusList.is_checking_customs_clearance &&
    !cargoStatusList.has_done_customs_clearance
  ) {
    items["export_customs"] = CustomDengerIcon;
    items["export_customs_styles"] = denger_item;
  } else if (cargoStatusList.has_done_customs_clearance) {
    items["export_customs"] = CheckIcon;
    items["export_customs_styles"] = info_item;
    items["export_customs_hr"] = true;
  } else if (cargoStatusList.is_delivery_completed) {
    items["export_customs"] = CustomIcon;
    items["export_customs_styles"] = turn_item;
  } else {
    items["export_customs"] = CustomGrayIcon;
    items["export_customs_styles"] = gray_item;
  }

  //通関検査
  // if (
  //   cargoStatusList.is_checking_customs_clearance &&
  //   !cargoStatusList.has_done_customs_clearance
  // ) {
  //   items["is_checking_customs"] = true;
  // }

  //輸出で通関が選択されていない時
  if (cutDay > today) {
    items["export_custom_of_not_selected"] = CustomIcon;
    items["export_customs_styles_of_not_selected"] = turn_item;
  } else {
    items["export_custom_of_not_selected"] = CheckIcon;
    items["export_customs_styles_of_not_selected"] = info_item;
    items["export_customs_hr_of_not_selected"] = true;
  }

  //From船
  if (
    actualDepartureDay < today &&
    cargoStatusList.has_done_customs_clearance
  ) {
    items["departure_ship"] = CheckIcon;
    items["departure_ship_styles"] = info_item;
    items["departure_ship_hr"] = true;
  } else if (
    (today < actualDepartureDay &&
      cargoStatusList.has_done_customs_clearance) ||
    cutDay < today
  ) {
    items["departure_ship"] = ShipIcon;
    items["departure_ship_styles"] = turn_item;
  } else {
    items["departure_ship"] = ShipGrayIcon;
    items["departure_ship_styles"] = gray_item;
  }

  //To船
  if (actualArrivalDay < today && actualDepartureDay < today) {
    items["arrival_ship"] = CheckIcon;
    items["arrival_ship_styles"] = info_item;
    items["arrival_ship_hr"] = true;
  } else if (today < actualArrivalDay && actualDepartureDay < today) {
    items["arrival_ship"] = ShipIcon;
    items["arrival_ship_styles"] = turn_item;
  } else {
    items["arrival_ship"] = ShipGrayIcon;
    items["arrival_ship_styles"] = gray_item;
  }
  //輸入通関
  if (cargoStatusList.is_checking_customs_clearance) {
    items["import_customs"] = CustomDengerIcon;
    items["import_customs_styles"] = denger_item;
  } else if (cargoStatusList.has_done_customs_clearance) {
    items["import_customs"] = CheckIcon;
    items["import_customs_styles"] = info_item;
    items["import_customs_hr"] = true;
  } else if (actualArrivalDay < today && actualDepartureDay < today) {
    items["import_customs"] = CustomIcon;
    items["import_customs_styles"] = turn_item;
  } else {
    items["import_customs"] = CustomGrayIcon;
    items["import_customs_styles"] = gray_item;
  }

  //輸入トラック・ドレージ依頼
  if (cargoStatusList.is_delivery_completed) {
    items["import_werahouse"] = CheckIcon;
    items["import_werahouse_styles"] = info_item;
    items["import_werahouse_hr"] = true;
  } else if (cargoStatusList.is_checking_customs_clearance) {
    items["import_werahouse"] = WareHouseIcon;
    items["import_werahouse_styles"] = turn_item;
  } else {
    items["import_werahouse"] = WareHouseGrayIcon;
    items["import_werahouse_styles"] = gray_item;
  }
  if (!cargoStatusList.changed_cut_date) {
    items["changedcutdate"] = cargoStatusList.cut_date.replaceAll(/-/g, "/");
  } else {
    items["changedcutdate"] = cargoStatusList.changed_cut_date.replaceAll(
      /-/g,
      "/"
    );
  }
  if (!cargoStatusList.changed_open_date) {
    items["changedopendate"] = cargoStatusList.open_date.replaceAll(/-/g, "/");
  } else {
    items["changedopendate"] = cargoStatusList.changed_open_date.replaceAll(
      /-/g,
      "/"
    );
  }
  items["id"] = cargoStatusList.id;
  items["booking_id"] = cargoStatusList.booking_id;
  items["booking_no"] = cargoStatusList.booking_no;
  items["users_company_name"] = cargoStatusList.users_company_name;
  items["shipping_type_id"] = cargoStatusList.shipping_type_id;
  items["container_type_name"] = cargoStatusList.container_type_name;
  items["freetime"] = cargoStatusList.freetime;
  items["revenue_ton"] = cargoStatusList.revenue_ton;
  items["created_at"] = cargoStatusList.created_at;
  items["changeddeparturedate"] = changeddeparturedate.replaceAll(/-/g, "/");
  items["changedarrivaldate"] = changedarrivaldate.replaceAll(/-/g, "/");
  items["departure_port_name"] = cargoStatusList.departure_port_name;
  items["arrival_port_name"] = cargoStatusList.arrival_port_name;
  items["preferred_delivery_day"] = cargoStatusList.preferred_delivery_day;
  items["workplace"] = cargoStatusList.workplace;
  items["need_truck_or_drayage"] = cargoStatusList.need_truck_or_drayage;
  items["need_customs_documents"] = cargoStatusList.need_customs_documents;

  return items;
};

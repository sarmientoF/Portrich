import axios from "axios";
import { AppConfig } from "../../../../common/config";
import { getSize } from "../../../../common/utils";
import CheckIcon from "../../../../dist/images/check.png";
import ShipIcon from "../../../../dist/images/ship.png";
import ShipGrayIcon from "../../../../dist/images/shipgray.png";
import ShipDengerIcon from "../../../../dist/images/shipdenger.png";
import CustomIcon from "../../../../dist/images/customs.png";
import CustomGrayIcon from "../../../../dist/images/customsgray.png";
import CustomDengerIcon from "../../../../dist/images/customsdenger.png";
import WareHouseIcon from "../../../../dist/images/warehouse.png";
import WareHouseGrayIcon from "../../../../dist/images/warehouse_gray.png";

const ENDPOINT = {
  CARGO_STATUSES_FOR_BOX_PALLET: "/api/v1/cargo_statuses/box_pallet/view/",
  CARGO_STATUSES_FOR_CONTAINERS: "/api/v1/cargo_statuses/container/view/",
};

export const fetchCargoStatus = async (id, shippingTypeId, setData) => {
  const endpoint = getEndpoint(shippingTypeId);
  try {
    const response = await axios.get(`${AppConfig.api.url}${endpoint}${id}/`, {
      withCredentials: true,
    });
    setData(response.data);
  } catch (e) {
    setData({});
  }
};

const getEndpoint = (shippingTypeId) => {
  if (shippingTypeId === "1") {
    return ENDPOINT.CARGO_STATUSES_FOR_BOX_PALLET;
  }
  if (shippingTypeId === "2") {
    return ENDPOINT.CARGO_STATUSES_FOR_CONTAINERS;
  }
  throw Error("invalid shipping type id");
};

export const getProgressItems = (cargoStatus, shippingTypeId) => {
  const items = {};
  // box pallet
  if (shippingTypeId === "1") {
    items["need_shipping"] = cargoStatus.need_truck;
    items["preferred_delivery_day"] = cargoStatus.preferred_delivery_day_track;
    items["preferred_pick_up_day"] = cargoStatus.preferred_pick_up_day_track;
    items["cut_day"] = cargoStatus.cfs_cut_date;
    items["workplace"] = cargoStatus.workplace_track;
  }
  // container
  if (shippingTypeId === "2") {
    items["need_shipping"] = cargoStatus.need_drayage_shipping;
    items["preferred_delivery_day"] =
      cargoStatus.preferred_delivery_day_drayage;
    items["preferred_pick_up_day"] = cargoStatus.preferred_pick_up_day_drayage;
    items["cut_day"] = cargoStatus.changed_cut_date || cargoStatus.cy_cut_date;
    items["workplace"] = cargoStatus.workplace_drayage;
  }
  items["need_customs_documents"] = cargoStatus.need_customs_documents;
  items["is_delivery_completed"] = cargoStatus.is_delivery_completed;
  items["has_done_customs_clearance"] = cargoStatus.has_done_customs_clearance;
  items["is_checking_customs_clearance"] =
    cargoStatus.is_checking_customs_clearance;
  items["departure_port_name"] = cargoStatus.departure_port_name;
  items["arrival_port_name"] = cargoStatus.arrival_port_name;
  items["departure_date"] = cargoStatus.departure_date;
  items["arrival_date"] = cargoStatus.arrival_date;
  items["changed_departure_date"] = cargoStatus.changed_departure_date;
  items["changed_arrival_date"] = cargoStatus.changed_arrival_date;
  return items;
};

export const getCurrentStateData = (
  setProgressItem,
  preferredDeliveryDay,
  preferredPickUpDay,
  changeddeparturedate,
  changedarrivaldate,
  actualDepartureDay,
  actualArrivalDay
) => {
  const info_item = { border: "solid 2px #0052cc" };
  const gray_item = { border: "solid 1px #cccccc" };
  const turn_item = { border: "solid 2px #2e354b" };
  const denger_item = { border: "solid 2px #e34040" };
  const items = {};
  const cutDay = new Date(setProgressItem.cut_day);
  const today = new Date(Date.now());

  //輸出トラック・ドレージ依頼
  if (today < preferredDeliveryDay) {
    items["export_werahouse"] = WareHouseGrayIcon;
    items["export_werahouse_styles"] = gray_item;
  }
  if (preferredDeliveryDay <= today && today < preferredPickUpDay) {
    items["export_werahouse"] = WareHouseIcon;
    items["export_werahouse_styles"] = turn_item;
  }
  if (setProgressItem.is_delivery_completed) {
    items["export_werahouse"] = CheckIcon;
    items["export_werahouse_styles"] = info_item;
    items["export_werahouse_hr"] = true;
  }

  //輸出通関
  if (
    setProgressItem.is_checking_customs_clearance &&
    !setProgressItem.has_done_customs_clearance
  ) {
    items["export_customs"] = CustomDengerIcon;
    items["export_customs_styles"] = denger_item;
  } else if (setProgressItem.has_done_customs_clearance) {
    items["export_customs"] = CheckIcon;
    items["export_customs_styles"] = info_item;
    items["export_customs_hr"] = true;
  } else if (setProgressItem.is_delivery_completed) {
    items["export_customs"] = CustomIcon;
    items["export_customs_styles"] = turn_item;
  } else {
    items["export_customs"] = CustomGrayIcon;
    items["export_customs_styles"] = gray_item;
  }

  //通関検査
  // if (
  //   setProgressItem.is_checking_customs_clearance &&
  //   !setProgressItem.has_done_customs_clearance
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
    setProgressItem.has_done_customs_clearance
  ) {
    items["departure_ship"] = CheckIcon;
    items["departure_ship_styles"] = info_item;
    items["departure_ship_hr"] = true;
  } else if (
    (today < actualDepartureDay &&
      setProgressItem.has_done_customs_clearance) ||
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
  if (setProgressItem.is_checking_customs_clearance) {
    items["import_customs"] = CustomDengerIcon;
    items["import_customs_styles"] = denger_item;
  } else if (setProgressItem.has_done_customs_clearance) {
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
  if (setProgressItem.is_delivery_completed) {
    items["import_werahouse"] = CheckIcon;
    items["import_werahouse_styles"] = info_item;
    items["import_werahouse_hr"] = true;
  } else if (setProgressItem.is_checking_customs_clearance) {
    items["import_werahouse"] = WareHouseIcon;
    items["import_werahouse_styles"] = turn_item;
  } else {
    items["import_werahouse"] = WareHouseGrayIcon;
    items["import_werahouse_styles"] = gray_item;
  }

  items["changeddeparturedate"] =
    changeddeparturedate && changeddeparturedate.replaceAll(/-/g, "/");
  items["changedarrivaldate"] =
    changedarrivaldate && changedarrivaldate.replaceAll(/-/g, "/");
  items["departure_port_name"] = setProgressItem.departure_port_name;
  items["arrival_port_name"] = setProgressItem.arrival_port_name;
  items["workplace"] = setProgressItem.workplace;
  items["cut_day"] =
    setProgressItem.cut_day && setProgressItem.cut_day.replaceAll(/-/g, "/");

  return items;
};

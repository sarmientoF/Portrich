import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  SCHEDULES_CONTAINER: "/api/v1/schedules/container/",
  SCHEDULES_BOX_PALLET: "/api/v1/schedules/box_pallet/",
};

const fetch = (endpoint) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchScheduleForContainer = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.SCHEDULES_CONTAINER);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchScheduleForBoxPallet = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.SCHEDULES_BOX_PALLET);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const setScheduleContainerItems = (
  item,
  shipportlist,
  shippingcompanies
) => {
  const departurePortId = item.departure_port;
  const arrivalPortId = item.arrival_port;
  const wayPointId = item.waypoint;
  const ShippingCompaniesId = item.shipping_company;
  const departurePortName = shipportlist.filter(
    (item) => item.id === departurePortId
  );
  const arrivalPortName = shipportlist.filter(
    (item) => item.id === arrivalPortId
  );
  const wayPointName = shipportlist.filter((item) => item.id === wayPointId);
  const ShippingCompaniesName = shippingcompanies.filter(
    (item) => item.id === ShippingCompaniesId
  );
  const items = {};

  items["departure_port_name"] =
    departurePortName.length === 0 ? "" : departurePortName[0].value;
  items["arrival_port_name"] =
    arrivalPortName.length === 0 ? "" : arrivalPortName[0].value;
  items["waypoint_name"] =
    wayPointName.length === 0 ? "" : wayPointName[0].value;
  items["shipping_company_name"] =
    ShippingCompaniesName.length === 0 ? "" : ShippingCompaniesName[0].value;
  items["vessel_name"] = item.vessel_name;
  items["voyage_no"] = item.voyage_no;
  items["departure_date"] =
    item.departure_date && item.departure_date.replaceAll(/-/g, "/");
  items["arrival_date"] =
    item.arrival_date && item.arrival_date.replaceAll(/-/g, "/");
  items["cy_cut_date"] =
    item.cy_cut_date && item.cy_cut_date.replaceAll(/-/g, "/");
  items["cy_open_date"] =
    item.cy_open_date && item.cy_open_date.replaceAll(/-/g, "/");
  items["marine_traffic_ship_id"] = item.marine_traffic_ship_id;
  return items;
};

export const setScheduleBoxPalletItems = (
  item,
  shipportlist,
  shippingcompanies
) => {
  const departurePortId = item.departure_port;
  const arrivalPortId = item.arrival_port;
  const wayPointId = item.waypoint;
  const ShippingCompaniesId = item.shipping_company;
  const departurePortName = shipportlist.filter(
    (item) => item.id === departurePortId
  );
  const arrivalPortName = shipportlist.filter(
    (item) => item.id === arrivalPortId
  );
  const wayPointName = shipportlist.filter((item) => item.id === wayPointId);
  const ShippingCompaniesName = shippingcompanies.filter(
    (item) => item.id === ShippingCompaniesId
  );
  const items = {};

  items["departure_port_name"] =
    departurePortName.length === 0 ? "" : departurePortName[0].value;
  items["arrival_port_name"] =
    arrivalPortName.length === 0 ? "" : arrivalPortName[0].value;
  items["waypoint_name"] =
    wayPointName.length === 0 ? "" : wayPointName[0].value;
  items["shipping_company_name"] =
    ShippingCompaniesName.length === 0 ? "" : ShippingCompaniesName[0].value;
  items["vessel_name"] = item.vessel_name;
  items["voyage_no"] = item.voyage_no;
  items["departure_date"] =
    item.departure_date && item.departure_date.replaceAll(/-/g, "/");
  items["arrival_date"] =
    item.arrival_date && item.arrival_date.replaceAll(/-/g, "/");
  items["cfs_cut_date"] =
    item.cfs_cut_date && item.cfs_cut_date.replaceAll(/-/g, "/");
  items["cfs_open_date"] =
    item.cfs_open_date && item.cfs_open_date.replaceAll(/-/g, "/");
  items["marine_traffic_ship_id"] = item.marine_traffic_ship_id;
  return items;
};

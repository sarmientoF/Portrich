import axios from "axios";
import { AppConfig } from "../../../../common/config";
import { parseQueryStrings, get } from "../../../../common/utils";

const ENDPOINT = {
  SCHEDULES_CONTAINER: "/api/v1/schedules/container/",
  SCHEDULES_BOX_PALLET: "/api/v1/schedules/box_pallet/",
};

const fetch = async (endpoint, queryString, setItems) => {
  const params = parseQueryStrings(queryString);
  if (!params.id) {
    return;
  }
  try {
    const response = await get(`${endpoint}${params.id}/`);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

const patch = (endpoint, params) => {
  const response = axios.patch(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const fetchScheduleForContainer = (queryString, setItems) => {
  fetch(ENDPOINT.SCHEDULES_CONTAINER, queryString, setItems);
};
export const fetchScheduleForBoxPallet = (queryString, setItems) => {
  fetch(ENDPOINT.SCHEDULES_BOX_PALLET, queryString, setItems);
};

export const registerSchedulesEditsContainer = async (
  param,
  blankparam,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = param.id;
    const params = {};

    if (param.vessel_name !== "") {
      params["vessel_name"] = param.vessel_name;
    }
    if (param.voyage_no !== "") {
      params["voyage_no"] = param.voyage_no;
    }
    if (param.departure_date !== "") {
      params["departure_date"] = param.departure_date;
    }
    if (param.arrival_date !== "") {
      params["arrival_date"] = param.arrival_date;
    }
    if (param.cy_cut_date !== "") {
      params["cy_cut_date"] = param.cy_cut_date;
    }
    if (param.cy_open_date !== "") {
      params["cy_open_date"] = param.cy_open_date;
    }
    if (param.marine_traffic_ship_id !== "") {
      params["marine_traffic_ship_id"] = param.marine_traffic_ship_id;
    }
    if (param.shipping_company !== "") {
      params["shipping_company"] = param.shipping_company;
    }
    if (param.departure_port !== null) {
      params["departure_port"] = param.departure_port;
    }
    if (param.waypoint !== null) {
      params["waypoint"] = param.waypoint;
    }
    if (param.arrival_port !== null) {
      params["arrival_port"] = param.arrival_port;
    }
    await patch(`${ENDPOINT.SCHEDULES_CONTAINER}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerSchedulesEditsBoxPallet = async (
  param,
  blankparam,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = param.id;
    const params = {};

    if (param.vessel_name !== "") {
      params["vessel_name"] = param.vessel_name;
    }
    if (param.voyage_no !== "") {
      params["voyage_no"] = param.voyage_no;
    }
    if (param.departure_date !== "") {
      params["departure_date"] = param.departure_date;
    }
    if (param.arrival_date !== "") {
      params["arrival_date"] = param.arrival_date;
    }
    if (param.cfs_cut_date !== "") {
      params["cfs_cut_date"] = param.cfs_cut_date;
    }
    if (param.cfs_open_date !== "") {
      params["cfs_open_date"] = param.cfs_open_date;
    }
    if (param.marine_traffic_ship_id !== "") {
      params["marine_traffic_ship_id"] = param.marine_traffic_ship_id;
    }
    if (param.shipping_company !== "") {
      params["shipping_company"] = param.shipping_company;
    }
    if (param.departure_port !== null) {
      params["departure_port"] = param.departure_port;
    }
    if (param.waypoint !== null) {
      params["waypoint"] = param.waypoint;
    }
    if (param.arrival_port !== null) {
      params["arrival_port"] = param.arrival_port;
    }
    await patch(`${ENDPOINT.SCHEDULES_BOX_PALLET}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteScheduleOfContainer = async (
  items,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.SCHEDULES_CONTAINER}${id}/`,
      {
        withCredentials: true,
      }
    );
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteScheduleOfBoxPallet = async (
  items,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.SCHEDULES_BOX_PALLET}${id}/`,
      {
        withCredentials: true,
      }
    );
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

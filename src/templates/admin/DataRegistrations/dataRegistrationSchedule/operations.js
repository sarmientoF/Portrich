import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  SCHEDULE_CONTAINER: "/api/v1/schedules/container/",
  SCHEDULE_BOX_PALLET: "/api/v1/schedules/box_pallet/",
};

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const registerBoxpalletSchedule = async (state, handleOpen) => {
  try {
    const params = {
      shipping_company: state.shipping_company,
      departure_port: state.departure_port,
      waypoint: state.waypoint,
      arrival_port: state.arrival_port,
      vessel_name: state.vessel_name,
      voyage_no: state.voyage_no,
      departure_date: state.departure_date,
      arrival_date: state.arrival_date,
      cfs_cut_date: state.cut_day,
      cfs_open_date: state.open_day,
      marine_traffic_ship_id: state.marine_traffic_ship_id,
    };
    await post(ENDPOINT.SCHEDULE_BOX_PALLET, params);
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerContainerSchedule = async (state, handleOpen) => {
  try {
    const params = {
      shipping_company: state.shipping_company,
      departure_port: state.departure_port,
      waypoint: state.waypoint,
      arrival_port: state.arrival_port,
      vessel_name: state.vessel_name,
      voyage_no: state.voyage_no,
      departure_date: state.departure_date,
      arrival_date: state.arrival_date,
      cy_cut_date: state.cut_day,
      cy_open_date: state.open_day,
      marine_traffic_ship_id: state.marine_traffic_ship_id,
    };
    await post(ENDPOINT.SCHEDULE_CONTAINER, params);
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

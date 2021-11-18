import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  CARGO_STATUSES: "/api/v1/cargo_statuses/",
  SALES_STAFF: "/api/v1/accounts/sales_staffs/",
};

const fetch = (endpoint) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchOriginalManegmentItem = async (
  setTextStates,
  cargoStatus
) => {
  try {
    const id = cargoStatus.id;
    const result = await axios.get(
      `${AppConfig.api.url}${ENDPOINT.CARGO_STATUSES}${id}/`,
      {
        withCredentials: true,
      }
    );
    const data = {
      changed_marine_traffic_ship_id:
        result.data.changed_marine_traffic_ship_id,
      is_checking_customs_clearance: result.data.is_checking_customs_clearance,
      has_done_customs_clearance: result.data.has_done_customs_clearance,
      is_delivery_completed: result.data.is_delivery_completed,
      drayage_shipping_jpy_buy: result.data.drayage_shipping_jpy_buy,
      drayage_shipping_jpy_sell: result.data.drayage_shipping_jpy_sell,
      truck_scale_jpy_buy: result.data.truck_scale_jpy_buy,
      truck_scale_jpy_sell: result.data.truck_scale_jpy_sell,
      use_truck_fee_jpy_buy: result.data.use_truck_fee_jpy_buy,
      use_truck_fee_jpy_sell: result.data.use_truck_fee_jpy_sell,
      loading_and_unloading_fee_jpy_buy:
        result.data.loading_and_unloading_fee_jpy_buy,
      loading_and_unloading_fee_jpy_sell:
        result.data.loading_and_unloading_fee_jpy_sell,
      usd_to_jpy_rate: result.data.usd_to_jpy_rate,
      changed_departure_date: result.data.changed_departure_date,
      changed_arrival_date: result.data.changed_arrival_date,
      changed_vessel_name: result.data.changed_vessel_name,
      changed_voyage_no: result.data.changed_voyage_no,
      changed_open_date: result.data.changed_open_date,
      changed_cut_date: result.data.changed_cut_date,
    };
    setTextStates(data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchSalesStaffs = async (setSalesStaffs) => {
  try {
    const response = await fetch(ENDPOINT.SALES_STAFF);
    const list = response.data.map((val) => {
      return { title: val.name, id: val.id };
    });
    setSalesStaffs(list);
  } catch (e) {
    setSalesStaffs([]);
  }
};

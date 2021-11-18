import axios from "axios";
import { push } from "connected-react-router";
import { AppConfig } from "../../../../common/config";
import { parseQueryStrings, get } from "../../../../common/utils";

const ENDPOINT = {
  VIEW_FOR_QUOTE_REQUESTS_FOR_CONTAINER_FOR_REGISTERED:
    "/api/v1/quote_requests/container/registered/view/",
  VIEW_FOR_QUOTE_REQUESTS_FOR_BOX_PALLET_FOR_REGISTERED:
    "/api/v1/quote_requests/box_pallet/registered/view/",
  CARGO_STATUSES: "/api/v1/cargo_statuses/",
  SALES_STAFF: "/api/v1/accounts/sales_staffs/",
};

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

const fetch = (endpoint) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}`, {
    withCredentials: true,
  });
  return response;
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

const fetchViewForQuotes = (endpoint, queryString) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}${queryString}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchViewForQuotesDetailsConatiner = async (
  queryString,
  setItems
) => {
  try {
    const response = await fetchViewForQuotes(
      ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_FOR_CONTAINER_FOR_REGISTERED,
      queryString
    );
    setItems(response.data[0]);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchViewForQuotesDetailsBoxPallet = async (
  queryString,
  setItems
) => {
  try {
    const response = await fetchViewForQuotes(
      ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_FOR_BOX_PALLET_FOR_REGISTERED,
      queryString
    );
    setItems(response.data[0]);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerQuotesDetailsBoxPallet = async (
  items,
  selectedSalesStaffs,
  truckbuy,
  trucksell,
  truckloadingbuy,
  truckloadingsell,
  handleClose,
  handleOpen
) => {
  try {
    const params = {
      users_company: items.users_company,
      usd_to_jpy_rate: items.currency_rate,
      is_paied: false,
      shipping_type: 1,
      is_arrived: false,
      box_pallet_booking: items.id,
      is_checking_customs_clearance: false,
      has_done_customs_clearance: false,
      is_delivery_completed: false,
      person_in_charge: selectedSalesStaffs || null,
      use_truck_fee_jpy_buy: truckbuy || 0,
      use_truck_fee_jpy_sell: trucksell || 0,
      loading_and_unloading_fee_jpy_buy: truckloadingbuy || 0,
      loading_and_unloading_fee_jpy_sell: truckloadingsell || 0,
    };
    await post(ENDPOINT.CARGO_STATUSES, params);
    handleClose();
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerQuotesDetailsContainer = async (
  items,
  selectedSalesStaffs,
  drayagebuy,
  drayagesell,
  handleClose,
  handleOpen
) => {
  try {
    const params = {
      users_company: items.users_company,
      usd_to_jpy_rate: items.currency_rate,
      is_paied: false,
      shipping_type: 2,
      is_arrived: false,
      container_booking: items.id,
      is_checking_customs_clearance: false,
      has_done_customs_clearance: false,
      is_delivery_completed: false,
      person_in_charge: selectedSalesStaffs || null,
      drayage_shipping_jpy_buy: drayagebuy || 0,
      drayage_shipping_jpy_sell: drayagesell || 0,
    };
    await post(ENDPOINT.CARGO_STATUSES, params);
    handleClose();
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

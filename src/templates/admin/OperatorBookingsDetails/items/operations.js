import axios from "axios";
import { AppConfig } from "../../../../common/config";
import { parseQueryStrings, get } from "../../../../common/utils";

const ENDPOINT = {
  VIEW_FOR_BOOKINGS_FOR_CONTAINER: "/api/v1/bookings/containers/view/",
  VIEW_FOR_BOOKINGS_FOR_BOX_PALLET: "/api/v1/bookings/boxes_or_pallets/view/",
  CARGO_STATUSES: "/api/v1/cargo_statuses/",
  SALES_STAFF: "/api/v1/accounts/sales_staffs/",
  BOOKING_CONTAINERS: "/api/v1/bookings/containers/",
  BOOKING_BOXES_OR_PALLETS: "/api/v1/bookings/boxes_or_pallets/",
  BOOKING_SI_CONTAINERS: "/api/v1/bookings/si/containers/",
  BOOKING_SI_BOXES_OR_PALLETS: "/api/v1/bookings/si/boxes_or_pallets/",
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

const patch = (endpoint, params) => {
  const response = axios.patch(`${AppConfig.api.url}${endpoint}`, params, {
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

export const fetchViewForBookingsDetailsBoxPallet = (queryString, setItems) => {
  fetchViewForBookings(
    ENDPOINT.VIEW_FOR_BOOKINGS_FOR_BOX_PALLET,
    queryString,
    setItems
  );
};

export const fetchViewForBookingsDetailsConatiner = (queryString, setItems) => {
  fetchViewForBookings(
    ENDPOINT.VIEW_FOR_BOOKINGS_FOR_CONTAINER,
    queryString,
    setItems
  );
};

const fetchViewForBookings = async (endpoint, queryString, setItems) => {
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

export const registerBookingDetailsBoxPallet = async (
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

export const registerBookingDetailsContainer = async (
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

export const registerBookingNoOfContainer = async (
  items,
  bookingno,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.id;
    const params = {
      booking_no: bookingno,
    };
    await patch(`${ENDPOINT.BOOKING_CONTAINERS}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerBookingNoOfBoxPallet = async (
  items,
  bookingno,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.id;
    const params = {
      booking_no: bookingno,
    };
    await patch(`${ENDPOINT.BOOKING_BOXES_OR_PALLETS}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const notEstablishedContainer = async (
  item,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = item.id;
    const params = {};
    params["is_not_established"] = true;
    await patch(`${ENDPOINT.BOOKING_CONTAINERS}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const notEstablishedBoxPallet = async (
  item,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = item.id;
    const params = {};
    params["is_not_established"] = true;

    await patch(`${ENDPOINT.BOOKING_BOXES_OR_PALLETS}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteShippingInstructionOfContainer = async (
  items,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.si_id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.BOOKING_SI_CONTAINERS}${id}/`,
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

export const deleteShippingInstructionOfBoxPallet = async (
  items,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.si_id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.BOOKING_SI_BOXES_OR_PALLETS}${id}/`,
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

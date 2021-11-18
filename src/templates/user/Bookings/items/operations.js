import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  VIEW_FOR_BOOKINGS_FOR_CONTAINER: "/api/v1/bookings/containers/view/",
  VIEW_FOR_BOOKINGS_FOR_BOX_PALLET: "/api/v1/bookings/boxes_or_pallets/view/",
  BOOKING_CONTAINERS: "/api/v1/bookings/containers/",
  BOOKING_BOXES_OR_PALLETS: "/api/v1/bookings/boxes_or_pallets/",
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

export const fetchViewForBookingsConatiners = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.VIEW_FOR_BOOKINGS_FOR_CONTAINER);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchViewForBookingBoxPallets = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.VIEW_FOR_BOOKINGS_FOR_BOX_PALLET);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerBookingCancelContainer = async (
  item,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = item.id;
    const params = {};
    params["is_canceled"] = true;

    await patch(`${ENDPOINT.BOOKING_CONTAINERS}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerBookingCancelBoxPallet = async (
  item,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = item.id;
    const params = {};
    params["is_canceled"] = true;

    await patch(`${ENDPOINT.BOOKING_BOXES_OR_PALLETS}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

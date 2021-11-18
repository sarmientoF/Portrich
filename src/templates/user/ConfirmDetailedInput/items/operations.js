import axios from "axios";
import { push } from "connected-react-router";
import { AppConfig } from "../../../../common/config";
import { sendSlack } from "../../../../common/sendslack";

const ENDPOINT = {
  VIEW_FOR_QUOTE_REQUESTS_FOR_CONTAINER:
    "/api/v1/quote_requests/container/view/",
  VIEW_FOR_QUOTE_REQUESTS_FOR_BOX_PALLET:
    "/api/v1/quote_requests/box_pallet/view/",
  BOOKING_CONTAINERS: "/api/v1/bookings/containers/",
  BOOKING_BOXES_OR_PALLETS: "/api/v1/bookings/boxes_or_pallets/",
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

export const fetchViewForQuoteRequests = async (setItems) => {
  try {
    const response = await fetch(
      ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_FOR_CONTAINER
    );
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchViewForBoxPalletRequests = async (setItems) => {
  try {
    const response = await fetch(
      ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_FOR_BOX_PALLET
    );
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerContainerBooking = async (state, quote, dispatch) => {
  try {
    const params = {
      quantity: state.quantity,
      need_customs_documents: state.customs === "依頼する" ? true : false,
      need_drayage_shipping: state.drayage === "依頼する" ? true : false,
      need_truck_scale: state.daikan === "依頼する" ? true : false,
      num_of_axis: state.axes === "2軸" ? 2 : 3 || null,
      workplace_drayage: state.workplace,
      street_address_drayage: state.workplace_address,
      preferred_delivery_day_drayage: state.pickup_datetime,
      preferred_pick_up_day_drayage: state.delivery_datetime,
      quote: quote.id,
      schedule: quote.schedule_id,
      remarks: state.remarks,
    };
    await post(ENDPOINT.BOOKING_CONTAINERS, params);
    const text = "FCLのBooking依頼がありました。";
    const url =
      "https://hooks.slack.com/services/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";
    sendSlack(text, url);
    dispatch(push("/thanks"));
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerBoxPalletBooking = async (
  state,
  quote,
  revenueton,
  dispatch
) => {
  try {
    const params = {
      quantity: state.quantity,
      cubic_meter: state.volumeM3 || 0,
      size_L: state.sizeL || 0,
      size_W: state.sizeW || 0,
      size_H: state.sizeH || 0,
      weight: state.weight || 0,
      revenue_ton: revenueton,
      pallet_type: state.pallettype || null,
      need_customs_documents: state.customs === "依頼する" ? true : false,
      need_truck: state.truck === "依頼する" ? true : false,
      need_loading_or_unloading:
        state.truckloading === "依頼する" ? true : false,
      workplace_drayage: state.workplace,
      street_address_drayage: state.workplace_address,
      preferred_delivery_day_track: state.pickup_datetime,
      preferred_pick_up_day_track: state.delivery_datetime,
      quote: quote.id,
      schedule: quote.schedule_id,
      remarks: state.remarks,
    };
    await post(ENDPOINT.BOOKING_BOXES_OR_PALLETS, params);
    const text = "LCLのBooking依頼がありました。";
    const url =
      "https://hooks.slack.com/services/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";
    sendSlack(text, url);
    dispatch(push("/thanks"));
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

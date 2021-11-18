import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  VIEW_FOR_QUOTE_REQUESTS_FOR_CONTAINER_FOR_REGISTERED:
    "/api/v1/quote_requests/container/registered/view/",
  VIEW_FOR_QUOTE_REQUESTS_FOR_BOX_PALLET_FOR_REGISTERED:
    "/api/v1/quote_requests/box_pallet/registered/view/",
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
      ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_FOR_CONTAINER_FOR_REGISTERED
    );
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchViewForBoxPalletRequests = async (setItems) => {
  try {
    const response = await fetch(
      ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_FOR_BOX_PALLET_FOR_REGISTERED
    );
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

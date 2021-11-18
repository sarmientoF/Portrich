import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  VIEW_FOR_QUOTE_REQUESTS_FOR_CONTAINER:
    "/api/v1/quote_requests/container/view/",
  VIEW_FOR_QUOTE_REQUESTS_FOR_BOX_PALLET:
    "/api/v1/quote_requests/box_pallet/view/",
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

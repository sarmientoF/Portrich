import { fetch } from "../../../../common/services/connection";

const ENDPOINT = {
  VIEW_FOR_QUOTE_REQUESTS_OCEAN: "/api/v1/quote-requests/view/",
  VIEW_FOR_QUOTE_REQUESTS_TRUCKS: "/api/v1/quote-requests/trucks/view",
};

export const fetchViewForQuoteRequestsOcean = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_OCEAN);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
  }
};

import { fetch } from "../../../../common/services/connection";
import { push } from "connected-react-router";
import { getAccessToken } from "../../../../authorization";

const ENDPOINT = {
  VIEW_FOR_QUOTE_REQUESTS_OCEAN: "/api/v1/quote-requests/view/",
};

export const fetchViewForQuoteRequestsOcean = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_OCEAN);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
    await getAccessToken();
    await reFetchViewForQuoteRequestsOcean(setItems, dispatch);
  }
};
const reFetchViewForQuoteRequestsOcean = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_OCEAN);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
    console.log(e);
    dispatch(push(`/signin`));
  }
};

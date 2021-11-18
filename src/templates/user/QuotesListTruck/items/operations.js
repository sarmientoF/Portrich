import { fetch } from "../../../../common/services/connection";
import { push } from "connected-react-router";
import { getAccessToken } from "../../../../authorization";

const ENDPOINT = {
  VIEW_FOR_QUOTE_REQUESTS_TRUCKS: "/api/v1/quote-requests/trucks/view/",
};

export const fetchViewForQuoteRequestsTruck = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_TRUCKS);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
    await getAccessToken();
    await reFetchViewForQuoteRequestsTruck(setItems, dispatch);
  }
};
const reFetchViewForQuoteRequestsTruck = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.VIEW_FOR_QUOTE_REQUESTS_TRUCKS);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
    console.log(e);
    dispatch(push(`/signin`));
  }
};

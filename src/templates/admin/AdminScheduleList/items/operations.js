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

function createData(
  id,
  carrier,
  ship_name,
  voyage_no,
  ship_id,
  pol,
  transit,
  pod,
  etd,
  eta,
  cut,
  open
) {
  return {
    id,
    carrier,
    ship_name,
    voyage_no,
    ship_id,
    pol,
    transit,
    pod,
    etd,
    eta,
    cut,
    open,
  };
}

export const scheduleItem = [
  createData(
    1,
    "ONE",
    "SDFBVH",
    "123456",
    "111111",
    "Japan, Kobe",
    "Pakistan, Karachi",
    "Pakistan, KarachiKarachiKarachi",
    "2021/11/11",
    "2021/11/11",
    "2021/11/11",
    "2021/11/11"
  ),
  createData(
    2,
    "ONE",
    "SDFBVH",
    "123456",
    "2222222",
    "Japan, Kobe",
    "Pakistan, Karachi",
    "Pakistan, Karachi",
    "2021/22/22",
    "2021/22/22",
    "2021/22/22",
    "2021/22/22"
  ),
  createData(
    3,
    "ONE",
    "SDFBVH",
    "123456",
    "33333",
    "Japan, Kobe",
    "Pakistan, Karachi",
    "Pakistan, Karachi",
    "2021/33/33",
    "2021/33/33",
    "2021/33/33",
    "2021/33/33"
  ),
];

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

function fclData(
  carrier,
  fw,
  import_export,
  incoterms,
  pol,
  pod,
  cargo_name,
  size,
  ft,
  price
) {
  return {
    carrier,
    fw,
    import_export,
    incoterms,
    pol,
    pod,
    cargo_name,
    size,
    ft,
    price,
  };
}

export const fclItem = [
  fclData(
    "ONE",
    "ESFHN",
    "1111",
    "FOD",
    "Pakistan, karachi",
    "Pakistan, Karachi",
    "Used Car",
    "20 Dry Standard",
    "Combine:14 days",
    "2020＄"
  ),
  fclData(
    "ONE",
    "ESFHN",
    "2222",
    "FOD",
    "Pakistan, karachi",
    "Pakistan, Karachi",
    "Used Car",
    "20 Dry Standard",
    "DEM:14 days/ DET...",
    "2020＄"
  ),
];

function lclData(
  carrier,
  fw,
  import_export,
  incoterms,
  pol,
  pod,
  cargo_name,
  size,
  ft,
  price
) {
  return {
    carrier,
    fw,
    import_export,
    incoterms,
    pol,
    pod,
    cargo_name,
    size,
    ft,
    price,
  };
}

export const lclItem = [
  fclData(
    "ONE",
    "ESFHN",
    "1111",
    "FOD",
    "Pakistan, karachi",
    "Pakistan, Karachi",
    "Used Car",
    "20 Dry Standard",
    "Combine:14 days",
    "2020＄"
  ),
  fclData(
    "ONE",
    "ESFHN",
    "2222",
    "FOD",
    "Pakistan, karachi",
    "Pakistan, Karachi",
    "Used Car",
    "20 Dry Standard",
    "DEM:14 days/ DET...",
    "2020＄"
  ),
];

function truckData(
  carrier,
  import_export,
  fcl_lcl,
  pol,
  pod,
  time,
  loading,
  currency,
  price
) {
  return {
    carrier,
    import_export,
    fcl_lcl,
    pol,
    pod,
    time,
    loading,
    currency,
    price,
  };
}

export const truckItem = [
  truckData(
    "ONE",
    "ESFHN",
    "1111",
    "Pakistan, karachi",
    "Pakistan, Karachi",
    "1:30",
    "有",
    "20 Dry Standard",
    "2020＄"
  ),
  truckData(
    "ONE",
    "ESFHN",
    "2222",
    "Pakistan, karachi",
    "Pakistan, Karachi",
    "1:30",
    "無",
    "20 Dry Standard",
    "2020＄"
  ),
];

function dragekData(
  carrier,
  import_export,
  currency,
  customs_fees,
  customs_handling_fee
) {
  return {
    carrier,
    import_export,
    currency,
    customs_fees,
    customs_handling_fee,
  };
}
export const drageItem = [
  dragekData(
    "通関会社名",
    "輸入or輸出",
    "通貨単位",
    "通関料",
    "通関取り扱い料"
  ),
  dragekData("ONE", "ESFHN", "1111", "通関料", "通関取り扱い料"),
];

function customsData(
  carrier,
  import_export,
  currency,
  customs_fees,
  customs_handling_fee
) {
  return {
    carrier,
    import_export,
    currency,
    customs_fees,
    customs_handling_fee,
  };
}
export const customsItem = [
  customsData(
    "通関会社名",
    "輸入or輸出",
    "通貨単位",
    "通関料",
    "通関取り扱い料"
  ),
  customsData("ONE", "ESFHN", "1111", "通関料", "通関取り扱い料"),
];

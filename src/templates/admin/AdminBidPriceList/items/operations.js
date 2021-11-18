// import { fetch } from "../../../../common/services/connection";
// import { push } from "connected-react-router";
// import { getAccessToken } from "../../../../authorization";


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
  price,
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
    price
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
  price,
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
    price
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
  price,
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
    price
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
    customs_handling_fee
  };
}
export const drageItem = [
  dragekData(
    "通関会社名",
    "輸入or輸出",
    "通貨単位",
    "通関料",
    "通関取り扱い料",
  ),
  dragekData(
    "ONE",
    "ESFHN",
    "1111",
    "通関料",
    "通関取り扱い料",
  ),
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
    customs_handling_fee
  };
}
export const customsItem = [
  customsData(
    "通関会社名",
    "輸入or輸出",
    "通貨単位",
    "通関料",
    "通関取り扱い料",
  ),
  customsData(
    "ONE",
    "ESFHN",
    "1111",
    "通関料",
    "通関取り扱い料",
  ),
];
import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  VIEW_QUOTES_OF_CONTAINERS: "/api/v1/quotations/containers/view/",
  VIEW_QUOTES_OF_BOXES_OR_PALLETS: "/api/v1/quotations/boxes_or_pallets/view/",
  MASTERDATA_FIXED_PRICES: "/api/v1/masterdata/fixed_prices/",
};
const fetch = (endpoint, queryString) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}${queryString}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchQuoteForDaterMineBoxPallet = async (
  queryString,
  setItems
) => {
  try {
    const response = await fetch(
      ENDPOINT.VIEW_QUOTES_OF_BOXES_OR_PALLETS,
      queryString
    );
    setItems(response.data[0]);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchQuoteForDaterMineContainer = async (
  queryString,
  setItems
) => {
  try {
    const response = await fetch(
      ENDPOINT.VIEW_QUOTES_OF_CONTAINERS,
      queryString
    );
    setItems(response.data[0]);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const stepContainerEnterDetail = async (state, setActiveStep) => {
  const {
    quantity,
    customs,
    drayage,
    daikan,
    axes,
    workplace,
    workplace_address,
    pickup_datetime,
    delivery_datetime,
  } = state;

  if (quantity === undefined || quantity === "") {
    window.confirm("数量を入力してください。");
    return;
  }
  if (quantity <= 0) {
    window.confirm("数量を1以上で入力してください。");
    return;
  }
  if (customs === undefined) {
    window.confirm("通関の有無を選択してください。");
    return;
  }
  if (drayage === undefined) {
    window.confirm("ドレージ配送の有無を選択してください。");
    return;
  }
  if (drayage === "依頼する") {
    if (daikan === undefined) {
      window.confirm("台貫の有無を選択してください。");
      return;
    }
    if (axes === undefined) {
      window.confirm("軸数の有無を選択してください。");
      return;
    }
    if (workplace === undefined || workplace === "") {
      window.confirm("作業場所を入力してください。");
      return;
    }
    if (workplace_address === undefined || workplace_address === "") {
      window.confirm("作業場所住所を入力してください。");
      return;
    }
    if (pickup_datetime === undefined || pickup_datetime === "") {
      window.confirm("配送希望日時を入力してください。");
      return;
    }
    if (delivery_datetime === undefined || delivery_datetime === "") {
      window.confirm("引き取り希望日時を入力してください。");
      return;
    }
  }
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

export const stepBoxPalletEnterDetail = async (state, setActiveStep) => {
  const {
    quantity,
    radios,
    volumeM3,
    sizeL,
    sizeW,
    sizeH,
    weight,
    pallettype,
    customs,
    truck,
    truckloading,
    workplace,
    workplace_address,
    pickup_datetime,
    delivery_datetime,
  } = state;
  if (quantity === undefined || quantity === "") {
    window.confirm("数量を入力してください。");
    return;
  }
  if (quantity <= 0) {
    window.confirm("数量を1以上で入力してください。");
    return;
  }
  if (radios === undefined) {
    window.confirm("サイズの形式を選択してください。");
    return;
  }
  if (radios === "1") {
    if (volumeM3 === undefined || volumeM3 === "") {
      window.confirm("積載容量を入力してください。");
      return;
    }
    if (volumeM3 <= 0) {
      window.confirm("積載容量を1以上で入力してください。");
      return;
    }
  }
  if (radios === "2" || radios === "3") {
    if (sizeL === undefined || sizeL === "") {
      window.confirm("サイズLを入力してください。");
      return;
    }
    if (sizeL <= 0) {
      window.confirm("サイズLを1以上で入力してください。");
      return;
    }
    if (sizeW === undefined || sizeW === "") {
      window.confirm("サイズWを入力してください。");
      return;
    }
    if (sizeW <= 0) {
      window.confirm("サイズWを1以上で入力してください。");
      return;
    }
    if (sizeH === undefined || sizeH === "") {
      window.confirm("サイズHを入力してください。");
      return;
    }
    if (sizeH <= 0) {
      window.confirm("サイズHを1以上で入力してください。");
      return;
    }
  }
  if (weight === undefined || weight === "") {
    window.confirm("重量を入力してください。");
    return;
  }
  if (weight <= 0) {
    window.confirm("重量を1以上で入力してください。");
    return;
  }
  if (radios === "1" || radios === "3") {
    if (pallettype === undefined || pallettype === "") {
      window.confirm("パレットタイプを選択してください。");
      return;
    }
  }
  if (customs === undefined) {
    window.confirm("通関の有無を選択してください。");
    return;
  }
  if (truck === undefined) {
    window.confirm("トラック配送の有無を選択してください。");
    return;
  }
  if (truck === "依頼する") {
    if (truckloading === undefined) {
      window.confirm("積載依頼の有無を選択してください。");
      return;
    }
    if (workplace === undefined || workplace === "") {
      window.confirm("作業場所を入力してください。");
      return;
    }
    if (workplace_address === undefined || workplace_address === "") {
      window.confirm("作業場所住所を入力してください。");
      return;
    }
    if (pickup_datetime === undefined || pickup_datetime === "") {
      window.confirm("配送希望日時を入力してください。");
      return;
    }
    if (delivery_datetime === undefined || delivery_datetime === "") {
      window.confirm("引き取り希望日時を入力してください。");
      return;
    }
  }
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

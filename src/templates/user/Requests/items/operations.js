import axios from "axios";
import { push } from "connected-react-router";
import { AppConfig } from "../../../../common/config";
import { sendSlack } from "../../../../common/sendslack";

const ENDPOINT = {
  PORT: "/api/v1/masterdata/ship_ports/",
  CONTAINER_TYPE: "/api/v1/masterdata/container_types/",
  CARGO_NAME: "/api/v1/masterdata/cargo_names/",
  QUOTE_REQUESTS_FOR_CONTAINER: "/api/v1/quote_requests/container/",
  QUOTE_REQUESTS_FOR_BOX_PALLET: "/api/v1/quote_requests/box_pallet/",
};

const fetch = (endpoint) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchPortList = async (setPortList) => {
  try {
    const response = await fetch(ENDPOINT.PORT);
    const list = response.data.map((val) => {
      return { title: val.name, id: val.id };
    });
    setPortList(list);
  } catch (e) {
    setPortList([]);
  }
};

export const fetchContainerTypeList = async (setContainerTypeList) => {
  try {
    const response = await fetch(ENDPOINT.CONTAINER_TYPE);
    const list = response.data.map((val) => {
      return { title: val.name, id: val.id };
    });
    setContainerTypeList(list);
  } catch (e) {
    setContainerTypeList([]);
  }
};

export const fetchCargoNameList = async (setCargoNameList) => {
  try {
    const response = await fetch(ENDPOINT.CARGO_NAME);
    const list = response.data.map((val) => {
      return { title: val.name, id: val.id };
    });
    setCargoNameList(list);
  } catch (e) {
    setCargoNameList([]);
  }
};

export const registerContainerRequest = async (
  shipping_type,
  selectedPortList,
  selectedContainerTypeList,
  selectedCargo,
  dispatch
) => {
  if (
    selectedPortList.some(
      (value) => !value.departure_port || !value.arrival_port
    )
  ) {
    window.confirm("入力されていない項目があります");
    return;
  }
  if (Object.values(selectedContainerTypeList).every((checked) => !checked)) {
    window.confirm("入力されていない項目があります");
    return;
  }
  if (!selectedCargo) {
    window.confirm("入力されていない項目があります");
    return;
  }

  try {
    const paramList = createParamContainerList(
      shipping_type,
      selectedPortList,
      selectedContainerTypeList,
      selectedCargo
    );

    const response = await axios.post(
      `${AppConfig.api.url}${ENDPOINT.QUOTE_REQUESTS_FOR_CONTAINER}`,
      paramList,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const text = "FCLの見積依頼がありました。";
    const url =
      "https://hooks.slack.com/services/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";
    sendSlack(text, url);
    dispatch(push("/quotes"));
  } catch (e) {
    console.log(e.response.data);
    window.confirm("問題が発生しました。");
  }
};

export const registerBoxPalletRequest = async (
  shipping_type,
  selectedPortList,
  selectedCargo,
  dispatch
) => {
  if (
    selectedPortList.some(
      (value) => !value.departure_port || !value.arrival_port
    )
  ) {
    window.confirm("空の項目があります。");
    return;
  }
  if (!selectedCargo) {
    window.confirm("空の項目があります。");
    return;
  }
  try {
    const paramList = createParamBoxPalletList(
      shipping_type,
      selectedPortList,
      selectedCargo
    );

    const response = await axios.post(
      `${AppConfig.api.url}${ENDPOINT.QUOTE_REQUESTS_FOR_BOX_PALLET}`,
      paramList,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const text = "LCLの見積依頼がありました。";
    const url =
      "https://hooks.slack.com/services/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";
    sendSlack(text, url);
    dispatch(push("/quotes"));
  } catch (e) {
    console.log(e.response.data);
    window.confirm("問題が発生しました。");
  }
};

const createParamContainerList = (
  shipping_type,
  selectedPortList,
  selectedContainerTypeList,
  selectedCargo
) => {
  const checkedContainerTypeList = [];
  for (const [key, value] of Object.entries(selectedContainerTypeList)) {
    if (value) {
      checkedContainerTypeList.push(parseInt(key));
    }
  }
  const paramList = [];
  for (const port of selectedPortList) {
    for (const type of checkedContainerTypeList) {
      paramList.push({
        departure_port: port.departure_port.id,
        arrival_port: port.arrival_port.id,
        shipping_type,
        container_type: type,
        cargo_name: selectedCargo.id,
      });
    }
  }
  return paramList;
};

const createParamBoxPalletList = (
  shipping_type,
  selectedPortList,
  selectedCargo
) => {
  const paramList = [];
  for (const port of selectedPortList) {
    paramList.push({
      departure_port: port.departure_port.id,
      arrival_port: port.arrival_port.id,
      shipping_type,
      cargo_name: selectedCargo.id,
    });
  }
  return paramList;
};

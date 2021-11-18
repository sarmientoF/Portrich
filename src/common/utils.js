import axios from "axios";
import { AppConfig } from "./config";

export const convertToCargoStatusId = (
  id,
  created_at,
  isExport,
  ShippingType
) => {
  if (id === undefined) {
    return;
  }
  if (typeof id !== "number") {
    throw Error(`expected id is number but was ${typeof id}`);
  }
  const date = new Date(created_at);
  if (isNaN(date.getFullYear())) {
    throw Error(`Invalid Date: ${created_at}`);
  }
  return `PR${ShippingType}${isExport}${date.getFullYear()}-${id
    .toString()
    .padStart(5, [0])}`;
};

export const isExport = (departure_port_name) => {
  if (departure_port_name === undefined) {
    return;
  }
  if (departure_port_name.includes("Japan")) {
    return `E`;
  } else {
    return `I`;
  }
};
export const whichShippingType = (shipping_type_id) => {
  if (shipping_type_id === "1" || shipping_type_id === 1) {
    return `L`;
  }
  if (shipping_type_id === "2" || shipping_type_id === 2) {
    return `F`;
  }
};

export const convertToBookingIdOfContainer = (id, created_at, isExport) => {
  if (typeof id !== "number") {
    throw Error(`expected id is number but was ${typeof id}`);
  }
  const date = new Date(created_at);
  if (isNaN(date.getFullYear())) {
    throw Error(`Invalid Date: ${created_at}`);
  }
  return `PRF${isExport}${date.getFullYear()}-${id
    .toString()
    .padStart(5, [0])}`;
};

export const convertToBookingIdOfBoxPallet = (id, created_at, isExport) => {
  if (typeof id !== "number") {
    throw Error(`expected id is number but was ${typeof id}`);
  }
  const date = new Date(created_at);
  if (isNaN(date.getFullYear())) {
    throw Error(`Invalid Date: ${created_at}`);
  }
  return `PRL${isExport}${date.getFullYear()}-${id
    .toString()
    .padStart(5, [0])}`;
};

export const getSize = (cubic_meter, size_l, size_w, size_h) => {
  const cubicMeter = parseFloat(cubic_meter);
  if (!isNaN(cubicMeter) && cubicMeter !== 0) {
    return `${cubic_meter}㎥`;
  }
  return `(L)${size_l}m, (W)${size_w}m, (H)${size_h}m`;
};

export const parseQueryStrings = (queryString) => {
  return [...new URLSearchParams(queryString).entries()].reduce(
    (acc, cur) => ({ ...acc, [cur[0]]: cur[1] }),
    {}
  );
};

export const get = (endpoint, params = undefined) => {
  return axios.get(`${AppConfig.api.url}${endpoint}${params || ""}`, {
    withCredentials: true,
  });
};

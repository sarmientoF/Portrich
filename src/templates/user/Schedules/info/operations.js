import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  VIEW_QUOTES_OF_CONTAINERS: "/api/v1/quotations/containers/view/",
  VIEW_QUOTES_OF_BOXES_OR_PALLETS: "/api/v1/quotations/boxes_or_pallets/view/",
};

const fetch = (endpoint, queryString) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}${queryString}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchQuoteForBoxPallet = async (queryString, setItems) => {
  try {
    const response = await fetch(
      ENDPOINT.VIEW_QUOTES_OF_BOXES_OR_PALLETS,
      queryString
    );
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchQuoteForContainer = async (queryString, setItems) => {
  try {
    const response = await fetch(
      ENDPOINT.VIEW_QUOTES_OF_CONTAINERS,
      queryString
    );
    setItems(response.data);
    console.log(response);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

const parseParams = (queryString) => {
  return [...new URLSearchParams(queryString).entries()].reduce(
    (obj, e) => ({ ...obj, [e[0]]: e[1] }),
    {}
  );
};

import axios from "axios";
import { AppConfig } from "../config";

export const fetch = (endpoint) => {
  const access_token = localStorage.getItem("access_token");
  const response = axios.get(`${AppConfig.api.url}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response;
};

export const post = (endpoint, params) => {
  const access_token = localStorage.getItem("access_token");
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response;
};

export const patch = (endpoint, params) => {
  const access_token = localStorage.getItem("access_token");
  const response = axios.patch(`${AppConfig.api.url}${endpoint}`, params, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response;
};

export const deletion = (endpoint) => {
  const access_token = localStorage.getItem("access_token");
  axios.delete(`${AppConfig.api.url}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

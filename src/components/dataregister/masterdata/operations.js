import axios from "axios";
import { AppConfig } from "../../../common/config";

const ENDPOINT = {
  SHIPPING_COMPANIES: "/api/v1/masterdata/shipping_companies/",
  VIEW_FOR_USER_COMPANIES: "/api/v1/accounts/companies/",
  SHIP_PORTS: "/api/v1/masterdata/ship_ports/",
  CONTAINER_TYPES: "/api/v1/masterdata/container_types/",
  CARGO: "/api/v1/masterdata/cargo_names/",
};

const fetch = (endpoint, queryString = "") => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}${queryString}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchViewUserCompanies = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.VIEW_FOR_USER_COMPANIES);
    setItems(
      response.data.map((value) => {
        return {
          id: value.id,
          value: value.company_name,
        };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
  }
};

export const fetchContainerTypeList = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.CONTAINER_TYPES);
    setItems(
      response.data.map((value) => {
        return {
          id: value.id,
          value: value.name,
        };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
  }
};

export const fetchCargoList = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.CARGO);
    setItems(
      response.data.map((value) => {
        return {
          id: value.id,
          value: value.name,
        };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
  }
};

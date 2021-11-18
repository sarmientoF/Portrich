import axios from "axios";
import { AppConfig } from "../config";

const ENDPOINT = {
  SHIPPING_COMPANIES: "/api/v1/masterdata/shipping_companies/",
  USER_COMPANIES: "/api/v1/accounts/companies/",
  SHIP_PORTS: "/api/v1/masterdata/ship_ports/",
  CONTAINER_TYPES: "/api/v1/masterdata/container_types/",
  CARGO_NAMES: "/api/v1/masterdata/cargo_names/",
  PALLET_TYPES: "/api/v1/masterdata/pallet_types/",
  FIXED_PRICE: "/api/v1/masterdata/fixed_prices/",
};

const fetch = (endpoint, queryString = "") => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}${queryString}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchShippingCompanies = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.SHIPPING_COMPANIES);
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

export const fetchUserCompanies = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.USER_COMPANIES);
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

export const fetchShipPortList = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.SHIP_PORTS);
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

export const fetchContainerTypes = async (setItems) => {
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

export const fetchCargoNames = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.CARGO_NAMES);
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

export const fetchPalletTypeList = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.PALLET_TYPES);
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

export const fetchFixedPriceForDaterMine = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.FIXED_PRICE);
    setItems(
      response.data.map((value) => {
        return {
          id: value.id,
          value: value.name,
          price: value.price,
        };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

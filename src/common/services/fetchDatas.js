import { fetch } from "./connection";
import { push } from "connected-react-router";
import { getAccessToken } from "../../authorization";

const ENDPOINT = {
  PORTS: "/api/v1/masterdata/ports/",
  CONTAINER_TYPES: "/api/v1/masterdata/container-types/",
  CARGOS: "/api/v1/masterdata/cargoes/",
  SHIPPING_COMPANIES: "/api/v1/masterdata//",
};

export const fetchShipPortList = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.PORTS);
    setItems(
      response.data.map((val) => {
        return { ports_id: val.ports_id, name: val.name };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
    await getAccessToken();
    await reFetchShipPortList(setItems, dispatch);
  }
};
const reFetchShipPortList = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.PORTS);
    setItems(
      response.data.map((val) => {
        return { ports_id: val.ports_id, name: val.name };
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(push(`/signin`));
  }
};

export const fetchContainerTypeList = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.CONTAINER_TYPES);
    setItems(
      response.data.map((val) => {
        return { container_types_id: val.container_types_id, name: val.name };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
    await getAccessToken();
    await reFetchContainerTypeList(setItems, dispatch);
  }
};
const reFetchContainerTypeList = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.CONTAINER_TYPES);
    setItems(
      response.data.map((val) => {
        return { container_types_id: val.container_types_id, name: val.name };
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(push(`/signin`));
  }
};

export const fetchCargoNameList = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.CARGOS);
    setItems(
      response.data.map((val) => {
        return { cargoes_id: val.cargoes_id, name: val.name };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
    await getAccessToken();
    await reFetchCargoNameList(setItems, dispatch);
  }
};
const reFetchCargoNameList = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.CARGOS);
    setItems(
      response.data.map((val) => {
        return { cargoes_id: val.cargoes_id, name: val.name };
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(push(`/signin`));
  }
};

export const fetchShippingCompanies = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.SHIPPING_COMPANIES);
    setItems(
      response.data.map((val) => {
        return { cargoes_id: val.cargoes_id, name: val.name };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
    setItems([]);
    await getAccessToken();
    await reFetchShippingCompanies(setItems, dispatch);
  }
};
const reFetchShippingCompanies = async (setItems, dispatch) => {
  try {
    const response = await fetch(ENDPOINT.SHIPPING_COMPANIES);
    setItems(
      response.data.map((val) => {
        return { cargoes_id: val.cargoes_id, name: val.name };
      })
    );
  } catch (e) {
    console.log(e);
    dispatch(push(`/signin`));
  }
};

import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  PACKING_TYPES: "/api/v1/masterdata/packing_types/",
  CARGO_STATUSES_SHIPPING_INVOICE: "/api/v1/cargo_statuses/shipping_invoices/",
};

const fetch = (endpoint) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchPackingTypes = async (setPortList) => {
  try {
    const response = await fetch(ENDPOINT.PACKING_TYPES);
    const list = response.data.map((val) => {
      return { title: val.name, id: val.id };
    });
    setPortList(list);
  } catch (e) {
    setPortList([]);
  }
};

export const fetchOriginalInvoiceItem = async (setTextStates, cargoStatus) => {
  try {
    const id = cargoStatus.id;
    const result = await axios.get(
      `${AppConfig.api.url}${ENDPOINT.CARGO_STATUSES_SHIPPING_INVOICE}?cargo_status=${id}`,
      {
        withCredentials: true,
      }
    );
    const packing_type = {};
    if (result.data[0].packing_type === 1) {
      packing_type["item"] = "PKGS";
    }
    if (result.data[0].packing_type === 2) {
      packing_type["item"] = "PCS";
    }
    if (result.data[0].packing_type === 3) {
      packing_type["item"] = "CARTONS";
    }
    if (result.data[0].packing_type === 4) {
      packing_type["item"] = "BOXES";
    }
    if (result.data[0].packing_type === 5) {
      packing_type["item"] = "BALES";
    }

    const data = {
      id: result.data[0].id,
      cargo_status: result.data[0].cargo_status,
      packing_type: packing_type.item,
      quantity: result.data[0].quantity,
      shipper_name: result.data[0].shipper_name,
      consignee_name: result.data[0].consignee_name,
      notify_party: result.data[0].notify_party,
      cbm: result.data[0].cbm,
      kgs: result.data[0].kgs,
      item_name: result.data[0].item_name,
    };
    setTextStates(data);
  } catch (e) {
    console.log(e.response && e.response.data[0]);
  }
};

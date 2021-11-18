import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  CARGO_STATUSES: "/api/v1/cargo_statuses/",
  CARGO_STATUSES_VIEW: "/api/v1/cargo_statuses/view/",
};

export const fetchBillingItems = async (setBillingItems, id) => {
  try {
    const response = await axios.get(
      `${AppConfig.api.url}${ENDPOINT.CARGO_STATUSES_VIEW}${id}/`,
      {
        withCredentials: true,
      }
    );
    setBillingItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchOriginalBillingItem = async (setCargoStatus, cargoStatus) => {
  try {
    const id = cargoStatus.id;
    const result = await axios.get(
      `${AppConfig.api.url}${ENDPOINT.CARGO_STATUSES}${id}/`,
      {
        withCredentials: true,
      }
    );
    const data = {
      payment_deadline: result.data.payment_deadline,
      is_paied: result.data.is_paied,
    };
    setCargoStatus(data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

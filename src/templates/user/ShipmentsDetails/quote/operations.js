import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  CARGO_STATUSES_ADDITIONAL_COSTS: "/api/v1/cargo_statuses/additional_costs/",
};

export const fetchAdditionalCost = async (setAdditionalCost, id) => {
  try {
    const response = await axios.get(
      `${AppConfig.api.url}${ENDPOINT.CARGO_STATUSES_ADDITIONAL_COSTS}?cargo_status=${id}`,
      {
        withCredentials: true,
      }
    );
    setAdditionalCost(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

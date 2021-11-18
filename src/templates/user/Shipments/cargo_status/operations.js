import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  CARGO_STATUSES: "/api/v1/cargo_statuses/view/",
};

export const fetchCargoStatuses = async (setList) => {
  try {
    const response = await axios.get(
      `${AppConfig.api.url}${ENDPOINT.CARGO_STATUSES}`,
      {
        withCredentials: true,
      }
    );
    setList(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

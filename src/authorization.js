import axios from "axios";
import { AppConfig } from "./common/config";

const ENDPOINT = {
  LOGIN_REFRESH: "/api/v1/login/refresh/",
};

export const getAccessToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  try {
    const response = await axios.post(
      `${AppConfig.api.url}${ENDPOINT.LOGIN_REFRESH}`,
      { refresh: refresh_token },
      {
        withCredentials: true,
      }
    );
    localStorage.setItem("access_token", response.data.access);
  } catch (e) {
    console.log(e);
  }
};

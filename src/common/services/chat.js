import axios from "axios";
import { AppConfig } from "../config";

const ENDPOINTS = {
  VIEW: "/api/v1/cargo_statuses/chat/view/",
};

export const fetchChatMessages = async (cargo_status_id, setMessageList) => {
  if (!cargo_status_id) {
    return;
  }
  try {
    const result = await axios.get(
      `${AppConfig.api.url}${ENDPOINTS.VIEW}?cargo_status=${cargo_status_id}`,
      {
        withCredentials: true,
      }
    );
    setMessageList(result.data);
  } catch (e) {
    console.error(e.response && e.response.data);
    setMessageList([]);
  }
};

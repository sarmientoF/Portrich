import axios from "axios";
import { AppConfig } from "../../common/config";
import { fetchChatMessages } from "../../common/services/chat";

const ENDPOINTS = {
  CHAT: "/api/v1/cargo_statuses/chat/",
};

export const sendAndFetch = async (
  message,
  setMessageList,
  cargo_status_id
) => {
  if (message === null || message === undefined || message === "") {
    return;
  }
  if (!cargo_status_id) {
    return;
  }
  try {
    const result = await axios.post(
      `${AppConfig.api.url}${ENDPOINTS.CHAT}`,
      {
        contents: message,
        cargo_status: cargo_status_id,
      },
      {
        withCredentials: true,
      }
    );
  } catch (e) {
    console.error(e.response && e.response.data);
  }
  fetchChatMessages(cargo_status_id, setMessageList);
};

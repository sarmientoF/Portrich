import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  UPLOAD_IMAGES: "/api/v1/cargo_statuses/images/",
};

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

const get = (endpoint, params) => {
  return axios.get(`${AppConfig.api.url}${endpoint}`, {
    withCredentials: true,
  });
};

export const fetchImages = async (cargo_status_id, setList) => {
  try {
    const response = await get(
      `${ENDPOINT.UPLOAD_IMAGES}?cargo_status=${cargo_status_id}`
    );
    setList(
      response.data.map((row) => {
        return {
          id: row.id,
          title: row.name,
          contents: row.contents,
          created_by: row.created_by,
          created_at:
            row.created_at && new Date(row.created_at).toLocaleDateString(),
        };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const uploadImage = (cargo_status_id, file) => {
  const formData = new FormData();
  formData.append("contents", file);
  formData.append("name", file.name);
  formData.append("cargo_status", cargo_status_id);
  try {
    axios.post(`${AppConfig.api.url}${ENDPOINT.UPLOAD_IMAGES}`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

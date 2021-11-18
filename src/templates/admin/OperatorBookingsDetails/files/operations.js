import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  UPLOAD_FILES_SI_BOXES_OR_PALLETS: "/api/v1/bookings/si/boxes_or_pallets/",
  UPLOAD_FILES_SI_CONTAINERS: "/api/v1/bookings/si/containers/",
};

const uploadFileAndFetchStatus = async (endpoint, param, si_id, isUploaded) => {
  try {
    if (isUploaded) {
      await axios.put(`${AppConfig.api.url}${endpoint}${si_id}/`, param, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      await axios.post(`${AppConfig.api.url}${endpoint}`, param, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const uploadSiForBoxPallet = async (booking_id, file, cargoStatus) => {
  const formData = new FormData();
  formData.append("contents", file);
  formData.append("name", file.name);
  formData.append("users_company", cargoStatus.users_company);
  formData.append("booking", booking_id);
  await uploadFileAndFetchStatus(
    ENDPOINT.UPLOAD_FILES_SI_BOXES_OR_PALLETS,
    formData,
    cargoStatus.si_id,
    cargoStatus.is_exists_shipping_instruction
  );
};

export const uploadSiForContainer = async (booking_id, file, cargoStatus) => {
  const formData = new FormData();
  formData.append("contents", file);
  formData.append("name", file.name);
  formData.append("users_company", cargoStatus.users_company);
  formData.append("booking", booking_id);
  await uploadFileAndFetchStatus(
    ENDPOINT.UPLOAD_FILES_SI_CONTAINERS,
    formData,
    cargoStatus.si_id,
    cargoStatus.is_exists_shipping_instruction
  );
};

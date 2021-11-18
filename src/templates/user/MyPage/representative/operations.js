import axios from "axios";
import { AppConfig } from "../../../../common/config";

const URL = "/api/v1/accounts/";

export const fetchRepUser = async (setRepresentativeUser, id) => {
  try {
    const result = await axios.get(`${AppConfig.api.url}${URL}${id}/`, {
      withCredentials: true,
    });
    const data = {
      name: result.data.name,
      name_pronunciation: result.data.name_pronunciation,
      email: result.data.email,
      phone_number: result.data.phone_number,
      company_name: result.data.company_name,
      postal_code: result.data.postal_code,
      street_address: result.data.street_address,
      isRepresentative: result.data.is_representative,
    };
    setRepresentativeUser(data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const updateRepUser = async (representativeUser, id) => {
  const params = {};
  for (const [key, value] of Object.entries(representativeUser)) {
    if (value !== null && value !== "") {
      params[key] = value;
    }
  }
  try {
    const result = await axios.patch(
      `${AppConfig.api.url}${URL}${id}/`,
      params,
      {
        withCredentials: true,
      }
    );
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

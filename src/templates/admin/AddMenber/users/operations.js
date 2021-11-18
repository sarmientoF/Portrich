import axios from "axios";
import { push } from "connected-react-router";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = "/api/v1/accounts/";

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const createUser = async (userInfo, dispatch) => {
  try {
    const params = {
      company_name: userInfo.company_name,
      postal_code: userInfo.postal_code,
      street_address: userInfo.street_address,
      name: userInfo.name,
      name_pronunciation: userInfo.name_pronunciation,
      email: userInfo.email,
      password: userInfo.password,
      phone_number: userInfo.phone_number,
      department: userInfo.department,
    };
    await post(`${AppConfig.api.url}${ENDPOINT}`, params);
    dispatch(push("/mypage"));
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

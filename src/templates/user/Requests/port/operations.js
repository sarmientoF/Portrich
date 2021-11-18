import axios from "axios";
import { storePort } from "./actions";
import { AppConfig } from "../../../../common/config";

export const fetchPort = async (dispatch) => {
  try {
    const result = await axios.get(
      `${AppConfig.api.url}/api/v1/masterdata/ship_ports/`,
      {
        withCredentials: true,
      }
    );
    // const values = result.data.map((val) => {
    //   return { title: val.name, value: val };
    // });
    // dispatch(storePort(values));
    dispatch(storePort(result.data.map((val) => val.name)));
  } catch (e) {
    // console.log(e.response.status);
    dispatch(storePort([]));
  }
};

import axios from "axios";
import { storeContainerType } from "./actions";
import { AppConfig } from "../../../../common/config";

export const fetchContainerTypes = async (dispatch) => {
  try {
    const result = await axios.get(
      `${AppConfig.api.url}/api/v1/masterdata/container_types/`,
      {
        withCredentials: true,
      }
    );
    const values = result.data.map((value) => {
      return { label: value.name, value: value.name };
    });
    dispatch(storeContainerType(values));
  } catch (e) {
    dispatch(storeContainerType([]));
  }
};

import axios from "axios";
import { storeCargo } from "./actions";
import { AppConfig } from "../../../../common/config";

export const fetchCargo = async (dispatch) => {
  try {
    const result = await axios.get(
      `${AppConfig.api.url}/api/v1/masterdata/cargo_names/`,
      {
        withCredentials: true,
      }
    );
    // const values = result.data.map((value) => {
    //   return { title: value.name, value: value.name };
    // });
    dispatch(storeCargo(result.data.map((val) => val.name)));
  } catch (e) {
    dispatch(storeCargo([]));
  }
};

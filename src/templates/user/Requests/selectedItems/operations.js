import axios from "axios";
import { applyPort, applyContainerType, applyCargo } from "./actions";
import { AppConfig } from "../../../../common/config";

export const selectDeparturePort = (dispatch, currentState, index, value) => {
  const currentPorts = currentState.ports;
  const arrival_port =
    (currentPorts && currentPorts[index] && currentPorts[index].arrival_port) ||
    "";
  const newport = {
    departure_port: value,
    arrival_port,
  };
  if (!currentPorts[index]) {
    const newports = [...currentPorts, newport];
    dispatch(applyPort(newports));
    return;
  }
  const newports = [...currentPorts];
  newports[index] = newport;
  dispatch(applyPort(newports));
};

export const selectArrivalPort = (dispatch, currentState, index, value) => {
  const currentPorts = currentState.ports;
  const departure_port =
    (currentPorts &&
      currentPorts[index] &&
      currentPorts[index].departure_port) ||
    "";
  const newport = {
    departure_port,
    arrival_port: value,
  };
  if (!currentPorts[index]) {
    const newports = [...currentPorts, newport];
    dispatch(applyPort(newports));
    return;
  }
  const newports = [...currentState.ports];
  newports[index] = newport;
  dispatch(applyPort(newports));
};

export const addPortInput = (dispatch, currentState, index) => {
  const currentPorts = currentState.ports;
  const newport = {
    departure_port: "",
    arrival_port: "",
  };
  const newindex = index + 1;
  if (!currentPorts[newindex]) {
    const newports = [...currentPorts, newport];
    dispatch(applyPort(newports));
    return;
  }
  const newports = [...currentState.ports];
  newports[newindex] = newport;
  dispatch(applyPort(newports));
};

export const selectContainerType = (dispatch, currentState, key, value) => {
  const newcontainertype = {
    ...currentState.container_types,
    [key]: value,
  };
  dispatch(applyContainerType(newcontainertype));
};

export const selectCargo = (dispatch, currentState, index, value) => {
  if (currentState.cargo.length === index) {
    const newcargo = [...currentState.cargo, value];
    dispatch(applyCargo(newcargo));
  } else {
    const newcargo = [...currentState.cargo];
    newcargo[index] = value;
    dispatch(applyCargo(newcargo));
  }
};

export const addCargoInput = (dispatch, currentState, value) => {
  dispatch(applyCargo([...currentState.cargo, ""]));
};

export const removePortInput = (dispatch, currentState, index) => {
  const portlist = currentState.ports;
  if (portlist.length === 1) {
    return;
  }
  dispatch(
    applyPort(portlist.filter((_, filterindex) => index !== filterindex))
  );
};

export const removeCargoInput = (dispatch, currentState, index) => {
  const cargolist = currentState.cargo;
  if (cargolist.length === 1) {
    return;
  }
  dispatch(applyCargo(cargolist.filter((_, listindex) => listindex !== index)));
};

export const register = async (state) => {
  console.log(state);
  const portlist = state.ports;
  let containertypelist = state.container_types;
  const cargo = state.cargo;
  if (
    portlist.some(
      (value) => value.departure_port === "" || value.arrival_port === ""
    )
  ) {
    window.confirm("ルートに空の項目があります。値を設定してください。");
    return;
  }
  if (
    Object.keys(containertypelist).length === 0 ||
    Object.values(containertypelist).every((value) => value === false)
  ) {
    window.confirm("コンテナ種類が選択されていません。値を設定してください。");
    return;
  }
  if (cargo.some((value) => value === "")) {
    window.confirm("貨物名に空の項目があります。値を設定してください。");
    return;
  }
  const requestlist = [];
  for (const port of portlist) {
    for (const cargo_name of cargo) {
      for (const [key, value] of Object.entries(containertypelist)) {
        if (value) {
          requestlist.push({
            departure_port: port.departure_port,
            arrival_port: port.arrival_port,
            transport_type: "コンテナ",
            container_type: key,
            cargo_name: cargo_name,
            amount: "1",
          });
        }
      }
    }
  }
  if (requestlist.length === 0) {
    return;
  }
  try {
    const result = await axios.post(
      `${AppConfig.api.url}/api/v1/quotations/containers/`,
      requestlist,
      {
        withCredentials: true,
      }
    );
    console.log(result);
  } catch (e) {
    window.confirm(e.message);
    console.log(e);
  }
};

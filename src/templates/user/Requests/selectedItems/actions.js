export const APPLY_PORT = "APPLY_PORT";
export const applyPort = (port) => {
  return { type: APPLY_PORT, payload: port };
};

export const APPLY_CONTAINER_TYPE = "APPLY_CONTAINER_TYPE";
export const applyContainerType = (containerType) => {
  return {
    type: APPLY_CONTAINER_TYPE,
    payload: containerType,
  };
};

export const APPLY_CARGO = "APPLY_CARGO";
export const applyCargo = (cargo) => {
  return {
    type: APPLY_CARGO,
    payload: cargo,
  };
};

export const STORE_PORT = "STORE_PORT";
export const storePort = (ports) => {
  return {
    type: STORE_PORT,
    payload: ports,
  };
};

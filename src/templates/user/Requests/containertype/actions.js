export const STORE_CONTAINER_TYPE = "STORE_CONTAINER_TYPE";
export const storeContainerType = (containerTypes) => {
  return {
    type: STORE_CONTAINER_TYPE,
    payload: containerTypes,
  };
};

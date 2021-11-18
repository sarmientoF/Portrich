export const STORE_CARGO = "STORE_CARGO";
export const storeCargo = (cargo) => {
  return {
    type: STORE_CARGO,
    payload: cargo,
  };
};

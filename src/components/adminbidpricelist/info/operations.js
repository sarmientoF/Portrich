import { post, patch, deletion } from "../../../common/services/connection";
import { push } from "connected-react-router";
import { getAccessToken } from "../../../authorization";

const ENDPOINT = {
  SCHEDULE: "/api/v1/schedule/",
};

export const registerAddScheduls = async (
  requestItems,
  handleClose,
  dispatch,
  handleClickSnackbar
) => {
  const {
    shipping_company,
    ship_name,
    voyage_no,
    pol,
    pod,
    transit1,
    transit2,
    transit3,
    etd,
    eta,
    cy_open,
    cy_cut,
    cfs_cut,
    cfs_open,
  } = requestItems;
  try {
    const params = {
      shipping_company: shipping_company,
      ship_name: ship_name,
      voyage_no: voyage_no,
      pol: pol,
      pod: pod,
      transit1: transit1,
      transit2: transit2,
      transit3: transit3,
      etd: etd,
      eta: eta,
      cy_open: cy_open,
      cy_cut: cy_cut,
      cfs_cut: cfs_cut,
      cfs_open: cfs_open,
    };
    await post(ENDPOINT.SCHEDULE, params);
    handleClose();
    handleClickSnackbar();
  } catch (e) {
    console.log(e.response && e.response.data);
    await getAccessToken();
    await reRegisterAddScheduls(
      requestItems,
      handleClose,
      dispatch,
      handleClickSnackbar
    );
  }
};

const reRegisterAddScheduls = async (
  requestItems,
  handleClose,
  dispatch,
  handleClickSnackbar
) => {
  const {
    shipping_company,
    ship_name,
    voyage_no,
    pol,
    pod,
    transit1,
    transit2,
    transit3,
    etd,
    eta,
    cy_open,
    cy_cut,
    cfs_cut,
    cfs_open,
  } = requestItems;
  try {
    const params = {
      shipping_company: shipping_company,
      ship_name: ship_name,
      voyage_no: voyage_no,
      pol: pol,
      pod: pod,
      transit1: transit1,
      transit2: transit2,
      transit3: transit3,
      etd: etd,
      eta: eta,
      cy_open: cy_open,
      cy_cut: cy_cut,
      cfs_cut: cfs_cut,
      cfs_open: cfs_open,
    };
    await post(ENDPOINT.SCHEDULE, params);
    handleClose();
    handleClickSnackbar();
  } catch (e) {
    console.log(e.response && e.response.data);
    dispatch(push(`/signin`));
  }
};

export const editSchedules = async (
  state,
  createSchedulsItems,
  handleClose,
  handleClickSnackbar,
  dispatch
) => {
  try {
    const id = state.id;
    const params = createSchedulsItems(state);
    await patch(`${ENDPOINT.SCHEDULE}${id}/`, params);
    handleClose();
    handleClickSnackbar();
  } catch (e) {
    console.log(e.response && e.response.data);
    await getAccessToken();
    await reEditSchedules(
      state,
      createSchedulsItems,
      handleClose,
      handleClickSnackbar,
      dispatch
    );
  }
};

const reEditSchedules = async (
  state,
  createSchedulsItems,
  handleClose,
  handleClickSnackbar,
  dispatch
) => {
  try {
    const id = state.id;
    const params = createSchedulsItems(state);
    await patch(`${ENDPOINT.SCHEDULE}${id}/`, params);
    handleClose();
    handleClickSnackbar();
  } catch (e) {
    console.log(e.response && e.response.data);
    dispatch(push(`/signin`));
  }
};

export const deleteSchedules = async (
  state,
  handleClose,
  handleClickSnackbar,
  dispatch
) => {
  try {
    const id = state.id;
    await deletion(`${ENDPOINT.SCHEDULE}${id}/`);
    handleClose();
    handleClickSnackbar();
  } catch (e) {
    console.log(e.response && e.response.data);
    await getAccessToken();
    await RedeleteSchedules(state, handleClose, handleClickSnackbar, dispatch);
  }
};
export const RedeleteSchedules = async (
  state,
  handleClose,
  handleClickSnackbar,
  dispatch
) => {
  try {
    const id = state.id;
    await deletion(`${ENDPOINT.SCHEDULE}${id}/`);
    handleClose();

    handleClickSnackbar();
  } catch (e) {
    console.log(e.response && e.response.data);
    dispatch(push(`/signin`));
  }
};

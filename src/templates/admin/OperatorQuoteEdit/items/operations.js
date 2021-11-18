import axios from "axios";
import { AppConfig } from "../../../../common/config";
import { parseQueryStrings, get } from "../../../../common/utils";

const ENDPOINT = {
  QUOTATIONS_FOR_CONTAINERS: "/api/v1/quotations/containers/",
  QUOTATIONS_FOR_BOXES_OR_PALLETS: "/api/v1/quotations/boxes_or_pallets/",
};

const fetch = async (endpoint, queryString, setItems) => {
  const params = parseQueryStrings(queryString);
  if (!params.id) {
    return;
  }
  try {
    const response = await get(`${endpoint}${params.id}/`);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

const patch = (endpoint, params) => {
  const response = axios.patch(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const fetchViewForQuoteContainers = (queryString, setItems) => {
  fetch(ENDPOINT.QUOTATIONS_FOR_CONTAINERS, queryString, setItems);
};
export const fetchViewForQuoteBoxesOrPallets = (queryString, setItems) => {
  fetch(ENDPOINT.QUOTATIONS_FOR_BOXES_OR_PALLETS, queryString, setItems);
};

export const registerQuotesEditsContainer = async (
  items,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.id;
    const params = {};
    if (items.freetime !== "" || items.freetime !== undefined) {
      params["freetime"] = items.freetime;
    }
    if (
      items.ocean_freight_usd_buy !== "" ||
      items.ocean_freight_usd_buy !== undefined
    ) {
      params["ocean_freight_usd_buy"] = items.ocean_freight_usd_buy;
    }
    if (
      items.ocean_freight_jpy_buy !== "" ||
      items.ocean_freight_jpy_buy !== undefined
    ) {
      params["ocean_freight_jpy_buy"] = items.ocean_freight_jpy_buy;
    }
    if (
      items.ocean_freight_usd_sell !== "" ||
      items.ocean_freight_usd_sell !== undefined
    ) {
      params["ocean_freight_usd_sell"] = items.ocean_freight_usd_sell;
    }
    if (
      items.ocean_freight_jpy_sell !== "" ||
      items.ocean_freight_jpy_sell !== undefined
    ) {
      params["ocean_freight_jpy_sell"] = items.ocean_freight_jpy_sell;
    }
    if (items.thc_jpy_buy !== "" || items.thc_jpy_buy !== undefined) {
      params["thc_jpy_buy"] = items.thc_jpy_buy;
    }
    if (items.thc_jpy_sell !== "" || items.thc_jpy_sell !== undefined) {
      params["thc_jpy_sell"] = items.thc_jpy_sell;
    }
    if (items.lss_usd_buy !== "" || items.lss_usd_buy !== undefined) {
      params["lss_usd_buy"] = items.lss_usd_buy;
    }
    if (items.lss_usd_sell !== "" || items.lss_usd_sell !== undefined) {
      params["lss_usd_sell"] = items.lss_usd_sell;
    }
    if (items.lss_jpy_buy !== "" || items.lss_jpy_buy !== undefined) {
      params["lss_jpy_buy"] = items.lss_jpy_buy;
    }
    if (items.lss_jpy_sell !== "" || items.lss_jpy_sell !== undefined) {
      params["lss_jpy_sell"] = items.lss_jpy_sell;
    }
    if (items.wrs_usd_buy !== "" || items.wrs_usd_buy !== undefined) {
      params["wrs_usd_buy"] = items.wrs_usd_buy;
    }
    if (items.wrs_usd_sell !== "" || items.wrs_usd_sell !== undefined) {
      params["wrs_usd_sell"] = items.wrs_usd_sell;
    }
    if (items.doc_fee_jpy_buy !== "" || items.doc_fee_jpy_buy !== undefined) {
      params["doc_fee_jpy_buy"] = items.doc_fee_jpy_buy;
    }
    if (items.doc_fee_jpy_sell !== "" || items.doc_fee_jpy_sell !== undefined) {
      params["doc_fee_jpy_sell"] = items.doc_fee_jpy_sell;
    }
    if (items.do_fee_jpy_buy !== "" || items.do_fee_jpy_buy !== undefined) {
      params["do_fee_jpy_buy"] = items.do_fee_jpy_buy;
    }
    if (items.do_fee_jpy_sell !== "" || items.do_fee_jpy_sell !== undefined) {
      params["do_fee_jpy_sell"] = items.do_fee_jpy_sell;
    }
    if (items.seal_fee_jpy_buy !== "" || items.seal_fee_jpy_buy !== undefined) {
      params["seal_fee_jpy_buy"] = items.seal_fee_jpy_buy;
    }
    if (
      items.seal_fee_jpy_sell !== "" ||
      items.seal_fee_jpy_sell !== undefined
    ) {
      params["seal_fee_jpy_sell"] = items.seal_fee_jpy_sell;
    }
    if (items.pss_usd_buy !== "" || items.pss_usd_buy !== undefined) {
      params["pss_usd_buy"] = items.pss_usd_buy;
    }
    if (items.pss_usd_sell !== "" || items.pss_usd_sell !== undefined) {
      params["pss_usd_sell"] = items.pss_usd_sell;
    }
    if (items.ams_usd_buy !== "" || items.ams_usd_buy !== undefined) {
      params["ams_usd_buy"] = items.ams_usd_buy;
    }
    if (items.ams_usd_sell !== "" || items.ams_usd_sell !== undefined) {
      params["ams_usd_sell"] = items.ams_usd_sell;
    }
    if (items.ems_usd_buy !== "" || items.ems_usd_buy !== undefined) {
      params["ems_usd_buy"] = items.ems_usd_buy;
    }
    if (items.ems_usd_sell !== "" || items.ems_usd_sell !== undefined) {
      params["ems_usd_sell"] = items.ems_usd_sell;
    }
    if (items.afr_jpy_buy !== "" || items.afr_jpy_buy !== undefined) {
      params["afr_jpy_buy"] = items.afr_jpy_buy;
    }
    if (items.afr_jpy_sell !== "" || items.afr_jpy_sell !== undefined) {
      params["afr_jpy_sell"] = items.afr_jpy_sell;
    }
    if (items.gri_usd_buy !== "" || items.gri_usd_buy !== undefined) {
      params["gri_usd_buy"] = items.gri_usd_buy;
    }
    if (items.gri_usd_sell !== "" || items.gri_usd_sell !== undefined) {
      params["gri_usd_sell"] = items.gri_usd_sell;
    }
    if (items.cic_usd_buy !== "" || items.cic_usd_buy !== undefined) {
      params["cic_usd_buy"] = items.cic_usd_buy;
    }
    if (items.cic_usd_sell !== "" || items.cic_usd_sell !== undefined) {
      params["cic_usd_sell"] = items.cic_usd_sell;
    }
    if (items.cic_jpy_buy !== "" || items.cic_jpy_buy !== undefined) {
      params["cic_jpy_buy"] = items.cic_jpy_buy;
    }
    if (items.cic_jpy_sell !== "" || items.cic_jpy_sell !== undefined) {
      params["cic_jpy_sell"] = items.cic_jpy_sell;
    }
    await patch(`${ENDPOINT.QUOTATIONS_FOR_CONTAINERS}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerQuotesDetailsBoxPallet = async (
  items,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.id;
    const params = {};
    if (items.freetime !== "" || items.freetime !== undefined) {
      params["freetime"] = items.freetime;
    }
    if (
      items.ocean_freight_usd_buy !== "" ||
      items.ocean_freight_usd_buy !== undefined
    ) {
      params["ocean_freight_usd_buy"] = items.ocean_freight_usd_buy;
    }
    if (
      items.ocean_freight_jpy_buy !== "" ||
      items.ocean_freight_jpy_buy !== undefined
    ) {
      params["ocean_freight_jpy_buy"] = items.ocean_freight_jpy_buy;
    }
    if (
      items.ocean_freight_usd_sell !== "" ||
      items.ocean_freight_usd_sell !== undefined
    ) {
      params["ocean_freight_usd_sell"] = items.ocean_freight_usd_sell;
    }
    if (
      items.ocean_freight_jpy_sell !== "" ||
      items.ocean_freight_jpy_sell !== undefined
    ) {
      params["ocean_freight_jpy_sell"] = items.ocean_freight_jpy_sell;
    }
    if (items.thc_jpy_buy !== "" || items.thc_jpy_buy !== undefined) {
      params["thc_jpy_buy"] = items.thc_jpy_buy;
    }
    if (items.thc_jpy_sell !== "" || items.thc_jpy_sell !== undefined) {
      params["thc_jpy_sell"] = items.thc_jpy_sell;
    }
    if (
      items.cfs_charge_jpy_buy !== "" ||
      items.cfs_charge_jpy_buy !== undefined
    ) {
      params["cfs_charge_jpy_buy"] = items.cfs_charge_jpy_buy;
    }
    if (
      items.cfs_charge_jpy_sell !== "" ||
      items.cfs_charge_jpy_sell !== undefined
    ) {
      params["cfs_charge_jpy_sell"] = items.cfs_charge_jpy_sell;
    }
    if (items.lss_usd_buy !== "" || items.lss_usd_buy !== undefined) {
      params["lss_usd_buy"] = items.lss_usd_buy;
    }
    if (items.lss_usd_sell !== "" || items.lss_usd_sell !== undefined) {
      params["lss_usd_sell"] = items.lss_usd_sell;
    }
    if (items.lss_jpy_buy !== "" || items.lss_jpy_buy !== undefined) {
      params["lss_jpy_buy"] = items.lss_jpy_buy;
    }
    if (items.lss_jpy_sell !== "" || items.lss_jpy_sell !== undefined) {
      params["lss_jpy_sell"] = items.lss_jpy_sell;
    }
    if (items.wrs_usd_buy !== "" || items.wrs_usd_buy !== undefined) {
      params["wrs_usd_buy"] = items.wrs_usd_buy;
    }
    if (items.wrs_usd_sell !== "" || items.wrs_usd_sell !== undefined) {
      params["wrs_usd_sell"] = items.wrs_usd_sell;
    }
    if (items.doc_fee_jpy_buy !== "" || items.doc_fee_jpy_buy !== undefined) {
      params["doc_fee_jpy_buy"] = items.doc_fee_jpy_buy;
    }
    if (items.doc_fee_jpy_sell !== "" || items.doc_fee_jpy_sell !== undefined) {
      params["doc_fee_jpy_sell"] = items.doc_fee_jpy_sell;
    }
    if (items.do_fee_jpy_buy !== "" || items.do_fee_jpy_buy !== undefined) {
      params["do_fee_jpy_buy"] = items.do_fee_jpy_buy;
    }
    if (items.do_fee_jpy_sell !== "" || items.do_fee_jpy_sell !== undefined) {
      params["do_fee_jpy_sell"] = items.do_fee_jpy_sell;
    }
    if (
      items.drayge_recovery_charge_jpy_buy !== "" ||
      items.drayge_recovery_charge_jpy_buy !== undefined
    ) {
      params["drayge_recovery_charge_jpy_buy"] =
        items.drayge_recovery_charge_jpy_buy;
    }
    if (
      items.drayge_recovery_charge_jpy_sell !== "" ||
      items.drayge_recovery_charge_jpy_sell !== undefined
    ) {
      params["drayge_recovery_charge_jpy_sell"] =
        items.drayge_recovery_charge_jpy_sell;
    }
    if (items.pss_usd_buy !== "" || items.pss_usd_buy !== undefined) {
      params["pss_usd_buy"] = items.pss_usd_buy;
    }
    if (items.pss_usd_sell !== "" || items.pss_usd_sell !== undefined) {
      params["pss_usd_sell"] = items.pss_usd_sell;
    }
    if (items.afs_jpy_buy !== "" || items.afs_jpy_buy !== undefined) {
      params["afs_jpy_buy"] = items.afs_jpy_buy;
    }
    if (items.afs_jpy_sell !== "" || items.afs_jpy_sell !== undefined) {
      params["afs_jpy_sell"] = items.afs_jpy_sell;
    }
    if (items.gri_usd_buy !== "" || items.gri_usd_buy !== undefined) {
      params["gri_usd_buy"] = items.gri_usd_buy;
    }
    if (items.gri_usd_sell !== "" || items.gri_usd_sell !== undefined) {
      params["gri_usd_sell"] = items.gri_usd_sell;
    }
    if (items.err_usd_buy !== "" || items.err_usd_buy !== undefined) {
      params["err_usd_buy"] = items.err_usd_buy;
    }
    if (items.err_usd_sell !== "" || items.err_usd_sell !== undefined) {
      params["err_usd_sell"] = items.err_usd_sell;
    }
    if (items.cic_usd_buy !== "" || items.cic_usd_buy !== undefined) {
      params["cic_usd_buy"] = items.cic_usd_buy;
    }
    if (items.cic_usd_sell !== "" || items.cic_usd_sell !== undefined) {
      params["cic_usd_sell"] = items.cic_usd_sell;
    }
    if (items.cic_jpy_buy !== "" || items.cic_jpy_buy !== undefined) {
      params["cic_jpy_buy"] = items.cic_jpy_buy;
    }
    if (items.cic_jpy_sell !== "" || items.cic_jpy_sell !== undefined) {
      params["cic_jpy_sell"] = items.cic_jpy_sell;
    }
    await patch(`${ENDPOINT.QUOTATIONS_FOR_BOXES_OR_PALLETS}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteQuoteOfContainer = async (
  items,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.QUOTATIONS_FOR_CONTAINERS}${id}/`,
      {
        withCredentials: true,
      }
    );
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteQuoteOfBoxPallet = async (
  items,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = items.id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.QUOTATIONS_FOR_BOXES_OR_PALLETS}${id}/`,
      {
        withCredentials: true,
      }
    );
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

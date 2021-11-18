import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  QUOTES_FOR_CONTAINER: "/api/v1/quotations/containers/",
  QUOTES_FOR_BOXES_OR_PALLETS: "/api/v1/quotations/boxes_or_pallets/",
};

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const registerContainerQuotes = async (
  selectedCommonItems,
  selectedCostPricesList,
  selectedSellPrices,
  handleOpen
) => {
  try {
    const params = selectedCostPricesList.map((prices) => {
      return {
        ...selectedCommonItems,
        shipping_company: prices.shipping_company,
        users_company: selectedCommonItems.users_company,
        departure_port: selectedCommonItems.departure_port.id,
        arrival_port: selectedCommonItems.arrival_port.id,
        container_type: selectedCommonItems.container_type,
        cargo_name: selectedCommonItems.cargo_name.id,
        freetime: prices.freetime,
        estimated_deadline_date: prices.estimated_deadline_date,
        ocean_freight_usd_buy: prices.ocean_freight_usd_buy,
        ocean_freight_usd_sell: selectedSellPrices.ocean_freight_usd_sell,
        ocean_freight_jpy_buy: prices.ocean_freight_jpy_buy,
        ocean_freight_jpy_sell: selectedSellPrices.ocean_freight_jpy_sell,
        wrs_usd_buy: prices.wrs_buy,
        wrs_usd_sell: selectedSellPrices.wrs_sell,
        lss_usd_buy: prices.lss_usd_buy,
        lss_usd_sell: selectedSellPrices.lss_usd_sell,
        lss_jpy_buy: prices.lss_jpy_buy,
        lss_jpy_sell: selectedSellPrices.lss_jpy_sell,
        thc_jpy_buy: prices.thc_buy,
        thc_jpy_sell: selectedSellPrices.thc_sell,
        seal_fee_jpy_buy: prices.seal_fee_buy,
        seal_fee_jpy_sell: selectedSellPrices.seal_fee_sell,
        doc_fee_jpy_buy: prices.doc_fee_buy,
        doc_fee_jpy_sell: selectedSellPrices.doc_fee_sell,
        do_fee_jpy_buy: prices.do_fee_buy,
        do_fee_jpy_sell: selectedSellPrices.do_fee_sell,
        surrender_fee_jpy_buy: prices.surrender_fee_buy,
        surrender_fee_jpy_sell: selectedSellPrices.surrender_fee_sell,
        pss_usd_buy: prices.pss_buy,
        pss_usd_sell: selectedSellPrices.pss_sell,
        ams_usd_buy: prices.ams_buy,
        ams_usd_sell: selectedSellPrices.ams_sell,
        ems_usd_buy: prices.ems_buy,
        ems_usd_sell: selectedSellPrices.ems_sell,
        afr_jpy_buy: prices.afr_buy,
        afr_jpy_sell: selectedSellPrices.afr_sell,
        gri_usd_buy: prices.gri_buy,
        gri_usd_sell: selectedSellPrices.gri_sell,
        cic_usd_buy: prices.cic_usd_buy,
        cic_usd_sell: selectedSellPrices.cic_usd_sell,
        cic_jpy_buy: prices.cic_jpy_buy,
        cic_jpy_sell: selectedSellPrices.cic_jpy_sell,
      };
    });
    await post(ENDPOINT.QUOTES_FOR_CONTAINER, params);
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};
export const registerBoxPalletQuotes = async (
  selectedCommonItems,
  selectedCostPricesList,
  selectedSellPrices,
  handleOpen
) => {
  try {
    const params = selectedCostPricesList.map((selectedCostPrices) => {
      return {
        shipping_company: selectedCostPrices.shipping_company,
        users_company: selectedCommonItems.users_company,
        departure_port: selectedCommonItems.departure_port.id,
        arrival_port: selectedCommonItems.arrival_port.id,
        cargo_name: selectedCommonItems.cargo_name.id,
        freetime: selectedCostPrices.freetime,
        estimated_deadline_date: selectedCostPrices.estimated_deadline_date,
        ocean_freight_usd_buy: selectedCostPrices.ocean_freight_usd_buy,
        ocean_freight_usd_sell: selectedSellPrices.ocean_freight_usd_sell,
        ocean_freight_jpy_buy: selectedCostPrices.ocean_freight_jpy_buy,
        ocean_freight_jpy_sell: selectedSellPrices.ocean_freight_jpy_sell,
        wrs_usd_buy: selectedCostPrices.wrs_buy,
        wrs_usd_sell: selectedSellPrices.wrs_sell,
        lss_usd_buy: selectedCostPrices.lss_usd_buy,
        lss_usd_sell: selectedSellPrices.lss_usd_sell,
        lss_jpy_buy: selectedCostPrices.lss_jpy_buy,
        lss_jpy_sell: selectedSellPrices.lss_jpy_sell,
        thc_jpy_buy: selectedCostPrices.thc_buy,
        thc_jpy_sell: selectedSellPrices.thc_sell,
        doc_fee_jpy_buy: selectedCostPrices.doc_fee_buy,
        doc_fee_jpy_sell: selectedSellPrices.doc_fee_sell,
        do_fee_jpy_buy: selectedCostPrices.do_fee_buy,
        do_fee_jpy_sell: selectedSellPrices.do_fee_sell,
        cfs_charge_jpy_buy: selectedCostPrices.cfs_charge_buy,
        cfs_charge_jpy_sell: selectedSellPrices.cfs_charge_sell,
        surrender_usd_buy: selectedCostPrices.surrender_buy,
        surrender_usd_sell: selectedSellPrices.surrender_sell,
        pss_usd_buy: selectedCostPrices.pss_buy,
        pss_usd_sell: selectedSellPrices.pss_sell,
        drayge_recovery_charge_jpy_buy:
          selectedCostPrices.drayge_recovery_charge_buy,
        drayge_recovery_charge_jpy_sell:
          selectedSellPrices.drayge_recovery_charge_sell,
        afs_jpy_buy: selectedCostPrices.afs_buy,
        afs_jpy_sell: selectedSellPrices.afs_sell,
        gri_usd_buy: selectedCostPrices.gri_buy,
        gri_usd_sell: selectedSellPrices.gri_sell,
        err_usd_buy: selectedCostPrices.err_buy,
        err_usd_sell: selectedSellPrices.err_sell,
        cic_usd_buy: selectedCostPrices.cic_usd_buy,
        cic_usd_sell: selectedSellPrices.cic_usd_sell,
        cic_jpy_buy: selectedCostPrices.cic_jpy_buy,
        cic_jpy_sell: selectedSellPrices.cic_jpy_sell,
      };
    });
    await post(ENDPOINT.QUOTES_FOR_BOXES_OR_PALLETS, params);
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

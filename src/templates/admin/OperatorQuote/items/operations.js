import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  QUOTATIONS_FOR_CONTAINERS: "/api/v1/quotations/containers/",
  QUOTATIONS_FOR_BOXES_OR_PALLETS: "/api/v1/quotations/boxes_or_pallets/",
};

const fetch = (endpoint) => {
  const response = axios.get(`${AppConfig.api.url}${endpoint}`, {
    withCredentials: true,
  });
  return response;
};

export const fetchViewForQuoteContainers = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.QUOTATIONS_FOR_CONTAINERS);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const fetchViewForBoxesOrPallets = async (setItems) => {
  try {
    const response = await fetch(ENDPOINT.QUOTATIONS_FOR_BOXES_OR_PALLETS);
    setItems(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const getCurrentQuoteContainerItems = (
  item,
  shipportlist,
  containertypes,
  cargonames,
  usercompanies,
  shippingcompanies
) => {
  const userCompaniesId = item.users_company;
  const departurePortId = item.departure_port;
  const arrivalPortId = item.arrival_port;
  const containerTypeId = item.container_type;
  const cargoNameId = item.cargo_name;
  const ShippingCompaniesId = item.shipping_company;
  const userCompaniesName = usercompanies.filter(
    (item) => item.id === userCompaniesId
  );
  const departurePortName = shipportlist.filter(
    (item) => item.id === departurePortId
  );
  const arrivalPortName = shipportlist.filter(
    (item) => item.id === arrivalPortId
  );
  const containerTypesName = containertypes.filter(
    (item) => item.id === containerTypeId
  );
  const cargoNameName = cargonames.filter((item) => item.id === cargoNameId);
  const ShippingCompaniesName = shippingcompanies.filter(
    (item) => item.id === ShippingCompaniesId
  );
  const items = {};

  items["users_company_name"] =
    userCompaniesName.length === 0 ? "" : userCompaniesName[0].value;
  items["departure_port_name"] =
    departurePortName.length === 0 ? "" : departurePortName[0].value;
  items["arrival_port_name"] =
    arrivalPortName.length === 0 ? "" : arrivalPortName[0].value;
  items["container_type_name"] =
    containerTypesName.length === 0 ? "" : containerTypesName[0].value;
  items["cargo_name_name"] =
    cargoNameName.length === 0 ? "" : cargoNameName[0].value;
  items["shipping_company_name"] =
    ShippingCompaniesName.length === 0 ? "" : ShippingCompaniesName[0].value;
  items["estimated_deadline_date"] = item.estimated_deadline_date.replaceAll(
    /-/g,
    "/"
  );
  items["freetime"] = item.freetime;
  items["ocean_freight_usd_buy"] = item.ocean_freight_usd_buy;
  items["ocean_freight_jpy_buy"] = item.ocean_freight_jpy_buy;
  items["ocean_freight_usd_sell"] = item.ocean_freight_usd_sell;
  items["ocean_freight_jpy_sell"] = item.ocean_freight_jpy_sell;
  items["thc_jpy_buy"] = item.thc_jpy_buy;
  items["thc_jpy_sell"] = item.thc_jpy_sell;
  items["lss_usd_buy"] = item.lss_usd_buy;
  items["lss_usd_sell"] = item.lss_usd_sell;
  items["lss_jpy_buy"] = item.lss_jpy_buy;
  items["lss_jpy_sell"] = item.lss_jpy_sell;
  items["wrs_usd_buy"] = item.wrs_usd_buy;
  items["wrs_usd_sell"] = item.wrs_usd_sell;
  items["doc_fee_jpy_buy"] = item.doc_fee_jpy_buy;
  items["doc_fee_jpy_sell"] = item.doc_fee_jpy_sell;
  items["do_fee_jpy_buy"] = item.do_fee_jpy_buy;
  items["do_fee_jpy_sell"] = item.do_fee_jpy_sell;
  items["seal_fee_jpy_buy"] = item.seal_fee_jpy_buy;
  items["seal_fee_jpy_sell"] = item.seal_fee_jpy_sell;
  items["pss_usd_buy"] = item.pss_usd_buy;
  items["pss_usd_sell"] = item.pss_usd_sell;
  items["ams_usd_buy"] = item.ams_usd_buy;
  items["ams_usd_sell"] = item.ams_usd_sell;
  items["ems_usd_buy"] = item.ems_usd_buy;
  items["ems_usd_sell"] = item.ems_usd_sell;
  items["afr_jpy_buy"] = item.afr_jpy_buy;
  items["afr_jpy_sell"] = item.afr_jpy_sell;
  items["gri_usd_buy"] = item.gri_usd_buy;
  items["gri_usd_sell"] = item.gri_usd_sell;
  items["cic_usd_buy"] = item.cic_usd_buy;
  items["cic_usd_sell"] = item.cic_usd_sell;
  items["cic_jpy_buy"] = item.cic_jpy_buy;
  items["cic_jpy_sell"] = item.cic_jpy_sell;
  return items;
};

export const getCurrentQuoteBoxPalletItems = (
  item,
  shipportlist,
  containertypes,
  cargonames,
  usercompanies,
  shippingcompanies
) => {
  const userCompaniesId = item.users_company;
  const departurePortId = item.departure_port;
  const arrivalPortId = item.arrival_port;
  const containerTypeId = item.container_type;
  const cargoNameId = item.cargo_name;
  const ShippingCompaniesId = item.shipping_company;
  const userCompaniesName = usercompanies.filter(
    (item) => item.id === userCompaniesId
  );
  const departurePortName = shipportlist.filter(
    (item) => item.id === departurePortId
  );
  const arrivalPortName = shipportlist.filter(
    (item) => item.id === arrivalPortId
  );
  const containerTypesName = containertypes.filter(
    (item) => item.id === containerTypeId
  );
  const cargoNameName = cargonames.filter((item) => item.id === cargoNameId);
  const ShippingCompaniesName = shippingcompanies.filter(
    (item) => item.id === ShippingCompaniesId
  );
  const items = {};

  items["users_company_name"] =
    userCompaniesName.length === 0 ? "" : userCompaniesName[0].value;
  items["departure_port_name"] =
    departurePortName.length === 0 ? "" : departurePortName[0].value;
  items["arrival_port_name"] =
    arrivalPortName.length === 0 ? "" : arrivalPortName[0].value;
  items["container_type_name"] =
    containerTypesName.length === 0 ? "" : containerTypesName[0].value;
  items["cargo_name_name"] =
    cargoNameName.length === 0 ? "" : cargoNameName[0].value;
  items["shipping_company_name"] =
    ShippingCompaniesName.length === 0 ? "" : ShippingCompaniesName[0].value;
  items["estimated_deadline_date"] = item.estimated_deadline_date.replaceAll(
    /-/g,
    "/"
  );
  items["freetime"] = item.freetime;
  items["ocean_freight_usd_buy"] = item.ocean_freight_usd_buy;
  items["ocean_freight_jpy_buy"] = item.ocean_freight_jpy_buy;
  items["ocean_freight_usd_sell"] = item.ocean_freight_usd_sell;
  items["ocean_freight_jpy_sell"] = item.ocean_freight_jpy_sell;
  items["thc_jpy_buy"] = item.thc_jpy_buy;
  items["thc_jpy_sell"] = item.thc_jpy_sell;
  items["cfs_charge_jpy_buy"] = item.cfs_charge_jpy_buy;
  items["cfs_charge_jpy_sell"] = item.cfs_charge_jpy_sell;
  items["lss_usd_buy"] = item.lss_usd_buy;
  items["lss_usd_sell"] = item.lss_usd_sell;
  items["lss_jpy_buy"] = item.lss_jpy_buy;
  items["lss_jpy_sell"] = item.lss_jpy_sell;
  items["wrs_usd_buy"] = item.wrs_usd_buy;
  items["wrs_usd_sell"] = item.wrs_usd_sell;
  items["doc_fee_jpy_buy"] = item.doc_fee_jpy_buy;
  items["doc_fee_jpy_sell"] = item.doc_fee_jpy_sell;
  items["do_fee_jpy_buy"] = item.do_fee_jpy_buy;
  items["do_fee_jpy_sell"] = item.do_fee_jpy_sell;
  items["drayge_recovery_charge_jpy_buy"] = item.drayge_recovery_charge_jpy_buy;
  items["drayge_recovery_charge_jpy_sell"] =
    item.drayge_recovery_charge_jpy_sell;
  items["pss_usd_buy"] = item.pss_usd_buy;
  items["pss_usd_sell"] = item.pss_usd_sell;
  items["afs_jpy_buy"] = item.afs_jpy_buy;
  items["afs_jpy_sell"] = item.afs_jpy_sell;
  items["gri_usd_buy"] = item.gri_usd_buy;
  items["gri_usd_sell"] = item.gri_usd_sell;
  items["err_usd_buy"] = item.err_usd_buy;
  items["err_usd_sell"] = item.err_usd_sell;
  items["cic_usd_buy"] = item.cic_usd_buy;
  items["cic_jpy_buy"] = item.cic_jpy_buy;
  items["cic_usd_sell"] = item.cic_usd_sell;
  items["cic_jpy_sell"] = item.cic_jpy_sell;
  return items;
};

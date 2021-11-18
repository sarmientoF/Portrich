import axios from "axios";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  CARGO_STATUSES: "/api/v1/cargo_statuses/",
  CARGO_STATUSES_SHIPPING_INVOICE: "/api/v1/cargo_statuses/shipping_invoices/",
  CARGO_STATUSES_ADDUTIONAL_COSTS: "/api/v1/cargo_statuses/additional_costs/",
};

const patch = (endpoint, params) => {
  const response = axios.patch(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const registerAddDetailsData = async (
  textStates,
  cargoStatus,
  selectedSalesStaffs,
  handleClose,
  handleOpen
) => {
  try {
    const id = cargoStatus.id;
    const params = {};

    if (
      textStates.changed_marine_traffic_ship_id !== "" ||
      textStates.changed_marine_traffic_ship_id !== undefined
    ) {
      params["changed_marine_traffic_ship_id"] =
        textStates.changed_marine_traffic_ship_id;
    }
    if (
      textStates.is_checking_customs_clearance !== "" ||
      textStates.is_checking_customs_clearance !== undefined
    ) {
      params["is_checking_customs_clearance"] =
        textStates.is_checking_customs_clearance;
    }
    if (
      textStates.has_done_customs_clearance !== "" ||
      textStates.has_done_customs_clearance !== undefined
    ) {
      params["has_done_customs_clearance"] =
        textStates.has_done_customs_clearance;
    }
    if (
      textStates.is_delivery_completed !== "" ||
      textStates.is_delivery_completed !== undefined
    ) {
      params["is_delivery_completed"] = textStates.is_delivery_completed;
    }
    if (
      textStates.drayage_shipping_jpy_buy !== "" ||
      textStates.drayage_shipping_jpy_buy !== undefined
    ) {
      params["drayage_shipping_jpy_buy"] = textStates.drayage_shipping_jpy_buy;
    }
    if (
      textStates.drayage_shipping_jpy_sell !== "" ||
      textStates.drayage_shipping_jpy_sell !== undefined
    ) {
      params["drayage_shipping_jpy_sell"] =
        textStates.drayage_shipping_jpy_sell;
    }
    if (
      textStates.truck_scale_jpy_buy !== "" ||
      textStates.truck_scale_jpy_buy !== undefined
    ) {
      params["truck_scale_jpy_buy"] = textStates.truck_scale_jpy_buy;
    }
    if (
      textStates.truck_scale_jpy_sell !== "" ||
      textStates.truck_scale_jpy_sell !== undefined
    ) {
      params["truck_scale_jpy_sell"] = textStates.truck_scale_jpy_sell;
    }
    if (
      textStates.use_truck_fee_jpy_buy !== "" ||
      textStates.use_truck_fee_jpy_buy !== undefined
    ) {
      params["use_truck_fee_jpy_buy"] = textStates.use_truck_fee_jpy_buy;
    }
    if (
      textStates.use_truck_fee_jpy_sell !== "" ||
      textStates.use_truck_fee_jpy_sell !== undefined
    ) {
      params["use_truck_fee_jpy_sell"] = textStates.use_truck_fee_jpy_sell;
    }
    if (
      textStates.loading_and_unloading_fee_jpy_buy !== "" ||
      textStates.loading_and_unloading_fee_jpy_buy !== undefined
    ) {
      params["loading_and_unloading_fee_jpy_buy"] =
        textStates.loading_and_unloading_fee_jpy_buy;
    }
    if (
      textStates.loading_and_unloading_fee_jpy_sell !== "" ||
      textStates.loading_and_unloading_fee_jpy_sell !== undefined
    ) {
      params["loading_and_unloading_fee_jpy_sell"] =
        textStates.loading_and_unloading_fee_jpy_sell;
    }
    if (
      textStates.usd_to_jpy_rate !== "" ||
      textStates.usd_to_jpy_rate !== undefined
    ) {
      params["usd_to_jpy_rate"] = textStates.usd_to_jpy_rate;
    }
    if (
      textStates.changed_departure_date !== "" ||
      textStates.changed_departure_date !== undefined
    ) {
      params["changed_departure_date"] = textStates.changed_departure_date;
    }
    if (
      textStates.changed_arrival_date !== "" ||
      textStates.changed_arrival_date !== undefined
    ) {
      params["changed_arrival_date"] = textStates.changed_arrival_date;
    }
    if (
      textStates.changed_vessel_name !== "" ||
      textStates.changed_vessel_name !== undefined
    ) {
      params["changed_vessel_name"] = textStates.changed_vessel_name;
    }
    if (
      textStates.changed_voyage_no !== "" ||
      textStates.changed_voyage_no !== undefined
    ) {
      params["changed_voyage_no"] = textStates.changed_voyage_no;
    }
    if (
      textStates.changed_open_date !== "" ||
      textStates.changed_open_date !== undefined
    ) {
      params["changed_open_date"] = textStates.changed_open_date;
    }
    if (
      textStates.changed_cut_date !== "" ||
      textStates.changed_cut_date !== undefined
    ) {
      params["changed_cut_date"] = textStates.changed_cut_date;
    }
    if (selectedSalesStaffs !== "") {
      params["person_in_charge"] = selectedSalesStaffs;
    }
    await patch(`${ENDPOINT.CARGO_STATUSES}${id}/`, params);
    handleClose();
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const updateInvoiceData = async (
  textStates,
  cargoStatus,
  handleClose,
  handleOpen
) => {
  const packing_type = {};
  if (textStates.packing_type === "PKGS") {
    packing_type["item"] = "1";
  }
  if (textStates.packing_type === "PCS") {
    packing_type["item"] = "2";
  }
  if (textStates.packing_type === "CARTONS") {
    packing_type["item"] = "3";
  }
  if (textStates.packing_type === "BOXES") {
    packing_type["item"] = "4";
  }
  if (textStates.packing_type === "BALES") {
    packing_type["item"] = "5";
  }

  try {
    const id = textStates.id;
    const params = {};
    params["cargo_status"] = cargoStatus.id;
    if (packing_type !== null || packing_type !== undefined) {
      params["packing_type"] = packing_type.item;
    }
    if (textStates.quantity !== null) {
      params["quantity"] = textStates.quantity;
    }
    if (textStates.shipper_name !== null) {
      params["shipper_name"] = textStates.shipper_name;
    }
    if (textStates.consignee_name !== null) {
      params["consignee_name"] = textStates.consignee_name;
    }
    if (textStates.notify_party !== null) {
      params["notify_party"] = textStates.notify_party;
    }
    if (textStates.cbm !== null) {
      params["cbm"] = textStates.cbm;
    }
    if (textStates.kgs !== null) {
      params["kgs"] = textStates.kgs;
    }
    if (textStates.item_name !== null) {
      params["item_name"] = textStates.item_name;
    }

    await uploadInvoiceItem(
      ENDPOINT.CARGO_STATUSES_SHIPPING_INVOICE,
      id,
      params
    );
    handleClose();
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};
const uploadInvoiceItem = async (endpoint, id, params) => {
  try {
    if (id !== undefined) {
      await patch(`${endpoint}${id}/`, params);
    } else {
      await post(`${endpoint}`, params);
    }
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerPaymentDeadlineData = async (
  textStates,
  cargoStatus,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = cargoStatus.id;
    const params = {};

    if (
      textStates.payment_deadline !== "" ||
      textStates.payment_deadline !== undefined
    ) {
      params["payment_deadline"] = textStates.payment_deadline;
    }
    if (textStates.is_paied !== "" || textStates.is_paied !== undefined) {
      params["is_paied"] = textStates.is_paied;
    }
    await patch(`${ENDPOINT.CARGO_STATUSES}${id}/`, params);
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const registerAdditionalCost = async (
  textStates,
  cargoStatus,
  handleClose,
  handleOpen
) => {
  try {
    const params = {
      cargo_status: cargoStatus.id,
      name: textStates.additional_name,
      key_word: "-",
      buy_price: textStates.additional_buy_price,
      sell_price: textStates.additional_sell_price,
    };
    await post(ENDPOINT.CARGO_STATUSES_ADDUTIONAL_COSTS, params);
    handleClose();
    handleOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

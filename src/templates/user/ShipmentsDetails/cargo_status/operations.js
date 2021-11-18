import axios from "axios";
import { AppConfig } from "../../../../common/config";
import { getSize } from "../../../../common/utils";

const ENDPOINT = {
  CARGO_STATUSES_FOR_BOX_PALLET: "/api/v1/cargo_statuses/box_pallet/view/",
  CARGO_STATUSES_FOR_CONTAINERS: "/api/v1/cargo_statuses/container/view/",
};

export const fetchCargoStatus = async (id, shippingTypeId, setData) => {
  const endpoint = getEndpoint(shippingTypeId);
  try {
    const response = await axios.get(`${AppConfig.api.url}${endpoint}${id}/`, {
      withCredentials: true,
    });
    setData(response.data);
  } catch (e) {
    setData({});
  }
};

const getEndpoint = (shippingTypeId) => {
  if (shippingTypeId === "1") {
    return ENDPOINT.CARGO_STATUSES_FOR_BOX_PALLET;
  }
  if (shippingTypeId === "2") {
    return ENDPOINT.CARGO_STATUSES_FOR_CONTAINERS;
  }
  throw Error("invalid shipping type id");
};

export const getDetailRowItems = (cargoStatus, shippingTypeId, invoiceitem) => {
  const items = [];
  // box pallet
  if (shippingTypeId === "1") {
    items.push({ name: "輸送タイプ", value: "箱/パレット" });
  }
  // container
  if (shippingTypeId === "2") {
    items.push({ name: "輸送タイプ", value: "コンテナ" });
  }
  items.push({ name: "出発地", value: cargoStatus.departure_port_name });
  items.push({ name: "経由地", value: cargoStatus.waypoint_name || "N" });
  items.push({ name: "到着地", value: cargoStatus.arrival_port_name });
  items.push({ name: "船会社", value: cargoStatus.shipping_company_name });
  items.push({ name: "本線名", value: cargoStatus.vessel_name });
  items.push({ name: "Voyage No", value: cargoStatus.voyage_no });
  if (cargoStatus.changed_departure_date === null) {
    items.push({
      name: "ETD",
      value:
        cargoStatus.departure_date &&
        cargoStatus.departure_date.replaceAll(/-/g, "/"),
    });
  } else {
    items.push({
      name: "ETD",
      value:
        cargoStatus.changed_departure_date &&
        cargoStatus.changed_departure_date.replaceAll(/-/g, "/"),
    });
  }
  if (cargoStatus.changed_arrival_date === null) {
    items.push({
      name: "ETA",
      value:
        cargoStatus.arrival_date &&
        cargoStatus.arrival_date.replaceAll(/-/g, "/"),
    });
  } else {
    items.push({
      name: "ETA",
      value:
        cargoStatus.changed_arrival_date &&
        cargoStatus.changed_arrival_date.replaceAll(/-/g, "/"),
    });
  }
  // box pallet
  if (shippingTypeId === "1") {
    if (cargoStatus.changed_cut_date === null) {
      items.push({
        name: "CUT",
        value:
          cargoStatus.cfs_cut_date &&
          cargoStatus.cfs_cut_date.replaceAll(/-/g, "/"),
      });
    } else {
      items.push({
        name: "CUT",
        value:
          cargoStatus.changed_cut_date &&
          cargoStatus.changed_cut_date.replaceAll(/-/g, "/"),
      });
    }
    if (cargoStatus.changed_open_date === null) {
      items.push({
        name: "OPEN",
        value:
          cargoStatus.cfs_open_date &&
          cargoStatus.cfs_open_date.replaceAll(/-/g, "/"),
      });
    } else {
      items.push({
        name: "OPEN",
        value:
          cargoStatus.changed_open_date &&
          cargoStatus.changed_open_date.replaceAll(/-/g, "/"),
      });
    }
    items.push({
      name: "サイズ",
      value: getSize(
        cargoStatus.cubic_meter,
        cargoStatus.size_l,
        cargoStatus.size_w,
        cargoStatus.size_h
      ),
    });
    items.push({ name: "重量(kg)", value: cargoStatus.weight + "Kg" });
    items.push({
      name: "レベニュートン",
      value: cargoStatus.revenue_ton + "(R/T)",
    });
  }
  // container
  if (shippingTypeId === "2") {
    if (cargoStatus.changed_cut_date === null) {
      items.push({
        name: "CUT",
        value:
          cargoStatus.cy_cut_date &&
          cargoStatus.cy_cut_date.replaceAll(/-/g, "/"),
      });
    } else {
      items.push({
        name: "CUT",
        value:
          cargoStatus.changed_cut_date &&
          cargoStatus.changed_cut_date.replaceAll(/-/g, "/"),
      });
    }
    if (cargoStatus.changed_open_date === null) {
      items.push({
        name: "OPEN",
        value:
          cargoStatus.cy_open_date &&
          cargoStatus.cy_open_date.replaceAll(/-/g, "/"),
      });
    } else {
      items.push({
        name: "OPEN",
        value:
          cargoStatus.changed_open_date &&
          cargoStatus.changed_open_date.replaceAll(/-/g, "/"),
      });
    }
    items.push({
      name: "コンテナタイプ",
      value: cargoStatus.container_type_name,
    });
  }
  items.push({ name: "Free Time", value: cargoStatus.freetime + "days" });
  items.push({ name: "数量", value: cargoStatus.quantity });
  items.push({ name: "貨物種類", value: cargoStatus.cargo_name_name });

  if (invoiceitem.quantity && invoiceitem.packing_type) {
    items.push({
      name: "Packing Type",
      value: `${invoiceitem.quantity}/${invoiceitem.packing_type}`,
    });
  }
  if (invoiceitem.shipper_name) {
    items.push({ name: "Shiper Name", value: invoiceitem.shipper_name });
  }
  if (invoiceitem.consignee_name) {
    items.push({ name: "Consignee Name", value: invoiceitem.consignee_name });
  }
  if (invoiceitem.notify_party) {
    items.push({ name: "Notify Party", value: invoiceitem.notify_party });
  }
  if (invoiceitem.cbm) {
    items.push({ name: "Measurement", value: invoiceitem.cbm + " CBM" });
  }
  if (invoiceitem.kgs) {
    items.push({ name: "Gross Weight", value: invoiceitem.kgs + " KGS" });
  }
  if (invoiceitem.item_name) {
    items.push({ name: "商品名", value: invoiceitem.item_name });
  }
  return items;
};

export const parseToCargoStatusItems = (cargoStatus, shippingTypeId) => {
  if (isNaN(parseInt(shippingTypeId))) {
    console.log(`invalid shippingTypeId: ${shippingTypeId}`);
    return;
  }
  if (parseInt(shippingTypeId) === 1) {
    return getBoxPalletCargoStatus(cargoStatus);
  }
  return getContainerCargoStatus(cargoStatus);
};

const createItem = (name, value) => {
  return { name, value };
};

export const createMainFeesList = (cargoStatus, shippingTypeId) => {
  if (isNaN(parseInt(shippingTypeId))) {
    console.log(`invalid shippingTypeId: ${shippingTypeId}`);
    return;
  }
  if (parseInt(shippingTypeId) === 1) {
    return createMainFeesListForBoxPallet(cargoStatus);
  }
  return createMainFeesListForContainer(cargoStatus);
};

const createMainFeesListForBoxPallet = (cargoStatus) => {
  const {
    ocean_freight_usd_sell,
    ocean_freight_jpy_sell,
    wrs_usd_sell,
    lss_usd_sell,
    lss_jpy_sell,
    thc_jpy_sell,
    doc_fee_jpy_sell,
    do_fee_jpy_sell,
    cfs_charge_jpy_sell,
    pss_usd_sell,
    drayge_recovery_charge_jpy_sell,
    afs_jpy_sell,
    gri_usd_sell,
    err_usd_sell,
    cic_usd_sell,
    cic_jpy_sell,
  } = cargoStatus;

  const items = [];
  if (
    isNotNaNAndOverZero(ocean_freight_usd_sell) ||
    isNotNaNAndOverZero(ocean_freight_jpy_sell)
  ) {
    items.push(
      createItem(
        "Ocean Freight",
        getUsdPriceOrJpyWithPrefix(
          ocean_freight_usd_sell,
          ocean_freight_jpy_sell
        )
      )
    );
  }
  // wrs_usd_sell
  if (isNotNaNAndOverZero(wrs_usd_sell)) {
    items.push(createItem("WRS", `$ ${wrs_usd_sell}`));
  }
  // lss_usd_sell
  // lss_jpy_sell
  if (isNotNaNAndOverZero(lss_usd_sell) || isNotNaNAndOverZero(lss_jpy_sell)) {
    items.push(
      createItem("LSS", getUsdPriceOrJpyWithPrefix(lss_usd_sell, lss_jpy_sell))
    );
  }
  // thc_jpy_sell
  if (isNotNaNAndOverZero(thc_jpy_sell)) {
    items.push(createItem("THC", `¥ ${thc_jpy_sell}`));
  }
  // doc_fee_jpy_sell
  if (isNotNaNAndOverZero(doc_fee_jpy_sell)) {
    items.push(createItem("DOC Fee", `¥ ${doc_fee_jpy_sell}`));
  }
  // do_fee_jpy_sell
  if (isNotNaNAndOverZero(do_fee_jpy_sell)) {
    items.push(createItem("DO Fee", `¥ ${do_fee_jpy_sell}`));
  }
  // cfs_charge_jpy_sell
  if (isNotNaNAndOverZero(cfs_charge_jpy_sell)) {
    items.push(createItem("CFS Charge", `¥ ${cfs_charge_jpy_sell}`));
  }
  // pss_usd_sell
  if (isNotNaNAndOverZero(pss_usd_sell)) {
    items.push(createItem("PSS", `$ ${pss_usd_sell}`));
  }
  // drayge_recovery_charge_jpy_sell
  if (isNotNaNAndOverZero(drayge_recovery_charge_jpy_sell)) {
    items.push(
      createItem(
        "Drayage Recovery Charge",
        `¥ ${drayge_recovery_charge_jpy_sell}`
      )
    );
  }
  // afs_jpy_sell
  if (isNotNaNAndOverZero(afs_jpy_sell)) {
    items.push(createItem("AFS", `¥ ${afs_jpy_sell}`));
  }
  // gri_usd_sell
  if (isNotNaNAndOverZero(gri_usd_sell)) {
    items.push(createItem("GRI", `$ ${gri_usd_sell}`));
  }
  // err_usd_sell
  if (isNotNaNAndOverZero(err_usd_sell)) {
    items.push(createItem("AFS", `¥ ${err_usd_sell}`));
  }
  // cic_usd_sell
  // cic_jpy_sell
  if (isNotNaNAndOverZero(cic_usd_sell) || isNotNaNAndOverZero(cic_jpy_sell)) {
    items.push(
      createItem("CIC", getUsdPriceOrJpyWithPrefix(cic_usd_sell, cic_jpy_sell))
    );
  }
  return items;
};

const createMainFeesListForContainer = (cargoStatus) => {
  const {
    ocean_freight_usd_sell,
    ocean_freight_jpy_sell,
    wrs_usd_sell,
    lss_usd_sell,
    lss_jpy_sell,
    thc_jpy_sell,
    doc_fee_jpy_sell,
    do_fee_jpy_sell,
    seal_fee_jpy_sell,
    pss_usd_sell,
    ams_usd_sell,
    ems_usd_sell,
    afr_jpy_sell,
    gri_usd_sell,
    cic_usd_sell,
    cic_jpy_sell,
  } = cargoStatus;
  const items = [];
  // ocean_freight_usd_sell
  // ocean_freight_jpy_sell
  if (
    isNotNaNAndOverZero(ocean_freight_usd_sell) ||
    isNotNaNAndOverZero(ocean_freight_jpy_sell)
  ) {
    items.push(
      createItem(
        "Ocean Freight",
        getUsdPriceOrJpyWithPrefix(
          ocean_freight_usd_sell,
          ocean_freight_jpy_sell
        )
      )
    );
  }
  // wrs_usd_sell
  if (isNotNaNAndOverZero(wrs_usd_sell)) {
    items.push(createItem("WRS", `$ ${wrs_usd_sell}`));
  }
  // lss_usd_sell
  // lss_jpy_sell
  if (isNotNaNAndOverZero(lss_usd_sell) || isNotNaNAndOverZero(lss_jpy_sell)) {
    items.push(
      createItem("LSS", getUsdPriceOrJpyWithPrefix(lss_usd_sell, lss_jpy_sell))
    );
  }
  // thc_jpy_sell
  if (isNotNaNAndOverZero(thc_jpy_sell)) {
    items.push(createItem("THC", `¥ ${thc_jpy_sell}`));
  }
  // doc_fee_jpy_sell
  if (isNotNaNAndOverZero(doc_fee_jpy_sell)) {
    items.push(createItem("DOC Fee", `¥ ${doc_fee_jpy_sell}`));
  }
  // do_fee_jpy_sell
  if (isNotNaNAndOverZero(do_fee_jpy_sell)) {
    items.push(createItem("DO Fee", `¥ ${do_fee_jpy_sell}`));
  }
  // seal_fee_jpy_sell
  if (isNotNaNAndOverZero(seal_fee_jpy_sell)) {
    items.push(createItem("Seal Fee", `¥ ${seal_fee_jpy_sell}`));
  }
  // pss_usd_sell
  if (isNotNaNAndOverZero(pss_usd_sell)) {
    items.push(createItem("PSS", `¥ ${pss_usd_sell}`));
  }
  // ams_usd_sell
  if (isNotNaNAndOverZero(ams_usd_sell)) {
    items.push(createItem("AMS", `¥ ${ams_usd_sell}`));
  }
  // ems_usd_sell
  if (isNotNaNAndOverZero(ems_usd_sell)) {
    items.push(createItem("EMS", `¥ ${ems_usd_sell}`));
  }
  // afr_jpy_sell
  if (isNotNaNAndOverZero(afr_jpy_sell)) {
    items.push(createItem("AFR", `¥ ${afr_jpy_sell}`));
  }
  // gri_usd_sell
  if (isNotNaNAndOverZero(gri_usd_sell)) {
    items.push(createItem("GRI", `¥ ${gri_usd_sell}`));
  }
  // cic_usd_sell
  // cic_jpy_sell
  if (isNotNaNAndOverZero(cic_jpy_sell)) {
    items.push(
      createItem("CIC", getUsdPriceOrJpyWithPrefix(cic_usd_sell, cic_jpy_sell))
    );
  }
  return items;
};

const isNotNaNAndOverZero = (value) => {
  if (isNaN(parseFloat(value))) {
    return false;
  }
  return parseFloat(value) > 0;
};

const getUsdPriceOrJpyWithPrefix = (usd_price_value, jpy_price_value) => {
  const usd = parseFloat(usd_price_value);
  if (!isNaN(usd) && usd > 0) {
    return `$ ${usd_price_value}`;
  }
  return `¥ ${jpy_price_value}`;
};

export const createCustomsFees = (cargoStatus) => {
  const { departure_port_name, customs_fee_jpy, handling_fee_jpy } =
    cargoStatus;
  const items = [];
  if (isNotNaNAndOverZero(customs_fee_jpy)) {
    if (isExport(departure_port_name)) {
      items.push(createItem("輸出通関料", `¥ ${customs_fee_jpy}`));
    } else {
      items.push(createItem("輸入通関料", `¥ ${customs_fee_jpy}`));
    }
  }
  if (isNotNaNAndOverZero(customs_fee_jpy)) {
    if (isExport(departure_port_name)) {
      items.push(createItem("輸出取扱料", `¥ ${handling_fee_jpy}`));
    } else {
      items.push(createItem("輸入取扱料", `¥ ${handling_fee_jpy}`));
    }
  }
  return items;
};

export const createTruckDrayageFees = (cargoStatus, shippingTypeId) => {
  if (isNaN(parseInt(shippingTypeId))) {
    console.log(`invalid shippingTypeId: ${shippingTypeId}`);
    return;
  }
  if (parseInt(shippingTypeId) === 1) {
    const { use_truck_fee_jpy_sell, loading_and_unloading_fee_jpy_sell } =
      cargoStatus;
    const items = [];
    if (isNotNaNAndOverZero(use_truck_fee_jpy_sell)) {
      items.push(createItem("トラック運送費用", `¥ ${use_truck_fee_jpy_sell}`));
    }
    if (isNotNaNAndOverZero(loading_and_unloading_fee_jpy_sell)) {
      items.push(
        createItem(
          "積載、荷下ろし費用",
          `¥ ${loading_and_unloading_fee_jpy_sell}`
        )
      );
    }
    return items;
  }
  const { drayage_shipping_jpy_sell, truck_scale_jpy_sell } = cargoStatus;
  const items = [];
  if (isNotNaNAndOverZero(drayage_shipping_jpy_sell)) {
    items.push(
      createItem("ドレージ運送費用", `¥ ${drayage_shipping_jpy_sell}`)
    );
  }
  if (isNotNaNAndOverZero(truck_scale_jpy_sell)) {
    items.push(createItem("台貫費用", `¥ ${truck_scale_jpy_sell}`));
  }
  return items;
};

const isExport = (value) => {
  return value.includes("Japan");
};

const getBoxPalletCargoStatus = (cargoStatus) => {
  return {
    id: cargoStatus.id,
    shipping_company_id: cargoStatus.shipping_company_id,
    shipping_company_name: cargoStatus.shipping_company_name,
    ocean_freight_usd_sell: cargoStatus.ocean_freight_usd_sell,
    ocean_freight_jpy_sell: cargoStatus.ocean_freight_jpy_sell,
    wrs_usd_sell: cargoStatus.wrs_usd_sell,
    lss_usd_sell: cargoStatus.lss_usd_sell,
    lss_jpy_sell: cargoStatus.lss_jpy_sell,
    thc_jpy_sell: cargoStatus.thc_jpy_sell,
    doc_fee_jpy_sell: cargoStatus.doc_fee_jpy_sell,
    do_fee_jpy_sell: cargoStatus.do_fee_jpy_sell,
    cfs_charge_jpy_sell: cargoStatus.cfs_charge_jpy_sell,
    pss_usd_sell: cargoStatus.pss_usd_sell,
    drayge_recovery_charge_jpy_sell:
      cargoStatus.drayge_recovery_charge_jpy_sell,
    afs_jpy_sell: cargoStatus.afs_jpy_sell,
    gri_usd_sell: cargoStatus.gri_usd_sell,
    err_usd_sell: cargoStatus.err_usd_sell,
    cic_usd_sell: cargoStatus.cic_usd_sell,
    cic_jpy_sell: cargoStatus.cic_jpy_sell,
    customs_fee_jpy: cargoStatus.customs_fee_jpy,
    handling_fee_jpy: cargoStatus.handling_fee_jpy,
    use_truck_fee_jpy_sell: cargoStatus.use_truck_fee_jpy_sell,
    loading_and_unloading_fee_jpy_sell:
      cargoStatus.loading_and_unloading_fee_jpy_sell,
    rate: cargoStatus.rate,
    quantity: cargoStatus.quantity,
    revenue_ton: cargoStatus.revenue_ton,
    total_jpy: cargoStatus.total_jpy,
  };
};

const getContainerCargoStatus = (cargoStatus) => {
  return {
    id: cargoStatus.id,
    shipping_company_id: cargoStatus.shipping_company_id,
    shipping_company_name: cargoStatus.shipping_company_name,
    ocean_freight_usd_sell: cargoStatus.ocean_freight_usd_sell,
    ocean_freight_jpy_sell: cargoStatus.ocean_freight_jpy_sell,
    wrs_usd_sell: cargoStatus.wrs_usd_sell,
    lss_usd_sell: cargoStatus.lss_usd_sell,
    lss_jpy_sell: cargoStatus.lss_jpy_sell,
    thc_jpy_sell: cargoStatus.thc_jpy_sell,
    doc_fee_jpy_sell: cargoStatus.doc_fee_jpy_sell,
    do_fee_jpy_sell: cargoStatus.do_fee_jpy_sell,
    seal_fee_jpy_sell: cargoStatus.seal_fee_jpy_sell,
    pss_usd_sell: cargoStatus.pss_usd_sell,
    ams_usd_sell: cargoStatus.ams_usd_sell,
    ems_usd_sell: cargoStatus.ems_usd_sell,
    afr_jpy_sell: cargoStatus.afr_jpy_sell,
    gri_usd_sell: cargoStatus.gri_usd_sell,
    cic_usd_sell: cargoStatus.cic_usd_sell,
    cic_jpy_sell: cargoStatus.cic_jpy_sell,
    customs_fee_jpy: cargoStatus.customs_fee_jpy,
    handling_fee_jpy: cargoStatus.handling_fee_jpy,
    drayage_shipping_jpy_sell: cargoStatus.drayage_shipping_jpy_sell,
    truck_scale_jpy_sell: cargoStatus.truck_scale_jpy_sell,
    rate: cargoStatus.rate,
    quantity: cargoStatus.quantity,
    total_jpy: cargoStatus.total_jpy,
  };
};

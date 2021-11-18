export const getQuoteMaritimeCosts = (cargoStatus, shippingTypeId) => {
  const items = [];
  // box pallet
  if (shippingTypeId === "1") {
    items.push({
      name: "OceanFreight (RT)",
      value:
        cargoStatus.ocean_freight_usd_sell === "0" &&
        cargoStatus.ocean_freight_jpy_sell === "0"
          ? "Incl"
          : cargoStatus.ocean_freight_usd_sell > 0
          ? "$" + Number(cargoStatus.ocean_freight_usd_sell).toLocaleString()
          : cargoStatus.ocean_freight_usd_sell == 0
          ? "¥" + Number(cargoStatus.ocean_freight_jpy_sell).toLocaleString()
          : "-",
    });
    items.push({
      name: cargoStatus.wrs_usd_sell === "0" ? "" : "WRS",
      value:
        cargoStatus.wrs_usd_sell === "0"
          ? ""
          : "$" + Number(cargoStatus.wrs_usd_sell).toLocaleString(),
    });
    items.push({
      name: "LSS (RT)",
      value:
        cargoStatus.lss_usd_sell === "0" && cargoStatus.lss_jpy_sell === "0"
          ? "Incl"
          : cargoStatus.lss_usd_sell > 0
          ? "$" + Number(cargoStatus.lss_usd_sell).toLocaleString()
          : cargoStatus.lss_usd_sell == 0
          ? "¥" + Number(cargoStatus.lss_jpy_sell).toLocaleString()
          : "-",
    });
    items.push({
      name: "THC (RT)",
      value:
        cargoStatus.thc_jpy_sell === "0"
          ? "Incl"
          : cargoStatus.thc_jpy_sell > 0
          ? "¥" + Number(cargoStatus.thc_jpy_sell).toLocaleString()
          : "-",
    });
    items.push({
      name: cargoStatus.doc_fee_jpy_sell === "0" ? "" : "DOC FEE",
      value:
        cargoStatus.doc_fee_jpy_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.doc_fee_jpy_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.do_fee_jpy_sell === "0" ? "" : "DO FEE",
      value:
        cargoStatus.do_fee_jpy_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.do_fee_jpy_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.cfs_charge_jpy_sell === "0" ? "" : "CFS CHARGE(RT)",
      value:
        cargoStatus.cfs_charge_jpy_sell === "0"
          ? "Incl"
          : "¥" + Number(cargoStatus.cfs_charge_jpy_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.pss_usd_sell === "0" ? "" : "PSS",
      value:
        cargoStatus.pss_usd_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.pss_usd_sell).toLocaleString(),
    });
    items.push({
      name:
        cargoStatus.drayge_recovery_charge_jpy_sell === "0"
          ? ""
          : "DRAYGE RECOVERY CHARGE (RT)",
      value:
        cargoStatus.drayge_recovery_charge_jpy_sell === "0"
          ? ""
          : "$" +
            Number(
              cargoStatus.drayge_recovery_charge_jpy_sell
            ).toLocaleString(),
    });
    items.push({
      name: cargoStatus.afs_jpy_sell === "0" ? "" : "AFS",
      value:
        cargoStatus.afs_jpy_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.afs_jpy_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.gri_usd_sell === "0" ? "" : "GRI",
      value:
        cargoStatus.gri_usd_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.gri_usd_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.err_usd_sell === "0" ? "" : "ERR",
      value:
        cargoStatus.err_usd_sell === "0"
          ? ""
          : "$" + Number(cargoStatus.err_usd_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.cic_usd_sell === "0" ? "" : "CIC",
      value:
        cargoStatus.cic_usd_sell === "0"
          ? ""
          : "$" + Number(cargoStatus.cic_usd_sell).toLocaleString(),
    });
  }
  // container
  if (shippingTypeId === "2") {
    items.push({
      name: "OceanFreight",
      value:
        cargoStatus.ocean_freight_usd_sell > 0
          ? "$" + Number(cargoStatus.ocean_freight_usd_sell).toLocaleString()
          : cargoStatus.ocean_freight_usd_sell == 0
          ? "¥" + Number(cargoStatus.ocean_freight_jpy_sell).toLocaleString()
          : "-",
    });
    items.push({
      name: cargoStatus.wrs_usd_sell === "0" ? "" : "WRS",
      value:
        cargoStatus.wrs_usd_sell === "0"
          ? ""
          : "$" + Number(cargoStatus.wrs_usd_sell).toLocaleString(),
    });
    items.push({
      name: "LSS",
      value:
        cargoStatus.lss_usd_sell === "0" && cargoStatus.lss_jpy_sell === "0"
          ? "Incl"
          : cargoStatus.lss_usd_sell > 0
          ? "$" + Number(cargoStatus.lss_usd_sell).toLocaleString()
          : cargoStatus.lss_usd_sell == 0
          ? "¥" + Number(cargoStatus.lss_jpy_sell).toLocaleString()
          : "-",
    });
    items.push({
      name: "THC",
      value:
        cargoStatus.thc_jpy_sell == 0
          ? "Incl"
          : cargoStatus.thc_jpy_sell > 0
          ? "¥" + Number(cargoStatus.thc_jpy_sell).toLocaleString()
          : "-",
    });
    items.push({
      name: cargoStatus.doc_fee_jpy_sell === "0" ? "" : "DOC FEE",
      value:
        cargoStatus.doc_fee_jpy_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.doc_fee_jpy_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.seal_fee_jpy_sell === "0" ? "" : "SEAL FEE",
      value:
        cargoStatus.seal_fee_jpy_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.seal_fee_jpy_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.do_fee_jpy_sell === "0" ? "" : "DO FEE",
      value:
        cargoStatus.do_fee_jpy_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.do_fee_jpy_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.pss_usd_sell === "0" ? "" : "PSS",
      value:
        cargoStatus.pss_usd_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.pss_usd_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.ams_usd_sell === "0" ? "" : "AMS",
      value:
        cargoStatus.ams_usd_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.ams_usd_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.ems_usd_sell === "0" ? "" : "EMS",
      value:
        cargoStatus.ems_usd_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.ems_usd_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.afr_jpy_sell === "0" ? "" : "AFR",
      value:
        cargoStatus.afr_jpy_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.afr_jpy_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.gri_usd_sell === "0" ? "" : "GRI",
      value:
        cargoStatus.gri_usd_sell === "0"
          ? ""
          : "¥" + Number(cargoStatus.gri_usd_sell).toLocaleString(),
    });
    items.push({
      name: cargoStatus.cic_usd_sell === "0" ? "" : "CIC",
      value:
        cargoStatus.cic_usd_sell === "0"
          ? ""
          : "$" + Number(cargoStatus.cic_usd_sell).toLocaleString(),
    });
  }
  return items;
};

export const getQuoteDomesticCustomsClearanceCosts = (
  cargoStatus,
  isExport
) => {
  const items = [];
  if (isExport) {
    items.push({
      name: "輸出通関料",
      value: "¥" + Number(cargoStatus.customs_fee_jpy).toLocaleString(),
    });
    items.push({
      name: "輸出取扱量",
      value: "¥" + Number(cargoStatus.handling_fee_jpy).toLocaleString(),
    });
  } else {
    items.push({
      name: "輸入通関料",
      value: "¥" + Number(cargoStatus.customs_fee_jpy).toLocaleString(),
    });
    items.push({
      name: "輸入取扱量",
      value: "¥" + Number(cargoStatus.handling_fee_jpy).toLocaleString(),
    });
  }
  return items;
};

export const getQuoteDomesticTransportationCosts = (
  cargoStatus,
  shippingTypeId
) => {
  console.log(cargoStatus);
  const items = [];
  // box pallet
  if (shippingTypeId === "1") {
    items.push({
      name: "トラック料金",
      value:
        "¥" + Number(cargoStatus.use_truck_fee_jpy_sell).toLocaleString() ||
        "-",
    });
    items.push({
      name: "積載料金",
      value:
        "¥" +
          Number(
            cargoStatus.loading_and_unloading_fee_jpy_sell
          ).toLocaleString() || "-",
    });
  }
  // container
  if (shippingTypeId === "2") {
    items.push({
      name: "ドレージ料金",
      value:
        "¥" + Number(cargoStatus.drayage_shipping_jpy_sell).toLocaleString() ||
        "-",
    });
    items.push({
      name: "台貫料金",
      value:
        cargoStatus.truck_scale_jpy_sell === "0"
          ? "-"
          : "¥" + Number(cargoStatus.truck_scale_jpy_sell).toLocaleString(),
    });
  }
  console.log(cargoStatus.truck_scale_jpy_sell);
  return items;
};

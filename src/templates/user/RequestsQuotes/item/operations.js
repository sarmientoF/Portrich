export const createRequestItems = (state) => {
  const {
    isexport,
    isimport,
    plural,
    spot,
    plural_month,
    spot_month,
    fob,
    exw,
    cfr,
    cif,
    dap,
    ddp,
    fcl,
    lcl,
    containertype,
    departure_port,
    arrival_port,
    cargoname,
    askdomesticcustoms,
    notaskdomesticcustoms,
    loading_oneself,
    loading_Joint,
    loading_request,
    domestic_target_port,
    domestic_working_hours,
    domestic_workplace,
    domestic_workplace_address,
    askoverseascustoms,
    notaskoverseascustoms,
    overseas_target_port,
    // overseas_workplace,
    // overseas_workplace_address,
    textcbm,
    textkg,
    light_truck,
    two_ton_truck,
    four_ton_truck,
    ten_ton_truck,
  } = state;
  const items = {};
  //輸出か輸入か
  if (isexport) {
    items["transport_type"] = 1;
  }
  if (isimport) {
    items["transport_type"] = 0;
  }
  //インコタームズ
  if (fob) {
    items["incoterms"] = "FOB";
  }
  if (exw) {
    items["incoterms"] = "EXW";
  }
  if (cfr) {
    items["incoterms"] = "CFR";
  }
  if (cif) {
    items["incoterms"] = "CIF";
  }
  if (dap) {
    items["incoterms"] = "DAP";
  }
  if (ddp) {
    items["incoterms"] = "DDP";
  }
  //出発港
  if (departure_port) {
    const pol_id = departure_port.ports_id;
    items["pol"] = pol_id;
  }
  //到着港
  if (arrival_port) {
    const pod_id = arrival_port.ports_id;
    items["pod"] = pod_id;
  }
  //貨物名
  if (cargoname) {
    const cargoname_id = cargoname.cargoes_id;
    items["cargo"] = cargoname_id;
  }
  //輸送形態
  if (fcl) {
    items["shipping_method"] = 0;
  }
  if (lcl) {
    items["shipping_method"] = 1;
  }
  //コンテナタイプ
  if (containertype) {
    const containertype_id = containertype.container_types_id;
    items["container_type"] = containertype_id;
  }
  //国内通関依頼
  if (askdomesticcustoms) {
    items["is_need_domestic_customs"] = true;
  }
  if (notaskdomesticcustoms) {
    items["is_need_domestic_customs"] = false;
  }
  ///海外通関依頼
  if (askoverseascustoms) {
    items["is_need_foreign_customs"] = true;
  }
  if (notaskoverseascustoms) {
    items["is_need_foreign_customs"] = false;
  }
  //継続依頼かどうか
  if (plural) {
    items["is_continuous"] = true;
  }
  if (spot) {
    items["is_continuous"] = false;
  }
  //何月の依頼からか
  if (plural_month) {
    const plural_month_id = plural_month.title;
    items["request_start_month"] = plural_month_id;
  }
  if (spot_month) {
    const spot_month_id = spot_month.title;
    items["request_start_month"] = spot_month_id;
  }
  //作業時間
  if (domestic_working_hours) {
    const domestic_working_hours_id = Number(domestic_working_hours.id);
    items["working_hours"] = domestic_working_hours_id;
  }
  //国内対象港
  if (domestic_target_port) {
    const domestic_target_port_id = domestic_target_port.ports_id;
    items["place_of_departure_as_port"] = domestic_target_port_id;
  }
  //国内作業場所
  items["place_of_departure_name"] = domestic_workplace;
  //国内作業場所住所
  items["place_of_departure_as_address"] = domestic_workplace_address;
  //国外対象港
  if (overseas_target_port) {
    const overseas_target_port_id = overseas_target_port.ports_id;
    items["destination"] = overseas_target_port_id;
  }
  //積載依頼
  if (loading_oneself) {
    items["loading_request_type"] = 0;
  }
  if (loading_Joint) {
    items["loading_request_type"] = 1;
  }
  if (loading_request) {
    items["loading_request_type"] = 2;
  }
  //トラックサイズ
  if (light_truck) {
    items["truck_size"] = 0;
  }
  if (two_ton_truck) {
    items["truck_size"] = 1;
  }
  if (four_ton_truck) {
    items["truck_size"] = 2;
  }
  if (ten_ton_truck) {
    items["truck_size"] = 3;
  }
  //CBM
  items["cargo_cbm"] = textcbm;
  //Kg
  items["cargo_weight"] = textkg;
  return items;
};

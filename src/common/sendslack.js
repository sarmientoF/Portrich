export const sendSlack = (URL, state, messageType) => {
  const text = createText(state, messageType);
  const payload = {
    text: `${text}`,
  };
  const url = URL;

  fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

const createText = (state, messageType) => {
  const {
    ocean,
    // truck,
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
    askdomesticdelivery,
    loading_oneself,
    loading_Joint,
    loading_request,
    domestic_target_port,
    domestic_working_hours,
    domestic_workplace,
    domestic_workplace_address,
    askoverseascustoms,
    notaskoverseascustoms,
    askoverseasdelivery,
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
  if (ocean && (askdomesticdelivery || askoverseasdelivery)) {
    items["truck_too"] = "依頼有り";
  }
  if (
    ocean &&
    askdomesticdelivery === undefined &&
    askoverseasdelivery === undefined
  ) {
    items["truck_too"] = "依頼有り";
  }
  if (isexport) {
    items["transport_type"] = "輸出";
  }
  if (isimport) {
    items["transport_type"] = "輸入";
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
    const pol_name = departure_port.name;
    items["pol"] = pol_name;
  }
  //到着港
  if (arrival_port) {
    const pod_name = arrival_port.name;
    items["pod"] = pod_name;
  }
  //貨物名
  if (cargoname) {
    const cargoname_name = cargoname.name;
    items["cargo"] = cargoname_name;
  }
  //輸送形態
  if (fcl) {
    items["shipping_method"] = "FCL";
  }
  if (lcl) {
    items["shipping_method"] = "LCL";
  }
  //コンテナタイプ
  if (containertype) {
    const containertype_name = containertype.name;
    items["container_type"] = containertype_name;
  }
  if (containertype === undefined) {
    items["container_type"] = "-";
  }
  //国内通関依頼
  if (askdomesticcustoms) {
    items["is_need_domestic_customes"] = "依頼する";
  }
  if (notaskdomesticcustoms) {
    items["is_need_domestic_customes"] = "依頼しない";
  }
  //海外通関依頼
  if (askoverseascustoms) {
    items["is_need_foreign_customes"] = "依頼する";
  }
  if (notaskoverseascustoms) {
    items["is_need_foreign_customes"] = "依頼しない";
  }
  if (askoverseascustoms === undefined && notaskoverseascustoms === undefined) {
    items["is_need_foreign_customes"] = "-";
  }
  if (plural) {
    //継続依頼かどうか
    items["is_continuous"] = "継続依頼";
  }
  if (spot) {
    items["is_continuous"] = "スポット依頼";
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
    const domestic_working_hours_value = domestic_working_hours.value;
    items["working_hours"] = domestic_working_hours_value;
  }
  if (domestic_working_hours === undefined) {
    items["working_hours"] = "-";
  }
  if (domestic_target_port) {
    const domestic_target_port_name = domestic_target_port.name;
    items["place_of_departure_as_port"] = domestic_target_port_name;
  }
  if (domestic_target_port === undefined) {
    items["place_of_departure_as_port"] = "-";
  }
  //国内作業場所
  if (domestic_workplace) {
    items["place_of_departure_name"] = domestic_workplace;
  }
  if (domestic_workplace === undefined) {
    items["place_of_departure_name"] = "-";
  }
  //国内作業場所住所
  if (domestic_workplace_address) {
    items["place_of_departure_as_address"] = domestic_workplace_address;
  }
  if (domestic_workplace_address === undefined) {
    items["place_of_departure_as_address"] = "-";
  }
  if (overseas_target_port) {
    const overseas_target_port_name = overseas_target_port.name;
    items["destination"] = overseas_target_port_name;
  }
  //国外対象港
  if (overseas_target_port) {
    const overseas_target_port_name = overseas_target_port.name;
    items["destination"] = overseas_target_port_name;
  }
  //積載依頼
  if (loading_oneself) {
    items["loading_request_type"] = "自力";
  }
  if (loading_Joint) {
    items["loading_request_type"] = "共同";
  }
  if (loading_request) {
    items["loading_request_type"] = "依頼する";
  }
  if (
    loading_oneself === undefined &&
    loading_Joint === undefined &&
    loading_request === undefined
  ) {
    items["loading_request_type"] = "-";
  }
  if (light_truck) {
    //トラックサイズ
    items["truck_size"] = "軽トラック";
  }
  if (two_ton_truck) {
    items["truck_size"] = "2tトラック";
  }
  if (four_ton_truck) {
    items["truck_size"] = "4tトラック";
  }
  if (ten_ton_truck) {
    items["truck_size"] = "10tトラック";
  }
  if (
    light_truck === undefined &&
    two_ton_truck === undefined &&
    four_ton_truck === undefined &&
    ten_ton_truck === undefined
  ) {
    items["truck_size"] = "-";
  }
  //CBM
  if (textcbm) {
    items["cargo_cbm"] = textcbm;
  }
  if (textcbm === undefined) {
    items["cargo_cbm"] = "-";
  }
  //Kg
  if (textkg) {
    items["cargo_weight"] = textkg;
  }
  if (textkg === undefined) {
    items["cargo_weight"] = "-";
  }

  if (messageType === "requestQuotesOcean") {
    const setText = `以下の内容での船の見積依頼がありました。\n
      会社名：〇〇株式会社\n
      輸出入：${items.transport_type}\n
      インコタームズ：${items.incoterms}\n
      出発港：${items.pol}\n
      到着港：${items.pod}\n
      貨物名：${items.cargo}\n
      輸送形態：${items.shipping_method}\n
      コンテナタイプ：${items.container_type}\n
      国内通関依頼：${items.is_need_domestic_customes}\n
      海外通関依頼：${items.is_need_foreign_customes}\n
      継続的な依頼か：${items.is_continuous}\n
      見積依頼開始月：${items.request_start_month}\n
      トラック依頼：${items.truck_too}`;
    return setText;
  }
  if (messageType === "requestQuotesTruck") {
    const setText = `以下の内容での船の見積依頼がありました。\n
        会社名：〇〇株式会社\n
        輸出入：${items.transport_type}\n
        輸送形態：${items.shipping_method}\n
        作業時間：${items.working_hours}\n
        国内対象港${items.place_of_departure_as_port}\n
        国内作業場所：${items.place_of_departure_name}\n
        国内作業場所住所：${items.place_of_departure_as_address}\n
        国外対象港：${items.destination}\n
        コンテナタイプ：${items.container_type}\n
        積載依頼方法：${items.loading_request_type}\n
        トラックサイズ：${items.truck_size}\n
        CBM：${items.cargo_cbm}\n
        Kg：${items.cargo_weight}`;
    return setText;
  }
};

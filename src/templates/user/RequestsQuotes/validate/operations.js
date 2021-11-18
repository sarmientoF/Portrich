//船の見積依頼のバリデーションチェック
export const validationRequestQuoteOcean = (state, setOpen) => {
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
    askdomesticdelivery,
    notaskdomesticdelivery,
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
    notaskoverseasdelivery,
    overseas_target_port,
    overseas_workplace,
    overseas_workplace_address,
    textcbm,
    textkg,
    light_truck,
    two_ton_truck,
    four_ton_truck,
    ten_ton_truck,
  } = state;
  if (isimport === undefined && isexport === undefined) {
    window.confirm("輸出入を入力してください。");
    return;
  }
  if (plural === undefined && spot === undefined) {
    window.confirm("見積タイプを入力してください。");
    return;
  }
  if (spot_month === undefined) {
    if (plural_month === undefined) {
      window.confirm("見積の開始月を選択してください。");
      return;
    }
  }
  if (plural_month === undefined) {
    if (spot_month === undefined) {
      window.confirm("見積月を選択してください。");
      return;
    }
  }
  if (isimport) {
    if (exw === undefined && fob === undefined) {
      window.confirm("インコタームズを選択してください。");
      return;
    }
  }
  if (isexport) {
    if (
      cfr === undefined &&
      cif === undefined &&
      dap === undefined &&
      ddp === undefined
    ) {
      window.confirm("インコタームズを選択してください。");
      return;
    }
  }
  if (fcl === undefined && lcl === undefined) {
    window.confirm("輸送形態を選択してください。");
    return;
  }
  if (fcl) {
    if (containertype === undefined || containertype === null) {
      window.confirm("コンテナタイプを選択してください。");
      return;
    }
  }
  if (departure_port === undefined || departure_port === null) {
    window.confirm("出発港を選択してください。");
    return;
  }
  if (arrival_port === undefined || arrival_port === null) {
    window.confirm("到着港を選択してください。");
    return;
  }
  if (cargoname === undefined || cargoname === null) {
    window.confirm("貨物名を選択してください。");
    return;
  }
  if (askdomesticcustoms === undefined && notaskdomesticcustoms === undefined) {
    window.confirm("国内通関の有無を選択してください。");
    return;
  }
  if (
    askdomesticdelivery === undefined &&
    notaskdomesticdelivery === undefined
  ) {
    window.confirm("国内配送の有無を選択してください。");
    return;
  }
  if (askdomesticdelivery) {
    if (domestic_workplace === undefined || domestic_workplace === "") {
      window.confirm("作業場所を入力してください。");
      return;
    }
    if (
      domestic_workplace_address === undefined ||
      domestic_workplace_address === ""
    ) {
      window.confirm("作業場所住所を入力してください。");
      return;
    }
    if (domestic_target_port === undefined || domestic_target_port === null) {
      window.confirm("対象港を選択してください。");
      return;
    }
    if (fcl) {
      if (
        domestic_working_hours === undefined ||
        domestic_working_hours === null
      ) {
        window.confirm("作業時間を選択してください。");
        return;
      }
    }
    if (lcl) {
      if (
        light_truck === undefined &&
        two_ton_truck === undefined &&
        four_ton_truck === undefined &&
        ten_ton_truck === undefined
      ) {
        window.confirm("トラックのサイズを選択してください。");
        return;
      }
      if (
        loading_oneself === undefined &&
        loading_Joint === undefined &&
        loading_request === undefined
      ) {
        window.confirm("積載の依頼を選択してください。");
        return;
      }
    }
  }
  if (exw || dap || ddp) {
    if (
      askoverseascustoms === undefined &&
      notaskoverseascustoms === undefined
    ) {
      window.confirm("海外通関の有無を選択してください。");
      return;
    }
    if (
      askoverseasdelivery === undefined &&
      notaskoverseasdelivery === undefined
    ) {
      window.confirm("海外配送の有無を選択してください。");
      return;
    }
    if (askoverseasdelivery) {
      if (overseas_workplace === undefined || overseas_workplace === "") {
        window.confirm("作業場所を入力してください。");
        return;
      }
      if (
        overseas_workplace_address === undefined ||
        overseas_workplace_address === ""
      ) {
        window.confirm("作業場所住所を入力してください。");
        return;
      }
      if (overseas_target_port === undefined || overseas_target_port === null) {
        window.confirm("対象港を選択してください。");
        return;
      }
      if (textcbm === undefined || textcbm === "") {
        window.confirm("品物のサイズを入力してください。");
        return;
      }
      if (textkg === undefined || textkg === null) {
        window.confirm("品物の重量を入力してください。");
        return;
      }
    }
  }
  setOpen(true);
};

//トラックの見積依頼のバリデーションチェック
export const validationRequestQuoteTruck = (state, setOpen) => {
  const {
    isexport,
    isimport,
    fcl,
    lcl,
    containertype,
    loading_oneself,
    loading_Joint,
    loading_request,
    domestic,
    overseas,
    domestic_target_port,
    domestic_working_hours,
    domestic_workplace,
    domestic_workplace_address,
    overseas_target_port,
    overseas_workplace,
    overseas_workplace_address,
    textcbm,
    textkg,
    light_truck,
    two_ton_truck,
    four_ton_truck,
    ten_ton_truck,
  } = state;
  if (domestic === undefined && overseas === undefined) {
    window.confirm("輸出入を入力してください。");
    return;
  }
  if (isimport === undefined && isexport === undefined) {
    window.confirm("輸出入を入力してください。");
    return;
  }
  if (fcl === undefined && lcl === undefined) {
    window.confirm("輸送形態を選択してください。");
    return;
  }
  if (domestic) {
    if (domestic_workplace === undefined || domestic_workplace === "") {
      window.confirm("作業場所を入力してください。");
      return;
    }
    if (
      domestic_workplace_address === undefined ||
      domestic_workplace_address === ""
    ) {
      window.confirm("作業場所住所を入力してください。");
      return;
    }
    if (domestic_target_port === undefined || domestic_target_port === null) {
      window.confirm("対象港を選択してください。");
      return;
    }
    if (fcl) {
      if (containertype === undefined || containertype === null) {
        window.confirm("コンテナタイプを選択してください。");
        return;
      }
      if (
        domestic_working_hours === undefined ||
        domestic_working_hours === null
      ) {
        window.confirm("作業時間を選択してください。");
        return;
      }
    }
    if (lcl) {
      if (
        light_truck === undefined &&
        two_ton_truck === undefined &&
        four_ton_truck === undefined &&
        ten_ton_truck === undefined
      ) {
        window.confirm("トラックのサイズを選択してください。");
        return;
      }
      if (
        loading_oneself === undefined &&
        loading_Joint === undefined &&
        loading_request === undefined
      ) {
        window.confirm("積載の依頼を選択してください。");
        return;
      }
    }
  }
  if (overseas) {
    if (overseas_workplace === undefined || overseas_workplace === "") {
      window.confirm("作業場所を入力してください。");
      return;
    }
    if (
      overseas_workplace_address === undefined ||
      overseas_workplace_address === ""
    ) {
      window.confirm("作業場所住所を入力してください。");
      return;
    }
    if (overseas_target_port === undefined || overseas_target_port === null) {
      window.confirm("対象港を選択してください。");
      return;
    }
    if (textcbm === undefined || textcbm === "") {
      window.confirm("品物のサイズを入力してください。");
      return;
    }
    if (textkg === undefined || textkg === null) {
      window.confirm("品物の重量を入力してください。");
      return;
    }
    if (fcl) {
      if (containertype === undefined || containertype === null) {
        window.confirm("コンテナタイプを選択してください。");
        return;
      }
    }
    if (lcl) {
      if (textcbm === undefined || textcbm === "") {
        window.confirm("品物のサイズを入力してください。");
        return;
      }
      if (textkg === undefined || textkg === null) {
        window.confirm("品物の重量を入力してください。");
        return;
      }
    }
  }
  setOpen(true);
};

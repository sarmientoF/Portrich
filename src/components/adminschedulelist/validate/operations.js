//船の見積依頼のバリデーションチェック
export const validationAddScheduls = (
  state,
  createSchedulsItems,
  registerAddScheduls,
  handleClickSnackbar,
  handleClose,

  dispatch
) => {
  const {
    shipping_company,
    ship_name,
    voyage_no,
    pol,
    pod,
    etd,
    eta,
    cy_open,
    cy_cut,
    cfs_cut,
    cfs_open,
  } = state;
  if (shipping_company === undefined || shipping_company === null) {
    window.confirm("船会社を選択してください。");
    return;
  }
  if (ship_name === undefined) {
    window.confirm("船名を入力してください。");
    return;
  }
  if (voyage_no === undefined) {
    window.confirm("Voyage Noを入力してください。");
    return;
  }
  if (pol === undefined || pol === null) {
    window.confirm("出発港を選択してください。");
    return;
  }
  if (pod === undefined || pod === null) {
    window.confirm("到着港を選択してください。");
    return;
  }
  if (etd === undefined) {
    window.confirm("出発日を入力してください。");
    return;
  }
  if (eta === undefined) {
    window.confirm("到着日を入力してください。");
    return;
  }
  if (cy_open === undefined) {
    window.confirm("Open日を入力してください。");
    return;
  }
  if (cy_cut === undefined) {
    window.confirm("Cut日を入力してください。");
    return;
  }
  if (!cfs_cut) {
    if (cy_cut === undefined && cy_open === undefined) {
      window.confirm("船会社を選択してください。");
      return;
    }
  }
  if (cfs_cut === undefined) {
    window.confirm("Cut日を入力してください。");
    return;
  }
  if (cfs_open === undefined) {
    window.confirm("Open日を入力してください。");
    return;
  }
  if (!cy_open) {
    if (cfs_cut === undefined && cfs_open === undefined) {
      window.confirm("船会社を選択してください。");
      return;
    }
  }
  const requestItems = createSchedulsItems(state);
  registerAddScheduls(requestItems, handleClose, dispatch, handleClickSnackbar);
};

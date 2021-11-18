export const SidebarTitleItem = [
  {
    id: 1,
    icon: "home",
    title: "管理画面",
  },
  {
    id: 2,
    icon: "keyboard_double_arrow_left",
    title: "輸入",
  },
  {
    id: 3,
    icon: "keyboard_double_arrow_right",
    title: "輸出",
  },
  {
    id: 4,
    icon: "apps",
    title: "マスター管理",
  },
];

function createData(path, name) {
  return { path, name };
}

export const manegimentListItem = [
  createData("/admin/requestlist", "見積依頼管理"),
  createData("/admin/bidpricelist", "買値管理"),
  createData("/admin/quotes", "見積管理"),
  createData("/admin/schedule", "スケジュール管理"),
  createData("/admin/bookings", "ブッキング管理"),
  createData("/admin/shipments", "貨物状況管理"),
  createData("/admin/billings", "請求書管理"),
];
export const importListItem = [
  createData("/admin/importer/selection", "輸入車選択見積管理"),
];
export const exportListItem = [createData("/admin/export", "-")];
export const masterListItem = [
  createData("/admin/subcontractor/management", "協力会社管理"),
];

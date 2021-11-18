import { ReactComponent as HomeIcon } from "../../../dist/images/home.svg";
import { ReactComponent as FileIcon } from "../../../dist/images/file.svg";
import { ReactComponent as GridIcon } from "../../../dist/images/grid.svg";
import { ReactComponent as CalendarIcon } from "../../../dist/images/calendar.svg";
import { ReactComponent as MapMarkerIcon } from "../../../dist/images/map-marker.svg";
import { ReactComponent as FilePulusIcon } from "../../../dist/images/file-plus-2.svg";
import classes from "../../../dist/css/common.module.css";

function createData(path, icon, name) {
  return { path, icon, name };
}

export const SidebarItem = [
  createData(
    "/top",
    <HomeIcon className={classes.sidebar_menu_item_icon} />,
    "ダッシュボード"
  ),
  createData(
    "/requestquotes",
    <FileIcon className={classes.sidebar_menu_item_icon} />,
    "見積依頼"
  ),
  createData(
    "/quoteslist/ocean",
    <GridIcon className={classes.sidebar_menu_item_icon} />,
    "見積一覧"
  ),
  createData(
    "/bookinglist",
    <CalendarIcon className={classes.sidebar_menu_item_icon} />,
    "Booking一覧"
  ),
  createData(
    "/shipmentslist",
    <MapMarkerIcon className={classes.sidebar_menu_item_icon} />,
    "貨物状況"
  ),
  createData(
    "/invoicelist",
    <FilePulusIcon className={classes.sidebar_menu_item_icon} />,
    "請求書一覧"
  ),
];

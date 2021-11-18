import React from "react";
import classes from "../../../dist/css/shipments_detail.module.css";
import classes_Common from "../../../dist/css/common.module.css";
import ShipIcon from "../../../dist/images/輸送船アイコン.png";
import TruckIcon from "../../../dist/images/トラックのフリーアイコン.png";

const ShipmentsDetailsCargo = () => {
  const w_7 = { width: "7%" };
  const w_10 = { width: "10%" };
  const w_13 = { width: "13%" };
  const w_15 = { width: "15%" };
  const w_16 = { width: "16%" };
  const w_16_borderRight = { width: "16%", borderRight: "solid 1px #383737" };

  return (
    <div className={classes.s_d_area}>
      <div className={classes.s_d_body}>
        <div className={classes.s_d_info}>
          <div className={classes.s_d_info_main}>
            KIX,Japan ＞ NRT,Japan ＞ LAX,U.s
          </div>
          <div className={classes.s_d_info_sub}>Airplane name: ATR42-600</div>
        </div>

        <div className={classes.s_d_table}>
          <div className={classes.s_d_table_head}>
            <div className={classes.s_d_table_head_item} style={w_15}>
              パッケージタイプ
            </div>
            <div className={classes.s_d_table_head_item} style={w_7}>
              数量
            </div>
            <div className={classes.s_d_table_head_item} style={w_13}>
              L×W×H
            </div>
            <div className={classes.s_d_table_head_item} style={w_7}>
              重量
            </div>
            <div className={classes.s_d_table_head_item} style={w_10}>
              積載重量
            </div>
            <div className={classes.s_d_table_head_item} style={w_16}>
              Tranjit Time
            </div>
            <div className={classes.s_d_table_head_item} style={w_10}>
              品物
            </div>
            <div
              className={classes.s_d_table_head_item}
              style={w_16_borderRight}
            >
              Free Time
            </div>
          </div>

          <div className={classes.s_d_table_contents}>
            <div className={classes.s_d_table_contents_item} style={w_15}>
              Pallets
            </div>
            <div className={classes.s_d_table_contents_item} style={w_7}>
              2
            </div>
            <div className={classes.s_d_table_contents_item} style={w_13}>
              120×100×100
            </div>
            <div className={classes.s_d_table_contents_item} style={w_7}>
              50 KG
            </div>
            <div className={classes.s_d_table_contents_item} style={w_10}>
              7.2 KG
            </div>
            <div className={classes.s_d_table_contents_item} style={w_16}>
              2~3 Days
            </div>
            <div className={classes.s_d_table_contents_item} style={w_10}>
              Furniture
            </div>
            <div
              className={classes.s_d_table_contents_item}
              style={w_16_borderRight}
            >
              14 Days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentsDetailsCargo;

import React from "react";
import classes from "../../../dist/css/progress.module.css";
import {
  departureData,
  arraivalData,
} from "../../../templates/user/ShipmentsDetails2/progress/operations";
import { ReactComponent as Transportation } from "../../../dist/images/transportation.svg";

// 倉庫
export const Content0 = () => {
  return (
    <div className={classes.progress_cont}>
      <div className={classes.progress_cont_flex}>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>cut</div>
          <div className={classes.text}>{departureData.cut}</div>
        </div>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>open</div>
          <div className={classes.text}>{departureData.open}</div>
        </div>
      </div>
    </div>
  );
};

// 通関
export const Content1 = () => {
  return (
    <div className={classes.progress_cont}>
      <div className={classes.progress_cont_flex}>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>cut</div>
          <div className={classes.text}>{departureData.cut}</div>
        </div>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>open</div>
          <div className={classes.text}>{departureData.open}</div>
        </div>
      </div>
    </div>
  );
};

// 出発港
export const Content2 = () => {
  return (
    <div className={classes.progress_cont}>
      <div className={classes.progress_voyage}>
        <Transportation />
        Voyage No：{departureData.voyage}
      </div>
      <div className={classes.progress_cont_flex}>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>船会社名</div>
          <div className={classes.text}>{departureData.cut}</div>
        </div>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>Vessel Name</div>
          <div className={classes.text}>{departureData.vessel_name}</div>
        </div>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>ETD</div>
          <div className={classes.text}>{departureData.etd}</div>
        </div>
      </div>
    </div>
  );
};

// 経由港
export const Content3 = () => {
  return (
    <div className={classes.progress_cont}>
      <div className={classes.progress_voyage}>
        <Transportation />
        Voyage No：{arraivalData.voyage}
      </div>
      <div className={classes.progress_cont_flex}>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>船会社名</div>
          <div className={classes.text}>{arraivalData.ship_name}</div>
        </div>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>Vessel Name</div>
          <div className={classes.text}>{arraivalData.vessel_name}</div>
        </div>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>ETD</div>
          <div className={classes.text}>{arraivalData.etd}</div>
        </div>
        <div className={classes.departure_cont_data}>
          <div className={classes.small}>ETD</div>
          <div className={classes.text}>{arraivalData.eta}</div>
        </div>
      </div>
    </div>
  );
};

// 最終港
export const Content4 = () => {
  return (
    <div className={classes.progress_cont}>
      <div className={classes.progress_voyage}>
        <Transportation />
        Voyage No：{departureData.voyage}
      </div>
      <div className={classes.departure_cont_data}>
        <div className={classes.small}>eta</div>
        <div className={classes.text}>{arraivalData.eta}</div>
      </div>
    </div>
  );
};

// 国外倉庫
export const Content5 = () => {
  return (
    <div className={classes.progress_cont}>
      <div className={classes.departure_cont_data}>
        <div className={classes.small}>取引先会社名</div>
        <div className={classes.text}>{arraivalData.customer_company}</div>
      </div>
    </div>
  );
};
// 国外倉庫
export const Content6 = () => {
  return (
    <div className={classes.progress_cont}>
      <div className={classes.departure_cont_data}>
        <div className={classes.small}>取引先会社名</div>
        <div className={classes.text}>{arraivalData.customer_company}</div>
      </div>
    </div>
  );
};

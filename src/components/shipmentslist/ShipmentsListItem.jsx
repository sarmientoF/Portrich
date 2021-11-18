import React from "react";
import classes from "../../dist/css/shipmentslist.module.css";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { ReactComponent as Transportation } from "../../dist/images/transportation.svg";
import { ReactComponent as Card } from "../../dist/images/card.svg";
import {shipmentItem} from '../../templates/user/ShipmentsList/items/operations'
import {test} from '../../templates/user/ShipmentsList/items/test'
import ShipmentListStepper from './ShipmentListStepper.jsx'

const ShipmentsListItem = () => {
  const dispatch = useDispatch();

  return (
    <ul className={classes.content_list}>
      {shipmentItem.map((value, index) => (
        <li className={classes.contetn_item} key={index} onClick={() => dispatch(push('/shipment_detail2'))}>
          <div className={classes.content_item_detail}>
            <div className={classes.content_item_prfe}>{value.case_no}</div>
            <div className={classes.content_item_flex}>
              <div className={classes.content_item_transportation}>
                <Transportation />
                {value.shipping_method}
              </div>
              <div className={classes.content_item_bookingNo}>Bookinng No : {value.booking_no}</div>
              <div className={classes.content_item_companyName}>{value.company_name}</div>
            </div>
            <div className={classes.content_item_garments}>
              <Card />{value.cargo_name}
            </div>
          </div>
          <div className={classes.content_item_stepper}>
            <div className={classes.stepper_head}>
              <ShipmentListStepper test={test[index]} />
            </div>
            <div className={classes.stepper_foot}>
              <div className={classes.stepper_unit}>
                <div className={classes.stepper_text_country}>{value.depature_warehouse}</div>
              </div>
              <div className={classes.stepper_unit}>
                <div className={classes.stepper_text_country}>{value.pol}</div>
                <div className={classes.stepper_text_date}>出発日 : {value.etd}</div>
                <div className={classes.stepper_text_shipName}>{value.ship_name} / {value.voyage_no}</div>
              </div>
              <div className={classes.stepper_unit}>
                <div className={classes.stepper_text_country}>{value.pod}</div>
                <div className={classes.stepper_text_date}>出発日 : {value.eta}</div>
              </div>
              <div className={classes.stepper_unit}>
                <div className={classes.stepper_text_country}>{value.arrival_warehouse}</div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
export default ShipmentsListItem;

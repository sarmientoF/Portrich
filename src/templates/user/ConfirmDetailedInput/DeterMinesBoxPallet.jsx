import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/determine.module.css";
import {
  DeterMineHead,
  DeterMineLeftBoxPallet,
  DeterMineRightBoxPallet,
} from "../../index";
import { useLocation } from "react-router-dom";
import { fetchQuoteForDaterMineBoxPallet } from "./info/operations";
import { fetchFixedPriceForDaterMine } from "../../../common/services/fetchData";

const DeterMinesBoxPallet = (props) => {
  const { state, revenueton, needcustoms, handleBack, setState } = props;
  const [quote, setQuote] = useState({});

  const location = useLocation();
  const addQueryString = () => {
    if (!location.search) {
      return `?quantity=${state.quantity}&revenue_ton=${revenueton}&need_custom_document=${needcustoms}`;
    }
    return `${location.search}&quantity=${state.quantity}&revenue_ton=${revenueton}&need_custom_document=${needcustoms}`;
  };

  const [fixedprice, setFixedPrice] = useState([]);
  useEffect(() => {
    fetchFixedPriceForDaterMine(setFixedPrice);
  }, []);

  useEffect(() => {
    fetchQuoteForDaterMineBoxPallet(addQueryString(), setQuote);
  }, []);

  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <DeterMineHead />
        <div className={classes.block}>
          <div className={classes.quotation_area}>
            <DeterMineLeftBoxPallet
              state={state}
              setState={setState}
              quote={quote}
              fixedprice={fixedprice}
              revenueton={revenueton}
              handleBack={handleBack}
            />
            <DeterMineRightBoxPallet state={state} quote={quote} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeterMinesBoxPallet;

import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/determine.module.css";
import {
  DeterMineHead,
  DeterMineLeftContainer,
  DeterMineRightContainer,
} from "../../index";
import { useLocation } from "react-router-dom";
import { fetchQuoteForDaterMineContainer } from "./info/operations";
import { fetchFixedPriceForDaterMine } from "../../../common/services/fetchData";

const DeterMinesContainer = (props) => {
  const { state, needcustoms, handleBack, setState } = props;
  const location = useLocation();
  const addQueryString = () => {
    if (!location.search) {
      return `?quantity=${state.quantity}&need_custom_document=${needcustoms}`;
    }
    return `${location.search}&quantity=${state.quantity}&need_custom_document=${needcustoms}`;
  };

  const [quote, setQuote] = useState({});
  useEffect(() => {
    fetchQuoteForDaterMineContainer(addQueryString(), setQuote);
  }, []);

  const [fixedprice, setFixedPrice] = useState([]);
  useEffect(() => {
    fetchFixedPriceForDaterMine(setFixedPrice);
  }, []);

  return (
    <section className={classes.main}>
      <div className={classes.main_body}>
        <DeterMineHead />
        <div className={classes.block}>
          <div className={classes.quotation_area}>
            <DeterMineLeftContainer
              state={state}
              setState={setState}
              quote={quote}
              fixedprice={fixedprice}
              handleBack={handleBack}
            />
            <DeterMineRightContainer state={state} quote={quote} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeterMinesContainer;

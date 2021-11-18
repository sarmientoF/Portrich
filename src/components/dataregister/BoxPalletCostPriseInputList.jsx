import React, { useState, useEffect } from "react";
import { fetchShippingCompanies } from "../../common/services/fetchData";
import { BoxPalletCostPriceInput } from "./";

const BoxPalletCostPriceInputList = (props) => {
  const {
    selectedCostPricesList,
    setSelectedCostPricesList,
    initialSelectedCostPrices,
    inputCostList,
  } = props;
  const [shippingCompanyList, setShippingCompany] = useState([]);
  useEffect(() => {
    fetchShippingCompanies(setShippingCompany);
  }, []);
  return (
    <>
      <BoxPalletCostPriceInput
        index={0}
        shippingCompanyList={shippingCompanyList}
        initialState={initialSelectedCostPrices}
        selectedCostPricesList={selectedCostPricesList}
        setSelectedCostPricesList={setSelectedCostPricesList}
        inputCostList={inputCostList}
      />
      {selectedCostPricesList.slice(1).map((_, index) => (
        <BoxPalletCostPriceInput
          key={index}
          index={++index}
          shippingCompanyList={shippingCompanyList}
          initialState={initialSelectedCostPrices}
          selectedCostPricesList={selectedCostPricesList}
          setSelectedCostPricesList={setSelectedCostPricesList}
          inputCostList={inputCostList}
        />
      ))}
    </>
  );
};
export default BoxPalletCostPriceInputList;

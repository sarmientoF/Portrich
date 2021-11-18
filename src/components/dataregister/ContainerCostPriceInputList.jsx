import React, { useState, useEffect } from "react";
import { fetchShippingCompanies } from "../../common/services/fetchData";
import { ContainerCostPriceInput } from "./";

const ContainerCostPriceInputList = (props) => {
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
      <ContainerCostPriceInput
        index={0}
        shippingCompanyList={shippingCompanyList}
        initialState={initialSelectedCostPrices}
        selectedCostPricesList={selectedCostPricesList}
        setSelectedCostPricesList={setSelectedCostPricesList}
        inputCostList={inputCostList}
      />
      {selectedCostPricesList.slice(1).map((_, index) => (
        <ContainerCostPriceInput
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
export default ContainerCostPriceInputList;

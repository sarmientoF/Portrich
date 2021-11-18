import React from "react";
import Router from "./Router";
import classes from "./dist/css/common.module.css";
import { Header } from "./components/Header/index";
import { Sidebar } from "./components/Sidebar/index";
import { AdminSidebar } from "./components/adminSidebar/index";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isNotSidebar = (pathname) => {
    if (
      pathname === "/schedulelist" ||
      pathname === "/signup" ||
      pathname === "/signin" ||
      pathname === "/shipment_detail" ||
      pathname === "/shipment_detail2"
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      <Header />
      <main className={classes.main_content}>
        {/* {isNotSidebar(pathname) ? <Sidebar /> : <></>} */}
        {isNotSidebar(pathname) ? <AdminSidebar /> : <></>}
        <Router />
      </main>
    </>
  );
};

export default App;

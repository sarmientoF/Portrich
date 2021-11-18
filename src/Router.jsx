import React from "react";
import { Route, Switch } from "react-router";
import {
  AddMenbers,
  AdminRequestList,
  AdminScheduleList,
  AdminBidPriceList,
  BillingsList,
  Billings,
  BookingList,
  Bookings,
  ChatPage,
  ConfirmDetailedInputContainer,
  ConfirmDetailedInputBoxPallet,
  DataRegistrations,
  InvoiceList,
  MyPage,
  MyPages,
  News,
  OperatorBookings,
  OperatorBookingsDetailBoxPallet,
  OperatorBookingsDetailContainer,
  OperatorQuotes,
  OperatorQuoteEditBoxPallet,
  OperatorQuoteEditContainer,
  OperatorQuotesRequest,
  OperatorQuoteRequestDetailBoxPallet,
  OperatorQuoteRequestDetailContainer,
  OperatorSchedules,
  OperatorScheduleEditBoxPallet,
  OperatorScheduleEditContainer,
  Quotes,
  RequestsQuotes,
  QuotesList,
  QuotesListOcean,
  QuotesListTruck,
  ScheduleList,
  ScheduleBoxPallet,
  ScheduleContainer,
  SelectQuotes,
  Shipments,
  ShipmentsDetails,
  ShipmentsDetailsTop,
  ShipmentsList,
  SignIns,
  SignUps,
  SignUpThanks,
  Thanks,
  // RequestContainer,
  RequestBoxPallet,
  Request,
  RequestThanks,
  Top,
} from "./templates/index";
import AuthOperator from "./AuthOperator";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/admin/requestlist" component={AdminRequestList} />
      <Route exact path="/admin/schedule" component={AdminScheduleList} />
      <Route exact path="/admin/bidpricelist" component={AdminBidPriceList} />
      <Route exact path="/signin" component={SignIns} />
      <Route exact path="/signup" component={SignUps} />
      <Route exact path="/top" component={Top} />
      <Route exact path="/signup_thanks" component={SignUpThanks} />
      <Route exact path="/thanks" component={Thanks} />
      <Route exact path="/addmember" component={AddMenbers} />
      <Route exact path="/billinglist" component={BillingsList} />
      <Route exact path="/billing" component={Billings} />
      <Route exact path="/bookinglist" component={BookingList} />
      <Route exact path="/booking" component={Bookings} />
      <Route exact path="/chatpage" component={ChatPage} />
      <Route exact path="/invoicelist" component={InvoiceList} />
      <Route exact path="/mypages" component={MyPage} />
      <Route exact path="/mypage" component={MyPages} />
      <Route exact path="/news" component={News} />
      <Route exact path="/quotes" component={Quotes} />
      <Route exact path="/quoteslist" component={QuotesList} />
      <Route exact path="/quoteslist/ocean" component={QuotesListOcean} />
      <Route exact path="/quoteslist/truck" component={QuotesListTruck} />
      <Route exact path="/schedulelist" component={ScheduleList} />
      <Route exact path="/schedule/boxpallet" component={ScheduleBoxPallet} />
      <Route exact path="/schedule/container" component={ScheduleContainer} />
      <Route exact path="/selectquotes" component={SelectQuotes} />
      <Route exact path="/shipments" component={Shipments} />
      <Route exact path="/shipment_detail" component={ShipmentsDetails} />
      {/*本来のShipmentsDetails*/}
      <Route exact path="/shipment_detail2" component={ShipmentsDetailsTop} />
      {/*新規作成したShipmentsDetails*/}
      <Route exact path="/shipmentslist" component={ShipmentsList} />
      <Route exact path="/request" component={Request} />
      <Route exact path="/requestquotes" component={RequestsQuotes} />
      <Route exact path="/request/thanks" component={RequestThanks} />
      <Route exact path="/request/boxpallete" component={RequestBoxPallet} />
      <Route
        exact
        path="/confirmdetailedinput/container"
        component={ConfirmDetailedInputContainer}
      />
      <Route
        exact
        path="/confirmdetailedinput/boxpallet"
        component={ConfirmDetailedInputBoxPallet}
      />
      <Route exact path="(/)?" component={SignIns} />
      <AuthOperator>
        <Route exact path="/operator/schedule" component={OperatorSchedules} />
        <Route
          exact
          path="/operator/schedule/edit/boxpallet"
          component={OperatorScheduleEditBoxPallet}
        />
        <Route
          exact
          path="/operator/schedule/edit/container"
          component={OperatorScheduleEditContainer}
        />
        <Route exact path="/operator/quote" component={OperatorQuotes} />
        <Route
          exact
          path="/operator/quote/edit/boxpallet"
          component={OperatorQuoteEditBoxPallet}
        />
        <Route
          exact
          path="/operator/quote/edit/container"
          component={OperatorQuoteEditContainer}
        />
        <Route
          exact
          path="/operator/quote/request"
          component={OperatorQuotesRequest}
        />
        <Route
          exact
          path="/operator/quote/detail/boxpallet"
          component={OperatorQuoteRequestDetailBoxPallet}
        />
        <Route
          exact
          path="/operator/quote/detail/container"
          component={OperatorQuoteRequestDetailContainer}
        />
        <Route exact path="/operator/booking" component={OperatorBookings} />
        <Route
          exact
          path="/operator/booking/detail/boxpallet"
          component={OperatorBookingsDetailBoxPallet}
        />
        <Route
          exact
          path="/operator/booking/detail/container"
          component={OperatorBookingsDetailContainer}
        />
        <Route exact path="/dataregistration" component={DataRegistrations} />
      </AuthOperator>
    </Switch>
  );
};

export default Router;

import { post } from "../../../../common/services/connection";
import { push } from "connected-react-router";
import { sendSlack } from "../../../../common/sendslack";
import { getAccessToken } from "../../../../authorization";

const ENDPOINT = {
  QUOTE_REQUESTS_OCEAN: "/api/v1/quote-requests/",
  QUOTE_REQUESTS_TRUCKS: "/api/v1/quote-requests/trucks/",
};

export const registerRequestQuoteOcean = async (
  requestItems,
  state,
  dispatch
) => {
  try {
    const params = {
      user_company: "株式会社Port",
      transport_type: requestItems.transport_type,
      incoterms: requestItems.incoterms,
      pol: requestItems.pol,
      pod: requestItems.pod,
      cargo: requestItems.cargo,
      shipping_method: requestItems.shipping_method,
      container_type: requestItems.container_type || null,
      is_need_domestic_customes: requestItems.is_need_domestic_customes,
      is_need_foreign_customs: requestItems.is_need_foreign_customes,
      is_continuous: requestItems.is_continuous,
      request_start_month: null,
      // request_start_month: requestItems.request_start_month,
    };
    await post(ENDPOINT.QUOTE_REQUESTS_OCEAN, params);
    const messageType = "requestQuotesOcean";
    const url =
      "https://hooks.slack.com/services/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";
    sendSlack(url, state, messageType);
    dispatch(push("/quoteslist/ocean"));
  } catch (e) {
    console.log(e.response && e.response.data);
    await getAccessToken();
    await reRegisterRequestQuoteOcean(requestItems, state, dispatch);
  }
};
const reRegisterRequestQuoteOcean = async (requestItems, state, dispatch) => {
  try {
    const params = {
      user_company: "株式会社Port",
      transport_type: requestItems.transport_type,
      incoterms: requestItems.incoterms,
      pol: requestItems.pol,
      pod: requestItems.pod,
      cargo: requestItems.cargo,
      shipping_method: requestItems.shipping_method,
      container_type: requestItems.container_type || null,
      is_need_domestic_customes: requestItems.is_need_domestic_customes,
      is_need_foreign_customs: requestItems.is_need_foreign_customes,
      is_continuous: requestItems.is_continuous,
      request_start_month: null,
      // request_start_month: requestItems.request_start_month,
    };
    await post(ENDPOINT.QUOTE_REQUESTS_OCEAN, params);
    const messageType = "requestQuotesOcean";
    const url =
      "https://hooks.slack.com/services/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";
    sendSlack(url, state, messageType);
    dispatch(push("/quoteslist/ocean"));
  } catch (e) {
    console.log(e.response && e.response.data);
    dispatch(push(`/signin`));
  }
};

export const registerRequestQuoteTruck = async (
  requestItems,
  state,
  dispatch
) => {
  try {
    const params = {
      user_company: "株式会社Port",
      transport_type: requestItems.transport_type,
      shipping_method: requestItems.shipping_method,
      working_hours: requestItems.working_hours,
      place_of_departure_as_port:
        requestItems.place_of_departure_as_port || null,
      place_of_departure_name: requestItems.place_of_departure_name || null,
      place_of_departure_as_address:
        requestItems.place_of_departure_as_address || null,
      destination: "aiueo",
      // destination: requestItems.destination || null,
      container_type: requestItems.container_type || null,
      loading_request_type: requestItems.loading_request_type,
      truck_size: requestItems.truck_size || null,
      cargo_cbm: requestItems.cargo_cbm || 1,
      cargo_weight: requestItems.cargo_weight || 2,
    };
    await post(ENDPOINT.QUOTE_REQUESTS_TRUCKS, params);
    const messageType = "requestQuotesTruck";
    const url =
      "https://hooks.slack.com/services/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";
    sendSlack(url, state, messageType);
    dispatch(push("/quoteslist/truck"));
  } catch (e) {
    console.log(e.response && e.response.data);
    await getAccessToken();
    await reRegisterRequestQuoteTruck(requestItems, state, dispatch);
  }
};
const reRegisterRequestQuoteTruck = async (requestItems, state, dispatch) => {
  try {
    const params = {
      user_company: "株式会社Port",
      transport_type: requestItems.transport_type,
      shipping_method: requestItems.shipping_method,
      working_hours: requestItems.working_hours,
      place_of_departure_as_port:
        requestItems.place_of_departure_as_port || null,
      place_of_departure_name: requestItems.place_of_departure_name || null,
      place_of_departure_as_address:
        requestItems.place_of_departure_as_address || null,
      destination: "aiueo",
      // destination: requestItems.destination || null,
      container_type: requestItems.container_type || null,
      loading_request_type: requestItems.loading_request_type,
      truck_size: requestItems.truck_size || null,
      cargo_cbm: requestItems.cargo_cbm || 1,
      cargo_weight: requestItems.cargo_weight || 2,
    };
    await post(ENDPOINT.QUOTE_REQUESTS_TRUCKS, params);
    const messageType = "requestQuotesTruck";
    const url =
      "https://hooks.slack.com/services/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";
    sendSlack(url, state, messageType);
    dispatch(push("/quoteslist/truck"));
  } catch (e) {
    console.log(e.response && e.response.data);
    dispatch(push(`/signin`));
  }
};

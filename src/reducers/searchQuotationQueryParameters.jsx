import {
  SELECT_DEPARTURE_PORT,
  SELECT_ARRIVAL_PORT,
  SELECT_QUANTITY,
  SELECT_CONTAINER_SIZE_TYPE,
  SELECT_CONTAINER_TYPE,
  SELECT_CARGO_NAME,
  SELECT_TAB,
} from "../actions/index";

const searchQuotationQueryParameters = (state = {}, action) => {
  switch (action.type) {
    case SELECT_DEPARTURE_PORT:
      return { ...state, departure_port: action.departure_port };
    case SELECT_ARRIVAL_PORT:
      return { ...state, arrival_port: action.arrival_port };
    case SELECT_QUANTITY:
      return { ...state, quantity: action.quantity };
    case SELECT_CONTAINER_SIZE_TYPE:
      return { ...state, container_size_type: action.container_size_type };
    case SELECT_CONTAINER_TYPE:
      return { ...state, container_type: action.container_type };
    case SELECT_CARGO_NAME:
      return { ...state, cargo_name: action.cargo_name };
    case SELECT_TAB:
      return { ...state, selected_tab: action.selected_tab };

    default:
      return state;
  }
};

export default searchQuotationQueryParameters;

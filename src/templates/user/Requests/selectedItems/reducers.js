import { APPLY_PORT, APPLY_CONTAINER_TYPE, APPLY_CARGO } from "./actions";
import initialState from "./initialState";

const SelectedItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_PORT:
      return {
        ...state,
        ports: action.payload,
      };
    case APPLY_CONTAINER_TYPE:
      return {
        ...state,
        container_types: action.payload,
      };
    case APPLY_CARGO:
      return {
        ...state,
        cargo: action.payload,
      };
    default:
      throw Error("illegal action type");
  }
};

export default SelectedItemsReducer;

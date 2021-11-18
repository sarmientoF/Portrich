import { STORE_CARGO } from "./actions";
import initialState from "./initialState";

const ApplyCargoReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CARGO:
      return {
        ...state,
        cargo: action.payload,
      };
    default:
      throw Error("illegal action type");
  }
};

export default ApplyCargoReducer;

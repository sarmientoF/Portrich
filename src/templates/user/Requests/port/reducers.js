import { STORE_PORT } from "./actions";
import initialState from "./initialState";

const PortReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PORT:
      return {
        ...state,
        ports: action.payload,
      };
  }
};

export default PortReducer;

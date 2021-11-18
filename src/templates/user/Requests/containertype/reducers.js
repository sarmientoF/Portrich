import { STORE_CONTAINER_TYPE } from "./actions";
import initialState from "./initialState";

const ContainerTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_CONTAINER_TYPE:
      return {
        ...state,
        container_types: action.payload,
      };
    default:
      throw Error("illegal action type");
  }
};

export default ContainerTypesReducer;

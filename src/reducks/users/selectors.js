import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getSignedIn = createSelector(
  [usersSelector],
  (state) => state.isSignedIn
);

export const getId = createSelector([usersSelector], (state) => state.id);

export const getName = createSelector([usersSelector], (state) => state.name);

export const getEmail = createSelector([usersSelector], (state) => state.email);

export const getCompanyId = createSelector(
  [usersSelector],
  (state) => state.company_id
);

export const getIsStaff = createSelector(
  [usersSelector],
  (state) => state.is_staff
);

export const isRepresentative = createSelector(
  [usersSelector],
  (state) => state.is_representative
);

export const getPhoneNumber = createSelector(
  [usersSelector],
  (state) => state.phone_number
);

export const getCustomerId = createSelector(
  [usersSelector],
  (state) => state.customer_id
);

export const getOrdersHistory = createSelector(
  [usersSelector],
  (state) => state.orders
);

export const getProductsInCart = createSelector(
  [usersSelector],
  (state) => state.cart
);

export const getPaymentMethodId = createSelector(
  [usersSelector],
  (state) => state.payment_method_id
);

export const getToken = createSelector([usersSelector], (state) => state.token);

export const getUsername = createSelector(
  [usersSelector],
  (state) => state.username
);

export const getUserId = createSelector([usersSelector], (state) => state.uid);

export const getUserRole = createSelector(
  [usersSelector],
  (state) => state.role
);

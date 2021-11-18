import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { ConnectedRouter } from "connected-react-router";
import * as History from "history";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import { theme } from "./dist/js/thema";
import { MuiThemeProvider } from "@material-ui/core/styles";

const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();

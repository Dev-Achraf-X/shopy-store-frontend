import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./context/Store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="loading..." persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

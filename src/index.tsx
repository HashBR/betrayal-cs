import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { SyndicateProvider } from "./context/members";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SyndicateProvider>
      <App />
    </SyndicateProvider>
  </React.StrictMode>
);

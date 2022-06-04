import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { SyndicateProvider } from "./context/members";
import { CountersProvider } from "./context/counters";
import { HelpModalProvider } from "./context/helpmodal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <HelpModalProvider>
    <SyndicateProvider>
      <CountersProvider>
        <App />
      </CountersProvider>
    </SyndicateProvider>
  </HelpModalProvider>
  // </React.StrictMode>
);

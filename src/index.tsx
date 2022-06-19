import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { SyndicateProvider } from "./context/members";
import { CountersProvider } from "./context/counters";
import { HelpModalProvider } from "./context/helpmodal";
import { OptionsProvider } from "./context/options";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <OptionsProvider>
    <HelpModalProvider>
      <SyndicateProvider>
        <CountersProvider>
          <App />
        </CountersProvider>
      </SyndicateProvider>
    </HelpModalProvider>
  </OptionsProvider>
  // </React.StrictMode>
);

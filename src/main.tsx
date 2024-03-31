import "@fontsource/bagnard";
import "@fontsource/ibm-plex-mono";
import "@fontsource/open-sans";
import Plausible from "plausible-tracker";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./style.css";

const plausible = Plausible({
  domain : "thomas.steeples.io"
})

plausible.enableAutoPageviews();

const docRoot = document.getElementById("root");
if (docRoot) {
  ReactDOM.createRoot(docRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log("Root container not found.");
}

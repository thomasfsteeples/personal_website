import "@fontsource/bagnard";
import "@fontsource/open-sans";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./style.css";

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

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./utils/fixLeafletIcon";
import "./index.css";
import "leaflet/dist/leaflet.css";
import "./styles/global.css";
import "@fontsource/poppins";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
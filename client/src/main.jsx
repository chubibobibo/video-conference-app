import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";

/** component that contains context imports to pass web socket connection to all components */
import RoomProvider from "./context/RoomSocketContext";

/** toast alerts */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoomProvider>
      <ThemeProvider>
        <App />
        <ToastContainer position='top-center' />
      </ThemeProvider>
    </RoomProvider>
  </React.StrictMode>
);

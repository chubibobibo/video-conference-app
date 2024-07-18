import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";

/** toast alerts */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
    <ToastContainer position='top-center' />
  </ThemeProvider>
);

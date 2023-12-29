import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ToastProvider } from "./components/Toast/ToastProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider swipeDirection="right" duration={5000}>
      <App />
    </ToastProvider>
  </React.StrictMode>
);

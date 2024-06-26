import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Toaster position="top-center" />
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

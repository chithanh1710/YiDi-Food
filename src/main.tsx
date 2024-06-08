import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StoreContextProvide } from "./context/StoreContext.tsx";
import { LoginContextProvider } from "./context/LoginContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContextProvide>
      <LoginContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LoginContextProvider>
    </StoreContextProvide>
  </React.StrictMode>
);

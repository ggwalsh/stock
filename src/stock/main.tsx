import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/theme.css";
import { StockApp } from "./App";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <StockApp homeHref="https://geoffwalsh.xyz/tools" />
  </StrictMode>,
);

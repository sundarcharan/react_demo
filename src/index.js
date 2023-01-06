import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Button from "react-bootstrap/Button";

import Login from "./Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Login />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from "./components/GlobalStyles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </ChakraProvider>
  </React.StrictMode>
);

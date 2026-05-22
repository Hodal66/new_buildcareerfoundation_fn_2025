import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import "./index.css";

import {
  ApolloProvider,
  ApolloClient,
  //createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { API_URL } from "./config";

export const client = new ApolloClient({
  link: new HttpLink({ uri: API_URL }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

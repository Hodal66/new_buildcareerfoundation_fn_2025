import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  ApolloProvider,
  ApolloClient,
  // createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  // link: new HttpLink({ uri: "http://localhost:4300/" }),
  link: new HttpLink({ uri: "https://new-buildcareerfoundation-bn-2025.onrender.com/graphql" }),
  fetchOptions: {
    mode: "no-cors",
  },
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

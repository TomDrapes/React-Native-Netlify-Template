import "react-native-gesture-handler";
import React from "react";
import { customTheme, CustomThemeProvider } from "./theme/CustomThemeContext";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./auth/AuthContext";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: "Bearer fnADwXyqaPACDGn_JLdi98WBsfmFXmXGpe9e1kPu",
      },
    });
  },
});

export default function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <CustomThemeProvider value={customTheme}>
          <AppRoutes />
        </CustomThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}

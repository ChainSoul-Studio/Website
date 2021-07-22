// Imports

import { AuthProvider } from "../auth";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      </ChakraProvider>
  );
}

export default MyApp;
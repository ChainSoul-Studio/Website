// Imports
import Layout from "../components/Layout";
import { AuthProvider } from "../auth";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      </ChakraProvider>
    </Layout>
  );
}

export default MyApp;
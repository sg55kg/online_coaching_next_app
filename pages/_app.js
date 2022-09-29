import '../styles/globals.css'
import {SessionProvider} from "next-auth/react";
import AuthProvider from "../contexts/AuthContext";
import {ChakraProvider} from "@chakra-ui/react";


function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
          <SessionProvider>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </SessionProvider>
      </ChakraProvider>
  )
}

export default MyApp

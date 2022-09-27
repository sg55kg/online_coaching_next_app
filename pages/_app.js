import '../styles/globals.css'
import {SessionProvider} from "next-auth/react";
import AuthProvider from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
      <SessionProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SessionProvider>
  )
}

export default MyApp

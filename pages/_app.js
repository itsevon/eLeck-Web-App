import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
// import { ThemeProvider } from "@material-tailwind/react";
// import Header from '../components/Header'


function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
    );
}

export default MyApp;
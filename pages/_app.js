import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import Header from '../components/Header'



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

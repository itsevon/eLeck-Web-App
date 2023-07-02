import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import Navlist from '../components/Navlist'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navlist />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import type {AppProps} from 'next/app'
import {GlobalStyle} from "../styles/GlobalStyle";
import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";

function MyApp({Component, pageProps}: AppProps) {
   return (
     <>
        <GlobalStyle/>
        <First/>
        <Second/>
        <Third/>
        <Component {...pageProps} />
     </>
   );

}

export default MyApp

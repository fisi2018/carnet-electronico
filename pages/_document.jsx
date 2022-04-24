import {Head, Html, Main, NextScript} from "next/document";
export default function MyDocument(){
    return(
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <meta name="theme-color" content="#e8432d" />
                <title>Carnet - UPC</title>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
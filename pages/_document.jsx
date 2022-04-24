import {Head, Html, Main, NextScript} from "next/document";
export default function MyDocument(){
    return(
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icon.png"></link>
               
               <meta name='application-name' content='PWA UPC' />
<meta name='apple-mobile-web-app-capable' content='yes' />
<meta name='apple-mobile-web-app-status-bar-style' content='default' />
<meta name='apple-mobile-web-app-title' content='PWA UPC' />
<meta name='description' content='PWA para carnets electronicos' />
<meta name='format-detection' content='telephone=no' />
<meta name='mobile-web-app-capable' content='yes' />
<meta name='msapplication-config' content='/icons/browserconfig.xml' />
<meta name='msapplication-TileColor' content='#2B5797' />
<meta name='msapplication-tap-highlight' content='no' />
<meta name='theme-color' content='#e8432d' />

<link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
<link rel='apple-touch-icon' sizes='192x192' href='/icon-192x192.png' />
<link rel='apple-touch-icon' sizes='256x256' href='/icon-256x256.png' />
<link rel='apple-touch-icon' sizes='384x384' href='/icon-384x384.png' />

<link rel='icon' type='image/png' sizes='512x512' href='/icon-512x512.png' />
<link rel='manifest' href='/manifest.json' />
     
<meta name='twitter:card' content='summary' />
<meta name='twitter:url' content='https://vasacaer.com' />
<meta name='twitter:title' content='PWA App' />
<meta name='twitter:description' content='Aplicacion recreativa' />
<meta name='twitter:image' content='https://vasacaer.com/icons/android-chrome-192x192.png' />
<meta name='twitter:creator' content='@Sideral' />
<meta property='og:type' content='website' />
<meta property='og:title' content='PWA Carnet - UPC' />
<meta property='og:description' content='Best PWA App in the world' />
<meta property='og:site_name' content='PWA Carnet UPC' />
<meta property='og:url' content='https://vasacaer.com' />
<meta property='og:image' content='https://vasacaer.com/icons/apple-touch-icon.png' />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
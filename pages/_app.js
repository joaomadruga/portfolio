import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import React from 'react';
const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Signika', sans-serif;
    text-rendering: optimizeLegibility !important;
    background-color: #000;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 16px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #000;
  }
`


export default function App({ Component, pageProps }) {
  return (
    <>
        <Head>

          {/* Twitter */}
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content={"@joaommadruga"} key="twhandle" />

          {/* Open Graph */}
          <meta property="og:url" content={"https://portfolio-joaomadruga.vercel.app/"} key="ogurl" />
          <meta property="og:image" content="/ogImage.svg"/>
          <meta property="og:site_name" content={"Portfólio - João Madruga"} key="ogsitename" />
          <meta property="og:title" content={"Portfólio - João Madruga"} key="ogtitle" />
          <meta property="og:description" content={"Portfólio que conta a história de João Madruga no mundo de tecnologia."} key="ogdesc" />

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
          
          <meta name="theme-color" content="#000" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <link rel="icon" href="/iconWebsite.svg" />
          
          <meta name="description" content="Portfolio que conta a história de João Madruga no mundo dev."/>
          <meta name="keywords" content="portfolio, joao madruga portfolio, joao madruga"/>
          
          <title>Portfolio - João Madruga</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

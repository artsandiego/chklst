import Document, { Html, Head, Main, NextScript } from 'next/document'

class myDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta charSet="utf-8" />
          <meta name="description" content="A one-stop repository of different resources for Front-End Developers and UI Designers."/>
          <meta name="keywords" content="frontend, tools, crtved, artsandiego, website, ui, ux, web design, tips, resources"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://chklst.vercel.app"/>
          <meta property="og:title" content="CHKLST."/>
          <meta property="og:description" content="A one-stop repository of different resources for Front-End Developers and UI Designers."/>
          <meta property="og:image" content="/social-image.png"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://chklst.vercel.app"/>
          <meta property="twitter:title" content="CHKLST."/>
          <meta property="twitter:description" content="A one-stop repository of different resources for Front-End Developers and UI Designers."/>
          <meta property="twitter:image" content="/social-image.png" />
        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default myDocument
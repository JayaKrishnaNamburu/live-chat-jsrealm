import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="../images/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Lato&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="A live Q&A tool built for making a remote meetup experience interactive"
          />
          <meta
            name="twitter:card"
            value="A live Q&A tool built for making a remote meetup experience interactive"
          ></meta>
          <meta property="og:title" content="JSRealm live Q&A" />
          <meta property="og:type" content="chat" />
          <meta property="og:url" content="https://www.jsrealm.in/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;

import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function MyDocument(props: any) {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" href="/"></link>
        <meta name="description" content="Anime4me Web page" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/A4ME.png" />
        <meta name="theme-color" content="#FF006A" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: any): Promise<any> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

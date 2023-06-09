import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import Script from 'next/script';
import { purifyText } from 'services/purifyText';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // permite criação de estilos css em javascript
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
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
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          {/* METAS */}
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Haia Boa Vista: Casas suspensas que ligam a vida urbana com a natureza"
          />

          {/* Google Tag Manager */}
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              (function (w,d,s,l,i) {
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TBTVNVF')
            `}
          </Script>
          {/* End Google Tag Manager */}

          {/* LOGO */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <Main />

          {/* SCRIPTS */}
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: purifyText(
                `<iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-TBTVNVF"
                  height="0"
                  width="0"
                  style="display:none;visibility:hidden">
                </iframe>`,
              ),
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

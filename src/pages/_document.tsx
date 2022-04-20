import Document, {
   Html,
   Head,
   Main,
   NextScript,
   DocumentContext, DocumentInitialProps,
} from 'next/document'
import {ServerStyleSheet} from "styled-components";

class MyDocument extends Document {

   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
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
         };
      } finally {
         sheet.seal();
      }
   }


   render() {
      return (
        <Html>
           <Head>
              // 생략
           </Head>
           <body>
           <Main/>
           <NextScript/>
           </body>
        </Html>
      );
   }
}

export default MyDocument;
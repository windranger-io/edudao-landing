import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document'

const MyDocument = (/*props: DocumentInitialProps*/) => {
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="/fonts/UncutSans/Uncut-Sans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

export default MyDocument

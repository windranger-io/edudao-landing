import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import { GlobalStyles } from 'twin.macro'

const publicUrl =
  process.env.NODE_ENV === 'development'
    ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EduDAO - Career Fair - Jun 15th, 2022 - 8am EST</title>
        <meta
          name="description"
          content="Funding University Ecosystems to support the Innovators of tomorrow"
        />
        <meta name="viewport" content="width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link href="/favicon.png" rel="shortcut icon" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:site_name" content="EduDAO" />
        <meta
          property="og:image"
          content={`${publicUrl}/images/edudao-eventbrite.png`}
        />
        <meta property="og:title" content="EduDAO Career Fair" />
        <meta
          property="og:description"
          content="EduDAO is hosting a career fair for students to find dream jobs and opportunities in Decentraland! Scan the QR code to signup for the event!"
        />
        <meta
          property="og:url"
          content="https://www.eventbrite.com/e/360344799997?aff=efbneb"
        />
        <meta property="og:type" content="events.event" />
        <meta
          name="twitter:description"
          content="EduDAO is hosting a career fair for students to find dream jobs and opportunities in Decentraland! Scan the QR code to signup for the event!"
        />
        <meta
          name="twitter:image"
          content={`${publicUrl}/images/edudao-eventbrite.png`}
        />
        <meta name="twitter:app:name:iphone" content="Eventbrite: EduDAO" />
        <meta
          name="twitter:app:url:iphone"
          content="com-eventbrite-attendee://event/360344799997/?referrer=eiosurlxtcar&amp;"
        />
        <meta name="twitter:app:id:iphone" content="487922291" />
        <meta name="twitter:app:name:googleplay" content="Eventbrite: EduDAO" />
        <meta
          name="twitter:app:url:googleplay"
          content="com-eventbrite-attendee://event/360344799997/?referrer=eandurlxtcar&amp;"
        />
        <meta
          name="twitter:app:id:googleplay"
          content="com.eventbrite.attendee"
        />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTM_CODE}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GTM_CODE}');
        `}
      </Script>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

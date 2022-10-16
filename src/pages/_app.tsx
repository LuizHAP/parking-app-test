import { Header } from '@/components/Header'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { globalStyles } from '@/styles/globalStyles'
import { AppProvider } from '@/contexts'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <title>Parking App</title>
        <meta name="description" content="A app to control a parking lot" />
      </Head>

      <AppProvider>
        <Header />
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default MyApp

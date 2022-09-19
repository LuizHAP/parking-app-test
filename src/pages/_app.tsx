import { Header } from '@/components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { globalStyles } from '@/styles/globalStyles'

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <title>Parking App</title>
        <meta name="description" content="A app to control a parking lot" />
      </Head>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </>
  )
}

export default App

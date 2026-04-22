import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { BuyWith, Footer, Header } from '@/components/_ui'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <BuyWith />
      <Footer />
    </>
  )
}

import { BuyWith, Footer, Header } from '../components/_ui'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <body className='w-screen'>
        <Head />
        <BuyWith/>
        <Main />
        <NextScript />
       <Footer />
      </body>
    </Html>
  )
}

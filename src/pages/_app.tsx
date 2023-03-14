import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { FC } from 'react'
import Layout from '../common/Layout'
import Wallet
 from '@/context/Wallet'
const App: FC<AppProps> = ({Component, pageProps}) => {
  return(
    <Wallet>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </Wallet>
  )
}

export default App

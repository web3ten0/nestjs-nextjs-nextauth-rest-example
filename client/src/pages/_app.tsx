import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import { ChakraProvider } from "@chakra-ui/react";
import DefaultLayout from '@/layouts/default'

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </SessionProvider>
  )
}
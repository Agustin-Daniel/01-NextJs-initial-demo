import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'


type NextPageLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => ReactNode;
}

type AppPropsLayout = AppProps & {
  Component: NextPageLayout;
}


export default function App({ Component, pageProps }: AppPropsLayout) {

  const getLayout = Component.getLayout || ((page) => page);


  return getLayout( <Component {...pageProps} />)
}

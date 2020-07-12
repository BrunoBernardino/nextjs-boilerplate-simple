import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import {
  defaultTitle,
  defaultDescription,
  defaultKeywords,
} from 'lib/constants';

import 'styles/main.scss';
import 'styles/_common.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{defaultTitle}</title>
        <meta property="og:title" content={defaultTitle} />
        <meta name="description" content={defaultDescription} />
        <meta name="keywords" content={defaultKeywords} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

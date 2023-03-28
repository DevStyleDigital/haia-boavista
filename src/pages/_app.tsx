import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LayoutProvider } from 'context/Layout';

import 'swiper/css';
import 'swiper/css/grid';

const MyApp: BTypes.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>HAIA BOA VISTA</title>
      </Head>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </>
  );
};

export default MyApp;

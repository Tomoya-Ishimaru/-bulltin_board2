import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/templates/layout";
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from "react-redux";
import store from "../hooks/stores";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Provider>
    </ChakraProvider> 
  );
}

export default MyApp

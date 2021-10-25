import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../components/Layout';
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <>      
      <UserProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  );
}
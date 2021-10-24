import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/global.scss'

export default function App({ Component, pageProps }) {
  return (
    <>      
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}
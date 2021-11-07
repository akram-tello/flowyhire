import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/global.scss'
import 'antd/dist/antd.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  );
}
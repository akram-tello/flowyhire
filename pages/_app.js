import React, { useState, useEffect } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import '../styles/global.scss'
import 'antd/dist/antd.css'
import PuffLoader from "react-spinners/PuffLoader";

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {
        loading ? 
        <div className="sweet-loading loader">
          <PuffLoader
            color={'#DD3245'}
            loading={loading}
            size={50}
          />
          {/* <p>Loading...</p> */}
        </div>
        :
        <UserProvider>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </UserProvider>
      }   
    </>
  );
}
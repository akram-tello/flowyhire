import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
// import Styles from './Layout.module.scss'
const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <main>
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Layout
import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { StyledContainer } from "./LayoutElements";

const Layout = ({ children , border }) => {
    return (
        <>
            <Navbar />
            <StyledContainer border={border}>{children}</StyledContainer>
            <Footer />
        </>
    )
}
export default Layout
import React from 'react'
import { Container } from "./LayoutElements";

const Layout = ({ children, border }) => {
    return (
        <>
            <Container border={border}>{children}</Container>
        </>
    )
}
export default Layout
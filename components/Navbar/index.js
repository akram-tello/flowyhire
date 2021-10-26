import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { NavContainer, Navbar, DemoBtn, NavBtn, Logo } from './NavbarElements';
import Pulse from 'react-reveal/Pulse';

const index = () => {
    const { user } = useUser();
    return (
        <>
            <Navbar
                className="navbar navbar-expand-lg navbar-light fixed-top">
                <NavContainer
                    className="container-fluid">
                    <Logo
                        src='/LOGO.png'
                        width={182}
                        height={30}
                    />
                    {/* <a className="navbar-brand logo" href="#"></a> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span
                            className="navbar-toggler-icon"
                        />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNav">
                        <ul
                            className="navbar-nav mr-auto pl-lg-4">
                            {/* only show login if there is no user */}
                            {!user && (
                                <>
                                    <li className="nav-item rounded">
                                        <NavBtn
                                            className="nav-link active"
                                            aria-current="page"
                                            href="/" activeStyle>
                                            <i className="bi bi-house-fill me-2" />
                                            Home
                                        </NavBtn>
                                    </li>
                                    <li className="nav-item rounded">
                                        <NavBtn
                                            className="nav-link active"
                                            aria-current="page"
                                            href="/pricing" activeStyle>
                                            <i className="bi bi-house-fill me-2" />
                                            Pricing
                                        </NavBtn>
                                    </li>
                                    <li className="nav-item rounded">
                                        <NavBtn
                                            className="nav-link active"
                                            aria-current="page"
                                            href="/global_hiring_guide" activeStyle>
                                            <i className="bi bi-house-fill me-2" />
                                            Global Hiring Guide
                                        </NavBtn>
                                    </li>
                                </>
                            )}
                            {/* if there is user, show the user info and logout btn */}
                            {user && (
                                <>
                                    <img
                                        src={user.picture}
                                        className="rounded-circle"
                                        width="50"
                                        height="50" />
                                    <p>{user.name}</p>
                                    <li className="nav-item rounded">
                                        <a
                                            className="btn btn-outline-danger"
                                            href="/api/auth/logout">
                                            <i className="bi bi-telephone-fill me-2" />
                                            logout
                                        </a>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav">
                        <ul
                            className="navbar-nav mr-auto pl-lg-4">
                            <li
                                className="nav-item rounded">
                                <NavBtn
                                    className="btn" href="/api/auth/login" activeStyle>
                                    <i className="bi bi-telephone-fill me-2"/>
                                    login
                                </NavBtn>
                            </li>
                            <li className="nav-item rounded">
                                <Pulse>
                                    <DemoBtn
                                        className="btn btn-outline-secondary"
                                        href="#"><i className="bi bi-telephone-fill me-2" />
                                        Request a Demo
                                    </DemoBtn>
                                </Pulse>
                            </li>
                        </ul>
                    </div>
                </NavContainer>
            </Navbar>
        </>
    )
}

export default index

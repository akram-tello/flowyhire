import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { NavContainer, Navbar, DemoBtn, NavBtn, Logo } from './NavbarElements';
import Pulse from 'react-reveal/Pulse';

const index = () => {
    const { user } = useUser();
    return (
        <>
            <Navbar
                className="navbar navbar-expand-lg navbar-light fixed-top shadow">
                <NavContainer
                    className="container-fluid">
                    <Logo
                        src="https://uploads-ssl.webflow.com/615c1a090c4d2f60e01faad3/615c1d123404b3d35c6fb81e_flowyhire.png"
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
                    {!user && (
                        <>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNav">
                                <ul
                                    className="navbar-nav mr-auto pl-lg-4">
                                    {/* only show login if there is no user */}
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
                                            href="/contact_us" activeStyle>
                                            <i className="bi bi-house-fill me-2" />
                                            Contact Us
                                        </NavBtn>
                                    </li>
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
                                            <i className="bi bi-telephone-fill me-2" />
                                            login
                                        </NavBtn>
                                    </li>
                                    <li className="nav-item rounded">
                                        <Pulse>
                                            <DemoBtn
                                                className="btn btn-outline-secondary"
                                                href="https://calendly.com/flowyteam/flowyhire?month=2021-11" target="_blank"><i className="bi bi-telephone-fill me-2" />
                                                Demo
                                            </DemoBtn>
                                        </Pulse>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                    {/* if there is user, show the user info and logout btn */}
                    {user && (
                        <>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNav">
                                <ul
                                    className="navbar-nav mr-auto pl-lg-4">
                                    {/* only show login if there is no user */}
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
                                            href="/contact_us" activeStyle>
                                            <i className="bi bi-house-fill me-2" />
                                            Contact Us
                                        </NavBtn>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="collapse navbar-collapse justify-content-end"
                                id="navbarNav">
                                <ul
                                    className="navbar-nav mr-auto pl-lg-4">
                                    <img
                                        src={user.picture}
                                        className="rounded-circle mr-sm-5"
                                        width="30"
                                        height="30" />
                                    <li class="nav-item mt-sm-2"> {user.name}</li>
                                    <li
                                        className="nav-item rounded">
                                        <NavBtn
                                            className="btn" href="/api/auth/logout" activeStyle>
                                            <i className="bi bi-telephone-fill me-2" />
                                            logout
                                        </NavBtn>
                                    </li>
                                    <li className="nav-item rounded">
                                        <Pulse>
                                            <DemoBtn
                                                className="btn btn-outline-secondary"
                                                href="https://calendly.com/flowyteam/flowyhire?month=2021-11" target="_blank"><i className="bi bi-telephone-fill me-2" />
                                                Demo
                                            </DemoBtn>
                                        </Pulse>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </NavContainer>
            </Navbar>
        </>
    )
}

export default index

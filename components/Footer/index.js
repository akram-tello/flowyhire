import React from "react";
import { Container } from "../Layout/LayoutElements";
import { Logo } from "./FooterElements";
const index = () => {
    return (
        <>
            <footer class="footer-section">
                <div class="">
                    <Container>
                        <div class="footer-content pt-5 pb-5">
                            <div class="row">
                                <div class="col-xl-5 col-lg-5 mb-50">
                                    <div class="footer-widget">
                                        <div class="footer-logo">
                                            <Logo
                                                src="https://uploads-ssl.webflow.com/615c1a090c4d2f60e01faad3/615c1d123404b3d35c6fb81e_flowyhire.png"
                                                width={182}
                                                height={30}
                                            />
                                        </div>
                                        <div class="footer-text">
                                            <p>Hire anyone, anywhere in a new country in minutes</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><a href="#">Global Hiring Guide</a></li>
                                            <li><a href="#">Hire Employees</a></li>
                                            <li><a href="#">Hire Contractors</a></li>
                                            <li><a href="#">Run Global Payroll</a></li>
                                            <li><a href="#">Integrations</a></li>
                                            <li><a href="#">Open API</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Latest News</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                            <h3>Resources</h3>
                                        </div>
                                        <div class="footer-text mb-25">
                                            <ul>
                                                <li><a href="#">About</a></li>
                                                <li><a href="#">Blog </a></li>
                                                <li><a href="#">Support Hub</a></li>
                                                <li><a href="#">Run Global Payroll</a></li>
                                                <li><a href="#">Global Hiring Guide</a></li>
                                                <li><a href="#">Partners Program</a></li>
                                                <li><a href="#">Affiliates</a></li>
                                                <li><a href="#">Case Studies</a></li>
                                                <li><a href="#">Careers</a></li>
                                            </ul>
                                        </div>
                                        <div class="subscribe-form">
                                            <form action="#">

                                                <button><i class="fab fa-telegram-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div class="footer-content pt-5 pb-5">
                    <Container>
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p>© Copyright Flowyhire 2021. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div class="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default index;

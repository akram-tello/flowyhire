import React from "react";
import { Container } from "../Layout/LayoutElements";
import { logo } from "./FooterElements";
const index = () => {
    return (
        <>
            <footer class="footer-section">
                <div class="footer-content pt-5 pb-5">
                    <Container>
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 text-center text-lg-left">
                                <div class="copyright-text">
                                    <p class="h2">© Copyright Flowyhire 2021. All Rights Reserved.</p>
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

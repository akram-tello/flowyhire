import React from "react";
import { Container } from "../Layout/LayoutElements";
// import { logo } from "./FooterElements";
const index = () => {
    return (
        <>
            <footer class="footer-section-flowyhire">
                <div class="footer-content pt-3 pb-5">
                    <Container>
                        <div class="footer-btm pt-4 text-center">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="copyright text-light-flowyhire">
                                    © Copyright <a href="#" class="text-red-flowyhire">FlowyHire</a> 2021. All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4 mb-0">
                                <div class="col-lg-12 text-cneter text-lg-right">
                                    <ul class="list-inline footer-socials">
                                        <li class="list-inline-item"><a href="https://www.facebook.com/flowyteam" class="text-red-flowyhire"><img src="/img/facebook.png" /></a></li>
                                        <li class="list-inline-item"><a href="https://www.linkedin.com/company/flowyteam/" class="text-red-flowyhire"><img src="/img/linkedin.png" /></a></li>
                                        <li class="list-inline-item"><a href="https://twitter.com/flowy_team/" class="text-red-flowyhire"><img src="/img/twitter.png" /></a></li>
                                        <li class="list-inline-item"><a href="https://www.instagram.com/flowyteam/" class="text-red-flowyhire"><img src="/img/instagram.png" /></a></li>
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


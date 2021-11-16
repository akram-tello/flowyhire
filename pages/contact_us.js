import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EmailIllustrationSrc from "../public/img/logo.png";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../components/Layout/LayoutElements";
import { css } from "styled-components/macro"; //eslint-disable-lin



const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;

export class contact_us extends Component {
    static propTypes = {

    }

    render() {
        return (
            <Container>
                <section class="site-section" id="about-section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 section-title mb-5 mb-0-mob">
                                <p class="heading aos-init aos-animate contact-title" data-aos="fade-up" data-aos-delay="100">Want to know the secrets of performance management? <br />
                                    We will gladly ‘spill the beans’ as we are here to serve you</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                                <div class="row">
                                    <div class="col-12 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                                        <div class="unit-4 d-flex">
                                            <div class="unit-4-icon mr-4 mb-3"><span class="text-primary flaticon-head"></span></div>
                                            <div class="d-flex">
                                                <img src="/img/placeholder.png" alt="Image" class="img-fluid office-location-icon" />
                                                <div>
                                                    <p class="office-address"><b>Malaysia HQ</b></p>
                                                    <p class="contact-text">Flowy Sdn Bhd, 11A, 1st Floor, Jalan Telawi 3, 59100 Bangsar, Kuala Lumpur, Malaysia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                        <div class="unit-4 d-flex">
                                            <div class="unit-4-icon mr-4 mb-3"><span class="text-primary flaticon-smartphone"></span></div>
                                            <div class="contact-icon">
                                                <div class="icon-part">
                                                    {/* <i class="fa fa-whatsapp"></i> */}
                                                </div>
                                                <div class="icon-text">
                                                    <p class="office-address" ><b>WhatsApp Us</b></p>
                                                    <a class="office-address" target="_blank" href="https://api.whatsapp.com/send?phone=60178520210&amp;text=Hello%20FlowyTeam!">+60178520210</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                <div class="row">
                                    <div class="col-12 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                                        <div class="unit-4 d-flex">
                                            <div class="unit-4-icon mr-4 mb-3"><span class="text-primary flaticon-head"></span></div>
                                            <div class="d-flex">
                                                <img src="/img/placeholder.png" alt="Image" class="img-fluid office-location-icon" />
                                                <div>
                                                    <p class="office-address"><b>Germany Office</b></p>
                                                    <p class="contact-text">FlowyTeam Germany, Prinz-Eugen-Str. 7/II, 89134 Blaustein, Germany</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                        <div class="unit-4 d-flex">
                                            <div class="unit-4-icon mr-4 mb-3"><span class="text-primary flaticon-smartphone"></span></div>
                                            <div class="icon-text">
                                                <p class="office-address"><b>Email Us</b></p>
                                                <a class="office-address" href="mailto:hello@flowyteam.com">hello@flowyteam.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Container>
        )
    }
}

export default contact_us

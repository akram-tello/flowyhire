import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EmailIllustrationSrc from "../public/img/logo.png";
import tw from "twin.macro";
import styled from "styled-components";
import { Container } from "../components/Layout/LayoutElements";
import { css } from "styled-components/macro"; //eslint-disable-lin
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PuffLoader from "react-spinners/PuffLoader";



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
            <>
            <Navbar />
            <Container>
                <section class="" id="contact">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="title text-center">
                                    <h2 class="mt-5rem title-text">Contact Us</h2>
                                    <span class="border"></span>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum reiciendis quasi itaque, obcaecati atque sit!</p> */}
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="contact-meta-block">
                                    <img src="/img/placeholder.png" alt="Image" class="img-fluid office-location-icon" />
                                    <div>
                                        <p class="office-address"><b>Malaysia HQ</b></p>
                                        <p class="contact-text description-text">Flowy Sdn Bhd, 11A, 1st Floor, Jalan Telawi 3, 59100 Bangsar, Kuala Lumpur, Malaysia</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="contact-meta-block">
                                    <img src="/img/placeholder.png" alt="Image" class="img-fluid office-location-icon" />
                                    <div>
                                        <p class="office-address"><b>Germany Office</b></p>
                                        <p class="contact-text description-text">FlowyHire Germany, Prinz-Eugen-Str. 7/II, 89134 Blaustein, Germany</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-5rem">
                            <div class="col-12 col-md-6">
                                <div class="contact-meta-block">
                                    <img src="/img/tel.png" alt="Image" class="img-fluid office-location-icon" />
                                    <div>
                                        <p class="office-address mb-4" ><b>WhatsApp Us</b></p>
                                        <a class="office-address" target="_blank" href="https://api.whatsapp.com/send?phone=60178520210&amp;text=Hello%20FlowyTeam!">+60178520210</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="contact-meta-block">
                                    <img src="/img/gmail.png" alt="Image" class="img-fluid office-location-icon" />
                                    <div>
                                        <p class="office-address mb-4"><b>Email Us</b></p>
                                        <a class="office-address" href="mailto:hello@flowyhire.com">hello@flowyteam.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </Container>
            <Footer />
            </>
        )
    }
}

export default contact_us



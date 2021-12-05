import React, { useState, useEffect } from 'react';
import { Container } from "../components/Layout/LayoutElements";
import IntroData from "../data/IntroData.json";
import OnBoardingData from "../data/OnBoardingDatga.json";
import PayrollData from "../data/PayrollData.json";
import ComplianceData from "../data/CompliamanceData.json";
import BenefitsData from "../data/BenfitsData.json";
import dynamic from 'next/dynamic'
import PuffLoader from "react-spinners/PuffLoader";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Block = dynamic(() => import("../components/Block"))

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ?
        <div className="sweet-loading loader">
          <PuffLoader
            color={'#DD3245'}
            loading={loading}
            size={50}
          />
          {/* <p>Loading...</p> */}
        </div>
        :
        <>
          <Navbar />
          <Container>
            <div class="mt-3em">
              <Block
                type="rightText"
                title={IntroData.title}
                subtitle_right={IntroData.subtitle_right}
                content={IntroData.text}
                button={IntroData.button}
                icon="hero_image.png"
                id="intro"
              />
            </div>

            <div class="mb-5">
              <Block
                type="leftText"
                title={OnBoardingData.title}
                subtitle_right={OnBoardingData.subtitle_right}
                subtitle_left={OnBoardingData.subtitle_left}
                content={OnBoardingData.text}
                icon="onboarding_image.png"
                id="onBoardeing"
              />
            </div>

            <Block
              type="rightText"
              title={ComplianceData.title}
              subtitle_right={ComplianceData.subtitle_right}
              subtitle_left={ComplianceData.subtitle_left}
              content={ComplianceData.text}
              icon="cpmpliance_image.png"
              id="compliance"
            />

            <div class="mb-3em-mob">
              <Block
                type="leftText"
                title={PayrollData.title}
                subtitle_right={PayrollData.subtitle_right}
                subtitle_left={PayrollData.subtitle_left}
                content={PayrollData.text}
                icon="payroll_image.png"
                id="payroll"
              />
            </div>

            <div class="mt-0">
              <Block
                type="rightText"
                title={BenefitsData.title}
                subtitle_left={BenefitsData.subtitle_left}
                subtitle_right={BenefitsData.subtitle_right}
                content={BenefitsData.text}
                icon="image.jpg"
                id="benefits"
              />
            </div>
          </Container>
          <Footer />
        </>
      }

    </>
  )
}

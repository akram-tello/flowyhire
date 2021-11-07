import { Container } from "../components/Layout/LayoutElements";
import IntroData from "../data/IntroData.json";
import OnBoardingData from "../data/OnBoardingDatga.json";
import PayrollData from "../data/PayrollData.json";
import ComplianceData from "../data/CompliamanceData.json";
import BenefitsData from "../data/BenfitsData.json";
import dynamic from 'next/dynamic'

const Block = dynamic(() => import("../components/Block"))

export default function Home() {
  return (
    <>
      <Container>
        <Block
          type="intro"
          title={IntroData.title}
          content={IntroData.text}
          button={IntroData.button}
          icon="hero_image.png"
          id="intro"
        />
        <Block
          type="onBoarding"
          title={OnBoardingData.title}
          content={OnBoardingData.text}
          icon="onboarding_image.png"
          id="onBoardeing"
        />
        {/* <Block
        type="payroll"
        title={PayrollData.title}
        content={PayrollData.text}
        icon="logo.png"
        id="payroll"
      />
      <Block
        type="compliance"
        title={ComplianceData.title}
        content={ComplianceData.text}
        icon="logo.png"
        id="compliance"
      />
      <Block
        type="benefits"
        title={BenefitsData.title}
        content={BenefitsData.text}
        icon="logo.png"
        id="benefits"
      /> */}
      </Container>
    </>
  )
}

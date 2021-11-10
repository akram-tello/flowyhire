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
          type="rightText"
          title={IntroData.title}
          subtitle_right={IntroData.subtitle_right}
          content={IntroData.text}
          button={IntroData.button}
          icon="hero_image.png"
          id="intro"
        />
        <Block
          type="leftText"
          title={OnBoardingData.title}
          subtitle_right={OnBoardingData.subtitle_right}
          subtitle_left={OnBoardingData.subtitle_left}
          content={OnBoardingData.text}
          icon="onboarding_image.png"
          id="onBoardeing"
        />
        <Block
        type="rightText"
        title={PayrollData.title}
        subtitle_right={PayrollData.subtitle_right}
        subtitle_left={PayrollData.subtitle_left}
        content={PayrollData.text}
        icon="payroll_image.png"
        id="payroll"
      />
      <Block
        type="leftText"
        title={ComplianceData.title}
        subtitle_right={ComplianceData.subtitle_right}
        subtitle_left={ComplianceData.subtitle_left}
        content={ComplianceData.text}
        icon="cpmpliance_image.png"
        id="compliance"
      />
      <Block
        type="rightText"
        title={BenefitsData.title}
        subtitle_left={BenefitsData.subtitle_left}
        subtitle_right={BenefitsData.subtitle_right}
        content={BenefitsData.text}
        icon="image.png"
        id="benefits"
      />
      </Container>
    </>
  )
}

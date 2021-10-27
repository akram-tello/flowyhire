import IntroHome from "./IntroHome";
import OnBoardingHome from "./OnBoardingHome";
import PayrollHome from './PayrollHome'
import ComplianceHome from './ComplianceHome'
import BenefitsHome from './BenefitsHome'

const ContentBlock = (props) => {
  if (props.type === "intro") return <IntroHome {...props} />;
  if (props.type === "onBoarding") return <OnBoardingHome {...props} />;
  if (props.type === "payroll") return <PayrollHome {...props} />;
  if (props.type === "compliance") return <ComplianceHome {...props} />;
  if (props.type === "benefits") return <BenefitsHome {...props} />;
  return null;
};

export default ContentBlock;
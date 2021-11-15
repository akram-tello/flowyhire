import React from 'react'
import {useState} from "react";
import { Container } from "../../components/Layout/LayoutElements";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "../../components/misc/Headings";
import { SectionDescription } from "../../components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons";
import { ContentWithPaddingXl } from "../../components/misc/Layouts";
// import { ReactComponent as SvgDecoratorBlob1 } from "./images/svg-decorator-blob-6.svg";
// import { ReactComponent as SvgDecoratorBlob2 } from "./images/svg-decorator-blob-7.svg";


const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlanDurationSwitcher = tw.div`block w-full max-w-xs sm:inline-block sm:w-auto border-2 rounded-full px-1 py-1 mt-8`;
const SwitchButton = styled.button`
  ${tw`w-1/2 sm:w-32 px-4 sm:px-8 py-3 rounded-full focus:outline-none text-sm font-bold text-gray-700 transition duration-300 border-none`}
  ${props => props.active && tw`bg-primary-500 text-gray-100 border-none`}
  background-color: ${props => props.active ? "#e95c5d" : "#f5f5f5"};
`;

const PlansContainer = tw.div`flex justify-center flex-col md:flex-row items-center md:items-start relative`;

const Plan = styled.div`{
  margin: 3rem;
  margin-top: 2rem;
  position: relative;
  z-index: 3;
  overflow: hidden;
  padding: 48px 50px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 5px;
  border-color: rgba(233, 92, 93, 0.41);
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 12%);
  text-align: center;
}`;

const PlanHeader = styled.div`
  ${tw`flex flex-col leading-relaxed py-8 -mx-8 bg-white rounded-t-lg`}
  .name {
    ${tw`font-bold text-xl`}
    margin-top: -1rem;
    margin-bottom: 16 px;
    color: #363d47;
    font-size: 32px;
    line-height: 1.36;
    font-weight: 700;
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
    color: #e95c5d;
  }
  .slash {
    ${tw`text-xl text-gray-500`}
    display: inline;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 500;
    color: #363d47;
  }
  .duration {
    ${tw`lowercase text-gray-500 font-medium tracking-widest`}
    display: inline;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 500;
    color: #363d47;
    letter-spacing: 0px !important;
  }
  .mainFeature {
    ${tw`text-gray-500 text-sm font-medium tracking-wide`}
    line-height: 1.72;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  .priceText{
    ${tw`text-gray-500 text-sm font-medium tracking-wide`}
    display: inline;
    font-size: 30px;
    line-height: 1.2;
    font-weight: 500;
    color:#363d47;
    margin-left:10px;
    letter-spacing: 0px !important;
  }
`;
const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 flex-1 text-sm`}
  .feature {
    ${tw`mt-5 first:mt-0 font-semibold text-gray-500`}
  }
`;

const PlanAction = tw.div`px-4 pb-8`;
const SpeakToUsBotton = styled(PrimaryButtonBase)`
  ${tw`rounded-full tracking-wider py-4 text-sm hover:shadow-xl transform hocus:translate-x-px hocus:-translate-y-px focus:shadow-outline border-none`}
  height: 48px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 15px 30px;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
    border-radius: 40px;
    background-color: #e95c5d;
    box-shadow: none;
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;
    font-family: Silka, sans-serif;
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    text-decoration: none;
    text-transform: none;
`;

// const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
// `;
// const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
//   ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-25 transform translate-x-2/3 translate-y-1/2 fill-current text-teal-300`}
// `;

const index = ({
  subheading = "Start for free.",
  heading = "Cancel any time.",
  description = "Billing is monthly and you don’t need a credit card to sign up. You'll only be charged once you've paid your new team member.",
  plans = null,
  primaryButtonText = "Speak to us",
  planDurations = [
    {
      text: "Month",
      switcherText: "Monthly",
    },
    {
      text: "Year",
      switcherText: "Yearly",
    }
  ]
}) => {
  const defaultPlans = [
    {
      name: "Hire contractors",
      durationPrices: ["$49", "$588"],
      priceText: "per contractor",
      mainFeature: "Stay compliant with local laws and reduce the time it takes to hire, pay and take care of your team.",
    },
    {
      name: "Hire employees",
      durationPrices: ["$499", "$5988"],
      priceText: "per employee",
      mainFeature: "Hire employees overseas without opening an entity or worrying about payroll, taxes or local laws",
    }
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  return (
    <Container>
      <ContentWithPaddingXl>

        <HeaderContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}

        <PlanDurationSwitcher>
          {planDurations.map((planDuration, index) => (
            <SwitchButton active={activeDurationIndex === index} key={index} onClick={() => setActiveDurationIndex(index)}>{planDuration.switcherText}</SwitchButton>
          ))}
        </PlanDurationSwitcher>

        </HeaderContainer>

        <PlansContainer >
          {plans.map((plan, index) => (
            <Plan key={index}>
              <PlanHeader>
              <span className="name">{plan.name}</span>
                <span className="mainFeature">{plan.mainFeature}</span>
                <span className="priceAndDuration">
                  <span className="price">{plan.durationPrices[activeDurationIndex]}</span>
                  <span className="priceText">{plan.priceText}</span>
                  <span className="slash"> / </span>
                  <span className="duration">{planDurations[activeDurationIndex].text}</span>
                </span>
              </PlanHeader>
              <PlanAction>
                <SpeakToUsBotton>{primaryButtonText}</SpeakToUsBotton>
              </PlanAction>
            </Plan>
          ))}
        </PlansContainer>

      </ContentWithPaddingXl>
      {/* <DecoratorBlob1 />
      <DecoratorBlob2 /> */}
    </Container>
  );
};
export default index
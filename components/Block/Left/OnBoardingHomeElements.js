import styled from "styled-components";

export const OnboardingContainer = styled("section")`
  position: relative;
  padding: 2rem 0rem;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 0rem 0 0rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: #869ab8;
  font-size: 1.2rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
  button:last-child {
    margin-left: 20px;
  }
`;

export const SubTitle = styled("span")`
    color: #4d4d4d !important;
    font-size: 1.5rem;
    line-height: 44px;
    font-style: normal;
    text-decoration: none;
  @media only screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }`;

  export const TitleText = styled("h2")`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
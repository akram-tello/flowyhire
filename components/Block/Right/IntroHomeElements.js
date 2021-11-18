import styled from "styled-components";

export const IntroContainer = styled("section")`
  position: relative;
  padding: 2rem 0rem;
  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: #869ab8;
  font-size: 1.2rem;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  @media only screen and (max-width: 575px) {
    padding-bottom: 0;
  }
`;

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

export const Button = styled("button")`
    background: #e95c5d;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    border: 1px solid #edf3f5;
    border-radius: 40px;
    padding: 13px 0;
    cursor: pointer;
    margin-top: 0.625rem;
    max-width: 180px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
    &:hover,
    &:active,
    &:focus {
      color: #fff;
      border: 1px solid rgb(255, 130, 92);
      background-color: rgb(255, 130, 92);
    }
    
    @media only screen and (max-width: 768px) {
      margin-bottom: 3rem;      
    }`;
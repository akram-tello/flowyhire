import { Row, Col } from "antd";
import { Image } from "../../Image";
import { Button } from "../../Button";
import {
  OnboardingContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  TitleText,
  SubTitle,
} from "./OnBoardingHomeElements";

const index = ({
  title,
  content,
  button,
  icon,
  id,
}) => {

  return (
    <OnboardingContainer>
        <Row justify="space-between" align="middle" id={id}>
        <Col lg={10} md={11} sm={12} xs={24}>
            <Image src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <TitleText><SubTitle>Go from offer letter to </SubTitle>{title}<SubTitle> in minutes</SubTitle></TitleText>
              <Content>{content}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => location.href = item.link}
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          
        </Row>
    </OnboardingContainer>
  );
};

export default index;
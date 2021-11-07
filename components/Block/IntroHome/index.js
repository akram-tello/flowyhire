import { Row, Col } from "antd";
import { Image } from "../../Image";
import { Button } from "../../Button";
import {
  IntroContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  TitleText,
  SubTitle,
} from "./IntroHomeElements";

const index = ({
  title,
  content,
  button,
  icon,
  id,
}) => {

  return (
    <IntroContainer>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={12} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <TitleText><SubTitle>Hire anyone,</SubTitle> {title}</TitleText>
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
          <Col lg={11} md={11} sm={12} xs={24}>
            <Image src={icon} width="130%" height="200%" />
          </Col>
        </Row>
    </IntroContainer>
  );
};

export default index;
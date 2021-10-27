import { Row, Col } from "antd";
import { Image } from "../../Image";
import { Button } from "../../Button";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./IntroHomeElements";

const index = ({
  title,
  content,
  button,
  icon,
  id,
}) => {

  return (
    <RightBlockContainer>
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={12} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        href="#"
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Image src={icon} width="100%" height="100%" />
          </Col>
        </Row>
    </RightBlockContainer>
  );
};

export default index;
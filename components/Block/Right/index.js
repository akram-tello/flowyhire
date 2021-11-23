import { Row, Col } from "antd";
import { Image } from "../../Image";
// import { Button } from "../../Button";
import {
  IntroContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  TitleText,
  SubTitle,
  Button,
} from "./IntroHomeElements";

const index = ({
  title,
  content,
  button,
  icon,
  id,
  subtitle_left,
  subtitle_right,
}) => {

  return (
    <IntroContainer>
        <Row justify="space-between" align="middle" id={id} 
          style={ id==="intro" ? { marginTop:'2rem'} : {} ||
               id==="benefits" ? { marginTop : '-5rem' } : {} } >
          <Col lg={12} md={11} sm={11} xs={24}>
            <ContentWrapper>
            <TitleText class="title-text"><SubTitle class="subtitle-text"> {subtitle_right} </SubTitle>{title}<SubTitle> {subtitle_left}</SubTitle></TitleText>
              <Content class="description-text">{content}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => location.href = item.link}
                        style={item.marginBottom}
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Image src={icon} width="100%" height="100%"/>
          </Col>
        </Row>
    </IntroContainer>
  );
};

export default index;
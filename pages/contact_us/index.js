import React from 'react'
import { Row, Col } from 'antd';
import { Container } from "../../components/Layout/LayoutElements";
import { contact_layout } from './ContantUsElements'

const contact_us = () => {
  return (
    <>
      <Container>
        <contact_layout>
          <Row>
            <Col span={12} offset={6}>
              col-12 col-offset-6
            </Col>
          </Row>
        </contact_layout>
      </Container>

    </>
  )
}

export default contact_us

import React from 'react';

import { PageTemplate, Header, Footer } from 'components';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Container>
        <Row>
          <Col>sideMenu(left)</Col>
          <Col xs={6}>Main Contents</Col>
          <Col>sideMenu(right)</Col>
        </Row>
      </Container>
    </PageTemplate>
  );
};

export default HomePage;

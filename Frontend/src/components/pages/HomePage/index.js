import React from 'react';

import { PageTemplate, Header, Footer } from 'components';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Container className="mt-4">
        <Tab.Container id="main-left-tabs" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  first tab contents
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  second tab contents
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </PageTemplate>
  );
};

export default HomePage;

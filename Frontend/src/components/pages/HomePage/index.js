import React from 'react';

import { PageTemplate, Header, Footer } from 'components';
import { Container, Row, Col, ListGroup, Tab } from 'react-bootstrap';

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Container>
        <Row>
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                Link1 Contents
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                Link2 Contents
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </PageTemplate>
  );
};

export default HomePage;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Center = styled.div`
  margin-top: 1em;
`;

const Footer = styled.footer`
  margin-top: auto;
`;

const GeneralPageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Center>{children}</Center>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};

GeneralPageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
};

export default GeneralPageTemplate;

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Logo, Title, SearchBar } from 'components';

const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem 10rem;
  background-color: yellowgreen;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  float: left;
`;

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Logo />
        <Title>Grea</Title>
        <SearchBar />
      </InnerWrapper>
    </Wrapper>
  );
};

Header.propTypes = {};
export default Header;

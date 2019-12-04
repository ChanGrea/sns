import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Logo, Title, SearchBar } from 'components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  background-color: yellowgreen;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Title />
      <SearchBar />
    </Wrapper>
  );
};

Header.propTypes = {};
export default Header;

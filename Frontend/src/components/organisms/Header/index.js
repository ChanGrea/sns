import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Logo, SearchBar } from 'components';
import { LogIn } from 'styled-icons/boxicons-regular/LogIn';
import { Menu } from 'styled-icons/boxicons-regular/Menu';

const Wrapper = styled.div`
  display: flex;
  background-color: yellowgreen;
`;

const InnerWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 100%;

  @media (min-width: 1012px) {
    padding: 0;
    width: 1012px;
  }

  @media (min-width: 960px) {
    padding: 0;
    width: 960px;
  }
`;

const LogoAndSearchBarWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-start;
  margin: auto;
`;

const AlertWrapper = styled.div`
  flex: 0 0 auto
  justify-content: flex-end;
  margin: auto;
`;

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <LogoAndSearchBarWrapper>
          <Logo />
          <SearchBar />
        </LogoAndSearchBarWrapper>
        <AlertWrapper>
          <LogIn size="24" />
          <Menu size="24" />
        </AlertWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

Header.propTypes = {};
export default Header;

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0.5em;
  width: 100%;
`;

const SearchForm = styled.div`
  background-color: #fff;
  border: 1px solid yellowgreen;
  border-radius: 3px;
  box-sizing: border-box;
  height: 26px;
  left: -1px;
  margin-top: 0;
  max-width: 448px;
  overflow: hidden;
  padding-left: 5px;
  padding-right: 48px;
  position: relative;
  width: auto;
`;


const SearchBar = () => {
  return (
    <Wrapper>
      <SearchForm />
    </Wrapper>
);
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0.5em;
  float: left;
`;

const SearchForm = styled.div`
  width: 400px;
  height: 30px;
  background-color: white;
`;


const SearchBar = ({ ...props }) => {
  return (
    <Wrapper>
      <SearchForm />
    </Wrapper>
);
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;

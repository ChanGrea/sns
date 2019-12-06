import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  margin: 0.5em;
  background-color: white;
`;

const SearchBar = ({ ...props }) => {
  return <Wrapper />;
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;

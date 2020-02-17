import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0.5em;
  display: inline-block;
  outline: none;
  position: relative;
`;

const Menu = ({ ...props }) => {
  return <Wrapper>menuItem</Wrapper>;
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;

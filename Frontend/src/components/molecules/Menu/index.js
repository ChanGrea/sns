import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MenuItem } from 'components';

const Wrapper = styled.div`
  margin: 0.5em;
  display: inline-block;
  outline: none;
  position: relative;
`;

const Menu = ({ ...props }) => {
  return (
    <Wrapper>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </Wrapper>
  );
};

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;

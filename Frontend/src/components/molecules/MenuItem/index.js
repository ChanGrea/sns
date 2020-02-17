import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'components';

const Wrapper = styled.div`
  margin: 0.5em;
  display: inline-block;
  outline: none;
  position: relative;
`;

const MenuItem = ({ ...props }) => {
  return (
    <Wrapper>
      <Link to={props.to}>{props.name}</Link>
    </Wrapper>
  );
};

MenuItem.propTypes = {};

MenuItem.defaultProps = {};

export default MenuItem;

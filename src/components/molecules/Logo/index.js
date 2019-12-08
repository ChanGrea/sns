import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const styles = css`
  background-color: purple;
  float: left;

  background-repeat: no-repeat;
  background-size: 33px 690px;
  background-position: 0 -33px;
  display: block;
  height: 26px;
  outline: none;
  overflow: hidden;
  text-indent: -999px;
  white-space: nowrap;
  width: 26px;
`;

const Wrapper = styled.div`
  margin: 0.5em;
  display: inline-block;
  outline: none;
  position: relative;
`;

const LinkImg = styled(({ theme, reverse, palette, ...props }) => (
  <NavLink {...props} />
))`
  ${styles}
`;

const Img = styled.img`
  ${styles}
`;

const Logo = ({ ...props }) => {
  const { to } = props;
  if (to) {
    return (
      <Wrapper>
        <LinkImg {...props} />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Img {...props} />
    </Wrapper>
  );
};

Logo.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string,
};

Logo.defaultProps = {
  palette: 'primary',
};

export default Logo;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const styles = css`
  width: 50px;
  height: 50px;
  background-color: purple;
`;

export const LinkLogoImg = styled(({ theme, reverse, palette, ...props }) => (
  <NavLink {...props} />
))`
  ${styles}
`;

export const LogoImg = styled.img`
  ${styles}
`;

const Logo = ({ ...props }) => {
  const { to } = props;
  if (to) {
    return <LinkLogoImg {...props} />;
  }
  return <LogoImg {...props} />;
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

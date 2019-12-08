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
  height: 24px;
  outline: none;
  overflow: hidden;
  text-indent: -999px;
  white-space: nowrap;
  width: 24px;
`;

const Wrapper = styled.div`
  margin: 7px 0;
  margin-left: -2px;
  margin-right: 5px;
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

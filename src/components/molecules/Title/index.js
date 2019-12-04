import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

export const Wrapper = styled.div`
  width: 80px;
  height: 30px;
  margin: 0.5em;
  background-color: white;
`;

export const Text = styled.p`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-size: 1rem;
  line-height: 1.3;
`;

const Title = ({ ...props }) => {
  return (
    <Wrapper>
      <Text />
    </Wrapper>
  );
};

Title.propTypes = {};

Title.defaultProps = {};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

const Wrapper = styled.div`
  margin: 0.5em;
  float: left;
`;

const Text = styled.h1`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  margin: 0;
`;

const Title = ({ children }) => {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  );
};

Title.propTypes = {
  children: PropTypes.string,
};

Title.defaultProps = {
  children: '',
};

export default Title;

import React from 'react';
import styled from 'styled-components';
import { key, palette } from 'styled-theme';

import { Paragraph, Link } from 'components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  background-color: ${palette('grayscale', 1, true)};
`;

const Credits = styled(Paragraph)`
  font-style: ${key('fontStyle.italic')};
  vertical-align: center;
  text-align: center;
  margin: 0;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Credits>
        Made by <Link href="https://github.com/changrea">ChanGrea</Link>
      </Credits>
    </Wrapper>
  );
};

export default Footer;

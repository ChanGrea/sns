import React from 'react';

import { PageTemplate, Header, Footer, Paragraph, Link } from 'components';

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Paragraph>HomePage</Paragraph>
      <Link href="https://github.com/changrea">changrea</Link>
    </PageTemplate>
  );
};

export default HomePage;

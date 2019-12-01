import React from 'react';

import { PageTemplate, Header, Footer } from 'components';

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <h1>HomePage</h1>
      <p>contents</p>
    </PageTemplate>
  );
};

export default HomePage;

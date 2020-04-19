import React from 'react';

import {
  GeneralPageTemplate,
  SideMenu,
  Header,
  Footer,
  Feed,
  WriteForm,
} from 'components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const HomePage = () => {
  return (
    <GeneralPageTemplate header={<Header />} footer={<Footer />}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SideMenu />
          </Grid>
          <Grid item xs={8}>
            <Feed />
            <WriteForm />
          </Grid>
        </Grid>
      </Container>
    </GeneralPageTemplate>
  );
};

export default HomePage;

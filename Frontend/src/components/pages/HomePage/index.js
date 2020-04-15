import React from 'react';

import { PageTemplate, SideMenu, Header, Footer } from 'components';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SideMenu />
          </Grid>
          <Grid item xs={8}>
            <Typography>right</Typography>
          </Grid>
        </Grid>
      </Container>
    </PageTemplate>
  );
};

export default HomePage;

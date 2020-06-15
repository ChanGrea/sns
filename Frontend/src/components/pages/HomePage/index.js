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

const sideMenuItems = {
  menus: [
    {
      key: 1,
      value: '뉴스피드',
      link: '/main/feeds',
    },
    {
      key: 2,
      value: '피드 작성',
      link: '/main/feeds/write',
    },
    {
      key: 3,
      value: '내 정보',
      link: '/main/myInfo',
    },
  ],
};

const HomePage = () => {
  return (
    <GeneralPageTemplate header={<Header />} footer={<Footer />}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SideMenu menuItems={sideMenuItems.menus} />
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

import React from 'react';

import { SimplePageTemplate, LoginForm, Header, Footer } from 'components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <SimplePageTemplate header={<Header />} footer={<Footer />}>
      <Container maxWidth="sm">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Login" />
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </SimplePageTemplate>
  );
};

export default LoginPage;

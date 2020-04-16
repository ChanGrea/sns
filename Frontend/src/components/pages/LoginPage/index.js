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
  alignCenter: {
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <SimplePageTemplate header={<Header />} footer={<Footer />}>
      <Container maxWidth="sm">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Login" className={classes.alignCenter} />
          <CardContent className={classes.alignCenter}>
            <LoginForm />
          </CardContent>
          <CardActions className={classes.alignCenter}>
            <Button size="small" color="primary">
              LOGIN
            </Button>
            <Button size="small">JOIN</Button>
          </CardActions>
        </Card>
      </Container>
    </SimplePageTemplate>
  );
};

export default LoginPage;

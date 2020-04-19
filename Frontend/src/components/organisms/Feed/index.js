import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
  },
  contents: {
    textAlign: 'center',
    display: 'block',
  },
  footer: {
    display: 'flex',
  },
}));

const Feed = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        Feed Title
      </Typography>
      <Box component="div" className={classes.contents}>
        <img src="/images/sample.png" alt="feed_img_sample" />
        <Box component="div">
          <p>description</p>
        </Box>
      </Box>
      <Box component="div" className={classes.footer}>
        <Button fullWidth>좋아요</Button>
        <Button fullWidth>댓글달기</Button>
        <Button fullWidth>공유하기</Button>
      </Box>
    </Paper>
  );
};

Feed.propTypes = {};
export default Feed;

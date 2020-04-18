import React from 'react';
import {
  makeStyles,
  Paper,
  TextField,
  Avatar,
  InputAdornment,
} from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  profile: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  form: {
    margin: theme.spacing(1),
  },
}));

const WriteForm = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TextField
        id="outlined-full-width"
        label="내용"
        style={{ margin: 8 }}
        placeholder="내용을 입력하세요"
        fullWidth
        multiline
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Avatar className={classes.profile}>N</Avatar>
            </InputAdornment>
          ),
        }}
        margin="normal"
        variant="outlined"
      />
    </Paper>
  );
};

WriteForm.propTypes = {};
export default WriteForm;

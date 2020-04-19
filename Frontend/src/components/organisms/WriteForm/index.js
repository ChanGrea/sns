import React from 'react';
import {
  makeStyles,
  Paper,
  TextField,
  Avatar,
  InputAdornment,
  Button,
  Box,
  Chip,
  Typography,
} from '@material-ui/core';
import { deepOrange, blue } from '@material-ui/core/colors';

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
  option: {
    margin: theme.spacing(1),
  },
}));

const WriteForm = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box className={classes.form}>
        <Typography variant="subtitle1" align="center">
          피드 작성하기
        </Typography>
        <TextField id="standard-basic" label="제목" fullWidth />
        <TextField
          id="outlined-full-width"
          label="내용"
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
      </Box>
      <Box className={classes.option}>
        <Chip label="사진/동영상" />
      </Box>
      <Box>
        <Button variant="contained" color="primary" fullWidth>
          게시하기
        </Button>
      </Box>
    </Paper>
  );
};

WriteForm.propTypes = {};
export default WriteForm;

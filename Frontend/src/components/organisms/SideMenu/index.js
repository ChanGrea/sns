import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const SideMenu = props => {
  const classes = useStyles();
  const { menuItems } = props;

  return (
    <Paper className={classes.paper}>
      <MenuList>
        {menuItems.map(item => {
          return (
            <MenuItem component={Link} key={item.key} to={item.link}>
              {item.value}
            </MenuItem>
          );
        })}
      </MenuList>
    </Paper>
  );
};

SideMenu.propTypes = {
  menuItems: PropTypes.array,
};
export default SideMenu;

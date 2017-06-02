import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const Header = () => (
  <AppBar>
        <Toolbar>
          <IconButton contrast>
            <MenuIcon />
          </IconButton>
          <Typography type="title" colorInherit>Title</Typography>
        </Toolbar>
      </AppBar>
);

export default Header;

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Header', {
  toolbar: {
    position: 'fixed'
  },
  root: {
      position: 'relative',
      marginTop: 100,
      width: '100%'
  },
  flex: {
    flex: 1
  }
})

class Header extends React.Component {
  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <AppBar className={classes.toolbar}>
          <Toolbar>
          {
            //<IconButton contrast>
              //<MenuIcon />
            //</IconButton>
          }
            <Typography className={classes.flex} type="title" colorInherit>To-Do</Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Header);

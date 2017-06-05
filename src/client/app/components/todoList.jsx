import React, {Component} from 'react'
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import FolderIcon from 'material-ui-icons/Folder';
import { withStyles, createStyleSheet } from 'material-ui/styles';

import TodoItem from './TodoItem'

const styleSheet = createStyleSheet('TodoList', theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
}));

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      testItems: [{title: "Say Hello", completed: false},{title: "Meet a new Friend", completed: true},{title: "Add redux logic", completed: false}]
    }
  }
  render() {
    const classes = this.props.classes;
    console.log(this.state)
    return (
      <Grid item className={classes.root}>
        <Paper>
          <List dense={false}>
            {this.state.testItems.map((item) => {
                return <TodoItem title={item.title} completed={item.completed} />
              })
            }
          </List>
        </Paper>
      </Grid>
    )
  }
}


export default withStyles(styleSheet)(TodoList);

import React, {Component} from 'react'
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import FolderIcon from 'material-ui-icons/Folder';

class TodoList extends Component {
  render() {
    return (
      <Grid item>
        <Paper>
          <List dense={false}>
            <ListItem button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="To-do Item"
                secondary='Secondary text'
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="To-do Item 2"
                secondary='Secondary text'
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="To-do Item 3"
                secondary='Secondary text'
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText
                primary="To-do Item 4"
                secondary='Secondary text'
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    )
  }
}


export default TodoList

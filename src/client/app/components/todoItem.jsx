import React, {Component} from 'react'
import {
  ListItem,
  ListItemText,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

class TodoItem extends Component {
  render() {
    return (
      <ListItem button>
        <Checkbox
          ripple={true}
          checked={this.props.completed}
        />
        <ListItemText primary={this.props.title} />
      </ListItem>
    )
  }
}


export default TodoItem

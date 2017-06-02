import React, { Component } from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Grid from 'material-ui/Grid';

import Header from './components/header'
import TodoList from './components/todoList'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Grid container
          align={'center'}
          direction={'column'}
          justify={'flex-start'}>

          <TodoList/>
        </Grid>
      </div>
    )
  }
}

render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('app'))

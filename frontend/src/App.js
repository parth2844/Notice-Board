import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/pages/homepage'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const theme = createMuiTheme({
  typography: {
      fontFamily: [
      'Krona One',
      'sans-serif',
      ].join(','),
  }
});


export default App;

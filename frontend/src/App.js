import React, {useReducer} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/pages/homepage'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Dashboard from './components/pages/dashboard';
import GroupDetails from './components/pages/groupdetails'
import Error from './components/pages/error'
import reducer from './Reducer'

export const AppContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, { userId: '' })
  
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{state, dispatch}}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/group' exact component={GroupDetails} />
          <Route component={Error} />
        </Switch>
      </Router>
      </AppContext.Provider>
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

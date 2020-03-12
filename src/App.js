import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import ListaInmuebles from "./components/views/ListaInmuebles";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme/theme';
import AppNavbar from './components/layout/AppNavbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import RegisterUser from './components/security/RegisterUser';
import Login from "./components/security/Login";

class App extends Component {
  render() {
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <AppNavbar/>
                <Grid container>
                    <Switch>
                        <Route path="/" exact component={ListaInmuebles}></Route>
                        <Route path="/seguridad/registerUser" exact component={RegisterUser}></Route>
                        <Route path="/seguridad/login" exact component={Login}></Route>
                    </Switch>
                </Grid>
            </MuiThemeProvider>
        </Router>
    );
  }
}

export default App;

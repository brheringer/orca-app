import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountContext from '../contexts/AccountContext';
import AccountsList from './accounts/AccountsList';
import AddAccount from './accounts/AddAccount';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import MonthlyPanel from './monthly-panel/MonthlyPanel';
import MonthlyPanelContext from '../contexts/MonthlyPanelContext';

const App = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <div className="uk-container">
                    <Switch>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/create">
                            <AccountContext>
                                <AddAccount></AddAccount>
                            </AccountContext>
                        </Route>
                        <Route path="/accounts">
                            <AccountContext>
                                <AccountsList></AccountsList>
                            </AccountContext>
                        </Route>
                        <Route path="/monthly-panel">
                            <MonthlyPanelContext>
                                <MonthlyPanel></MonthlyPanel>
                            </MonthlyPanelContext>
                        </Route>
                        <Route path="/">
                            <Home></Home>
                        </Route>
                    </Switch>
            </div>
        </Router>
    );
}

export default App;
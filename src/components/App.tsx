import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountContext from '../contexts/AccountContext';
import AccountsList from './accounts/AccountsList';
import AddAccount from './accounts/AddAccount';
import Navbar from './Navbar';

const App = () => {
    return (
        <Router>
            <Navbar></Navbar>
            <div className="uk-container">
                <AccountContext>
                    <Switch>
                        <Route path="/create">
                            <AddAccount></AddAccount>
                        </Route>
                        <Route path="/">
                            <AccountsList></AccountsList>
                        </Route>
                    </Switch>
                </AccountContext>
            </div>
        </Router>
    );
}

export default App;
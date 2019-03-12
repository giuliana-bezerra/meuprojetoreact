import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Contato from './pages/contato';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/sobre" component={Sobre}/>
                        <Route path="/contato" component={Contato}/>
                    </Switch>
                </App>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

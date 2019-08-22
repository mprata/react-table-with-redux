import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from "./components/App";
import ShipmentList from "./components/ShipmentList";
import ShipmentDetails from "./components/ShipmentDetails";
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/shipments" component={ShipmentList} />
                <Route path="/shipmentdetails/:id" component={ShipmentDetails} />
            </div>
        </Router>
    </Provider>,
    document.querySelector('#root')
);

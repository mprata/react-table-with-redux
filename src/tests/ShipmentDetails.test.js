import React from "react";
import configureMockStore from "redux-mock-store";
import { Provider } from 'react-redux';
import ShipmentDetails from "../components/ShipmentDetails";
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';

const initialState = {};
const createMockStore = configureMockStore(initialState);
const props = {
    selectedShipment: {
        "id": "S1000",
        "name": "My First",
        "cargo": [
            {
                "type": "Fabric",
                "description": "1000 Blue T-shirts",
                "volume": "2"
            },
            {
                "type": "Fabric",
                "description": "2000 Green T-shirts",
                "volume": "3"
            }
        ],
        "mode": "sea",
        "type": "FCL",
        "destination": "Saarbrücker Str. 38, 10405 Berlin",
        "origin": "Shanghai Port",
        "services": [
            {
                "type": "customs"
            }
        ],
        "total": "1000",
        "status": "ACTIVE",
        "userId": "U1000"
    }
};
const mockStore = createMockStore(props);

const routeParams = {
    match: {
        params: {
            id:"S1000"
        }
    }
};

it('ShipmentDetails component should render', () => {
    const component = renderer.create(
        <Provider store={mockStore}>
            <Router><ShipmentDetails {...routeParams}/></Router>
        </Provider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('Check dom structure of shipment detail component, if the page is created correctly', () => {
    const { getByText } = render(
        <Provider store={mockStore}>
            <Router><ShipmentDetails {...routeParams}/></Router>
        </Provider>
    );

    expect(getByText(/Back/i)).toBeTruthy();
    expect(getByText(/S1000/i)).toBeTruthy();
    expect(getByText(/Update/i)).toBeTruthy();
    cleanup();
});
import React from "react";
import configureMockStore from "redux-mock-store";
import ShipmentList from "../components/ShipmentList";
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent, cleanup } from '@testing-library/react';

const initialState = {};
const createMockStore = configureMockStore(initialState);
const props = {
    shipments: [
        {
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
        },
        {
            "id": "S1001",
            "name": "New spring collection(2018)",
            "cargo": [
                {
                    "type": "Furniture",
                    "description": "300 Tables",
                    "volume": "20"
                },
                {
                    "type": "Furniture",
                    "description": "1500 Chairs",
                    "volume": "15"
                }
            ],
            "mode": "sea",
            "type": "FCL",
            "destination": "Saarbrücker Str. 38, 10405 Berlin",
            "origin": "Ningbo port",
            "services": [
                {
                    "type": "customs"
                },
                {
                    "type": "insurance",
                    "value": "100"
                }
            ],
            "total": "3000",
            "status": "ACTIVE",
            "userId": "U1002"
        }
    ]
};
const mockStore = createMockStore(props);

it('ShipmentList component should render', () => {
    const component = renderer.create(
        <Router><ShipmentList store={mockStore} /></Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('Check dom structure of shipment list component, if the list is created with correct details', () => {
    const { getByText } = render(<Router><ShipmentList store={mockStore} /></Router>);

    expect(getByText(/Shipment Details/i)).toBeTruthy();
    expect(getByText(/Name/i)).toBeTruthy();
    expect(getByText(/Mode/i)).toBeTruthy();
    expect(getByText(/Type/i)).toBeTruthy();
    expect(getByText(/Destination/i)).toBeTruthy();
    expect(getByText(/Origin/i)).toBeTruthy();
    expect(getByText(/Total/i)).toBeTruthy();
    expect(getByText(/Status/i)).toBeTruthy();
    expect(getByText(/Previous/i)).toBeTruthy();
    expect(getByText(/Next/i)).toBeTruthy();
    cleanup();
});
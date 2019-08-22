import shipmentFetchApi from "../apis/shipmentFetchApi";

export const fetchShipments = () => async (dispatch) => {
    const response = await shipmentFetchApi.get("/shipments");

    dispatch({ type: "FETCH_SHIPMENTS", payload: response.data })
};

export const fetchShipment = (id) => async (dispatch) => {
    const response = await shipmentFetchApi.get(`/shipments/${id}`);

    dispatch({ type: "SELECTED_SHIPMENT", payload: response.data })
};

export const editShipment = (id, formValues) => async (dispatch) => {
    const response = await shipmentFetchApi.patch(`/shipments/${id}`, formValues);

    dispatch({ type: "EDIT_SHIPMENT", payload: response.data })
};

export const selectedShipment = (shipment) => {
    return {
        type: "SELECTED_SHIPMENT",
        payload: shipment
    };
};
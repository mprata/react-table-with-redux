export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SHIPMENTS':
            return action.payload;
        case 'EDIT_SHIPMENT':
            return state.map(shipment => {
                if (shipment.id === action.payload.id) {
                    return action.payload;
                } else {
                    return shipment;
                }
            })
        default:
            return state;
    }
}
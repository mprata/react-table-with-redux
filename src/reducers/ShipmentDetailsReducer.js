export default (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_SHIPMENT':
            return action.payload;
        default:
            return state;
    }
}
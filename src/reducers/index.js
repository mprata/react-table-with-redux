import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import shipmentListReducer from "./shipmentListReducer";
import shipmentDetailsReducer from "./ShipmentDetailsReducer";

export default combineReducers({
    shipments: shipmentListReducer,
    selectedShipment: shipmentDetailsReducer,
    form: formReducer
});
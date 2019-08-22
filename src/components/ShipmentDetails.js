import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchShipment } from "../actions";

import CargoDetails from "./CargoDetails";
import SerivcesDetails from "./ServicesDetails";
import NameForm from "./NameForm";

class ShipmentDetails extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        if (this.props.shipment.length === 0) {
            this.props.fetchShipment(id);
        }
    }
    render() {
        if (!this.props.shipment.id) {
            return <div></div>
        }
        return (
            <div className="ui container">
                <div className="ui top attached header">
                    <Link to="/shipments">Back</Link>
                </div>
                <h5 className="ui attached header">ID</h5>
                <div className="ui attached segment">
                    <p>{this.props.shipment.id}</p>
                </div>
                <h5 className="ui attached header">Name</h5>
                <div className="ui attached segment">
                    <NameForm />
                </div>
                <h5 className="ui attached header">Cargo Details</h5>
                <div className="ui attached segment">
                    <CargoDetails cargo={this.props.shipment.cargo} />
                </div>
                <h5 className="ui attached header">Mode</h5>
                <div className="ui attached segment">
                    <p>{this.props.shipment.mode}</p>
                </div>
                <h5 className="ui attached header">
                    Type
                    </h5>
                <div className="ui attached segment">
                    <p>{this.props.shipment.type}</p>
                </div>
                <h5 className="ui attached header">
                    Destination
                    </h5>
                <div className="ui attached segment">
                    <p>{this.props.shipment.destination}</p>
                </div>
                <h5 className="ui attached header">
                    Origin
                    </h5>
                <div className="ui attached segment">
                    <p>{this.props.shipment.origin}</p>
                </div>
                <h5 className="ui attached header">
                    Services
                    </h5>
                <div className="ui attached segment">
                    <SerivcesDetails services={this.props.shipment.services} />
                </div>
                <h5 className="ui attached header">
                    Total
                    </h5>
                <div className="ui attached segment">
                    <p>{this.props.shipment.total}</p>
                </div>
                <h5 className="ui attached header">
                    Status
                    </h5>
                <div className="ui attached segment">
                    <p>{this.props.shipment.status}</p>
                </div>
                <h5 className="ui attached header">
                    User ID
                    </h5>
                <div className="ui attached segment">
                    <p>{this.props.shipment.userId}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { shipment: state.selectedShipment }
}

export default connect(mapStateToProps, { fetchShipment })(ShipmentDetails);
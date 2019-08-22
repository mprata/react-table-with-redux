import React from "react";
import { connect } from 'react-redux';
import { fetchShipments, selectedShipment } from '../actions';
import ReactTable from "react-table";
import { Link } from 'react-router-dom'
import "react-table/react-table.css";

class ShipmentList extends React.Component {
    componentDidMount() {
        if (this.props.shipments.length === 0) {
            this.props.fetchShipments();
        }
    }
    render() {
        return (
            <div className="ui container">
                <br />
                <strong>Shipment Details</strong>
                <br />
                <br />
                <ReactTable
                    getTrProps={(state, rowInfo, column) => {
                        return {
                            onClick: (event) => {
                                this.props.selectedShipment(rowInfo.original)
                            },
                        }
                    }}
                    data={this.props.shipments}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]).toLowerCase().indexOf(filter.value.toLowerCase()) > -1}
                    columns={[
                        {
                            Header: "ID",
                            accessor: "id",
                            Cell: e => <Link to={{ pathname: `/shipmentdetails/${e.value}`, state: { shipment: 90 } }} >{e.value}</Link>
                        },
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                        {
                            Header: "Mode",
                            accessor: "mode"
                        },
                        {
                            Header: "Type",
                            accessor: "type"
                        },
                        {
                            Header: "Destination",
                            accessor: "destination"
                        },
                        {
                            Header: "Origin",
                            accessor: "origin"
                        },
                        {
                            Header: "Total",
                            accessor: "total"
                        },
                        {
                            Header: "Status",
                            accessor: "status"
                        },
                        {
                            Header: "User ID",
                            accessor: "userId"
                        }
                    ]}
                    defaultPageSize={20}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shipments: state.shipments,
        selectedShipment: state.selectedShipment
    }
}

export default connect(
    mapStateToProps,
    { fetchShipments, selectedShipment }
)(ShipmentList);
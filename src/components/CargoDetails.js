import React from 'react';

class CargoDetails extends React.Component {
    renderList() {
        return this.props.cargo.map((cargo) => {
            return (
                <tr key={cargo.description}>
                    <td>{cargo.type}</td>
                    <td>{cargo.description}</td>
                    <td>{cargo.volume}</td>
                </tr>
            );
        });
    }

    render() {
        return <div><table className="ui collapsing table">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                {this.renderList()}
            </tbody>
        </table>
        </div>
    }
}

export default CargoDetails;
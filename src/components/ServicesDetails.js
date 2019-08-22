import React from 'react';

class SerivcesDetails extends React.Component {
    renderList() {
        return this.props.services.map((service) => {
            return (
                <tr key={service.type}>
                    <td>{service.type}</td>
                    <td>{service.value}</td>
                </tr>
            );
        });
    }

    render() {
        return <div><table className="ui collapsing table">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {this.renderList()}
            </tbody>
        </table>
        </div>
    }
}

export default SerivcesDetails;
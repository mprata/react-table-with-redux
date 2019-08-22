import React from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { editShipment } from '../actions';

class NameForm extends React.Component {
    onSubmit = (formValues) => {
        this.props.editShipment(formValues.id, formValues);
    }
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" component={this.renderInput} />
                <button className="ui button primary">Update</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'Please enter name';
    }
    return errors;
}

NameForm = reduxForm({
    form: "nameForm",
    validate
})(NameForm);

const mapStateToProps = state => {
    return { initialValues: state.selectedShipment }
};

NameForm = connect(mapStateToProps, { editShipment })(NameForm);

export default NameForm;
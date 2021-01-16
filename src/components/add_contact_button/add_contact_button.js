import React, {Fragment} from 'react';
import './add_contact_button.css';
import {Form} from '../form/form';

export class AddContactButton extends React.Component {
    state = {
        isShowForm: false,
    }

    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleForm() {
        this.setState({
            isShowForm: !this.state.isShowForm,
        });
    }

    handleSubmit(contact) {
        this.props.onAddContact(contact);
    }

    render() {
        const {isShowForm} = this.state;

        const form = isShowForm && <Form onFormSubmit={this.handleSubmit} onFormCancel={this.toggleForm} />

        return (
            <Fragment>
                <button className='add-contact' onClick={this.toggleForm}>
                    Добавить контакт
                </button>
                {form}
            </Fragment>
        );
    }
}

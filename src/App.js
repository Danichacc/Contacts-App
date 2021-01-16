import './App.css';
import React, {Fragment} from 'react';
import {Table} from './components/table/table';
import {AddContactButton} from './components/add_contact_button/add_contact_button';

class App extends React.Component {
    state = {
        contacts: [
            {
                name: 'Вася',
                surname: 'Пупкин',
                phone: '88005553535'
            },
            {
                name: 'Мурзик',
                surname: 'кот',
                phone: 'потерял',
            }
        ],
    }

    constructor(props) {
        super(props);
        this.handleAddContact = this.handleAddContact.bind(this);
    }

    handleAddContact(contact) {
        this.state.contacts.push(contact);
        let addedContact = this.state.contacts;
        this.setState({
            contacts: addedContact,
        });
    }

    render() {
        return (
            <Fragment>
                <Table contacts={this.state.contacts} />
                <AddContactButton onAddContact={this.handleAddContact} />
            </Fragment>
        );
    }
}

export default App;

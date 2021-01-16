import React from 'react';
import './table.css';

export class Table extends React.Component {
    render() {
        return (
            <table className='contacts-table'>
                <caption>Список контактов</caption>
                <tr>
                    <td>Имя</td>
                    <td>Фамилия</td>
                    <td>Телефон</td>
                </tr>
                {this.props.contacts.map(contact => (
                    <tr>
                        <td>{contact.name}</td>
                        <td>{contact.surname}</td>
                        <td>{contact.phone}</td>
                    </tr>
                ))}
            </table>
        );
    }
}

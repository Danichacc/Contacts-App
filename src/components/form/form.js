import React from 'react';
import './form.css';

export class Form extends React.Component {
    state = {
        name: '',
        surname: '',
        phone: '',
    }

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    submit() {
        this.props.onFormSubmit(this.state);
        this.cancel();
    }

    cancel() {
        this.props.onFormCancel();
        this.setState({
            name: '',
            surname: '',
            phone: '',
        });
    }

    changeInput(field) {
        return event => {
            this.setState({
                [field]: event.target.value,
            });
        }
    }

    render() {
        const namePattern = /^[A-Za-zА-Яа-я]+$/;
        const phonePattern = /^\d+$/;

        const isEnabled = this.state.name.match(namePattern)
                       && this.state.surname.match(namePattern)
                       && this.state.phone.match(phonePattern);

        return (
            <div className='form-contact'>
                <span className='form-legend'>Данные контакта</span>
                <label htmlFor='contact-name'>Имя</label>
                <input
                    type='text'
                    id='contact-name'
                    name='name'
                    pattern='[A-Za-zА-Яа-я]+'
                    maxLength='12'
                    value={this.state.name}
                    onChange={this.changeInput('name')}
                    required
                />
                <label htmlFor='contact-surname'>Фамилия</label>
                <input
                    type='text'
                    id='contact-surname'
                    name='surname'
                    pattern='[A-Za-zА-Яа-я]+'
                    maxLength='25'
                    value={this.state.surname}
                    onChange={this.changeInput('surname')}
                    required
                />
                <label htmlFor='contact-phone'>Телефон</label>
                <input
                    type='tel'
                    id='contact-phone'
                    name='phone'
                    pattern='[0-9]+'
                    maxLength='12'
                    value={this.state.phone}
                    onChange={this.changeInput('phone')}
                    required
                />
                <div className='form-controls'>
                    <button className='button-save' onClick={this.submit} disabled={!isEnabled}>Сохранить</button>
                    <button className='button-cancel' onClick={this.cancel}>Отмена</button>
                </div>
            </div>
        );
    }
}

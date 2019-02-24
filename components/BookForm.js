'use strict';
import React from 'react';
import {connect} from "react-redux";
import '../scss/book_form.scss';
import Input from './Input';
import InputMask from 'react-input-mask';
import {editBook} from "../services/actions";

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(name, value) {
        this.props.dispatch(editBook(name, value))
    }

    render() {
        return (
            <div className='book__form'>
                <h1>{this.props.editBook.id ? 'Редактирование' : 'Создать книгу'}</h1>
               <form>
                    <Input type='text' name='title' required maxLength="30" label='Название книги' onChange={this.onChange} value={this.props.editBook.title}/>
                    <Input type='text' name='pages' required label='Количество страниц' onChange={this.onChange} value={this.props.editBook.pages}/>
                    <InputMask type='text' mask='999-9-99-999999-9' name='isbn' />
               </form>
            </div>
        );
    }
}
export default connect (
    state => ({
        editBook: state.editBook
    }), null
)(BookForm)
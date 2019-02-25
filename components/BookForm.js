'use strict';
import React from 'react';
import {connect} from "react-redux";
import classNames from 'classnames';
import validate from '../services/formValidation';
import '../scss/book_form.scss';
import FileInput from './FileInput';
import {Field, FieldArray, reduxForm} from 'redux-form';


let BookForm = props => {
    const {handleSubmit} = props;
    return (
        <div className='book__form'>
            <h1>{props.initialValues.id ? 'Редактирование' : 'Создать книгу'}</h1>
            <form onSubmit={handleSubmit}>
                <Field name='id' type='hidden' component={renderField}/>
                <Field name="title" component={renderField} type="text" label='Название книги'
                />
                <FieldArray name="authors" component={renderAuthors}/>
                <Field name="pages" component={renderField} type="text" label='Кол-во страниц'
                />
                <Field name="publisher" component={renderField} type="text" label='Издательство'
                />
                <Field name="year" component={renderField} type="text" label='Год публикации'
                />
                <Field name="date" component={renderField} type="date" label='Дата выхода в тираж'
                />
                <Field name="isbn" component={renderField} type="text" label='ISBN'
                />
                <Field
                    type="file"
                    name="photo"
                    component={FileInput}
                />
                <button type="submit" className='books__button'>Сохранить</button>
            </form>
        </div>
    )
};

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className={classNames({
        'book__input__block': true,
        'book__input__with__error': touched && !!error
    })}>
        <label className='label__moved label__transformed'>{label}</label>
        <div>
            <input {...input} type={type} className={'book__input'}/>
            {touched && ((error && <div className='book__input__error'>{error}</div>) || (warning &&
                <span>{warning}</span>))}
        </div>
    </div>
);

const renderAuthors = ({fields, meta: {error, submitFailed}}) => (
    <ul className='books__authors__list'>
        <li>
            <button type="button" className='books__button' onClick={() => fields.push({})}>
                Добавить автора
            </button>
            {submitFailed && error && <div className='book__input__error'>{error}</div>}
        </li>
        {fields.map((member, index) => (
            <li key={index} className='books__author__input'>
                <button className='books__delete__author'
                        type="button"
                        title="Удалить автора"
                        onClick={() => fields.remove(index)}
                >Удалить
                </button>
                <h4>Автор #{index + 1}</h4>
                <div className="book__author__fields">
                    <Field
                        name={`${member}.name`}
                        type="text"
                        component={renderField}
                        label="Имя"
                    />
                    <Field
                        name={`${member}.surname`}
                        type="text"
                        component={renderField}
                        label="Фамилия"
                    />
                </div>
            </li>
        ))}
    </ul>
)

BookForm = reduxForm({
    form: 'bookEdit',
    validate
})(BookForm);

BookForm = connect(
    state => ({
        initialValues: state.books.editBook// pull initial values from account reducer
    }),
)(BookForm);

export default BookForm

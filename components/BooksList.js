'use strict';
import React from 'react';
import {connect} from "react-redux";
import BookComponent from './BookComponent';
import BookSorting from './BooksSorting';
import { deleteBook } from "../services/actions";
import { sortAlphabetically, sortAlphabeticallyVersa, sortYearDesc, sortYearAsc } from '../services/model';

class BooksList extends React.Component {
    constructor(props) {
        super(props);
    }

    editBook(index) {
        location.hash = 'book' + index;
    }

    addBook() {
        location.hash = 'create';
    }

    deleteBook(index) {
        this.props.dispatch(deleteBook(index));
    }

    render() {
        let books = this.props.books;
        books.sort(sortAlphabeticallyVersa).sort(sortYearAsc);

        return (
            <div className='books__list'>
                <h1>Мои книги</h1>
                <BookSorting title='По названию' sort={this.props.sort.title} />
                <BookSorting title='По году издания' sort={this.props.sort.year} />
                <button className='books__button' onClick={this.addBook}>+ Добавить книгу</button>
                {books.map((book, index) => {
                    return <BookComponent book={book} key={index} onEdit={() => this.editBook(book.id)} onDelete={() => this.deleteBook(book.id)} />
                })}
            </div>
        );
    }
}
export default connect (
    state => ({
        books: state.books.books,
        sort: state.books.sorting,
    }), null
)(BooksList)

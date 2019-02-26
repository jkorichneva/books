'use strict';

import React from 'react';
import { connect } from 'react-redux';
import BooksList from '../components/BooksList';
import BookForm from '../components/BookForm';
import {showEditForm, saveEditedBook, saveNewBook, saveBooks, saveSorting } from "../services/actions";
import {getBook} from '../services/model';



class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.showResults = this.showResults.bind(this);
        this.sendResults = this.sendResults.bind(this);
        this.closeSaved  = this.closeSaved.bind(this);
        this.state = {
            showSaved: false,
        }
    }

    componentDidMount() {
        if (localStorage.getItem('books')) {
            this.props.dispatch(saveBooks(localStorage.getItem('books')));
        }
        if (localStorage.getItem('sorting')) {
            this.props.dispatch(saveSorting(localStorage.getItem('sorting')));
        }
        window.addEventListener("hashchange", e => this.hashChanged(window.location.hash));
        if (window.location.hash !== 'create' && window.location.hash !== '') {
            this.props.dispatch(showEditForm(window.location.hash));
        }
    }

    showResults(values) {
        let form = this;
        if (values.photo && typeof(values.photo) !== 'string' ) {
            var fr = new FileReader();
            fr.onload = function (e) {
                values.photo = e.target.result;
                form.sendResults(values);
            };
            fr.readAsDataURL(values.photo);
        } else {
            this.sendResults(values);
        }
        this.setState({showSaved: true});
        setTimeout(this.closeSaved, 3000);
    }

    closeSaved() {
        this.setState({showSaved: false});
    }

    sendResults(values) {
        if (values.id) {
            this.props.dispatch(saveEditedBook(values.id, values));
        } else {
            this.props.dispatch(saveNewBook(values));
        }
    }

    hashChanged(hash) {
        this.props.dispatch(showEditForm(hash));
    }

    render() {
        return (
            <div className='books__root'>
                {this.state.showSaved && <div className='books__book__added'>Изменения сохранены</div>}
                {this.props.showId !== '' && <BookForm onSubmit={this.showResults}
                    book={this.props.showId === 'e' || this.props.showId === ''? '' : getBook(this.props.showId, this.props.books)}/>}
                {this.props.showId === '' && <BooksList />}
            </div>
        )
    }
}
export default connect (
    state => ({
        showId: state.books.showId,
        books: state.books.books,
    }), null
)(BooksApp)

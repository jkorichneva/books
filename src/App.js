'use strict';

import React from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import BooksList from '../components/BooksList';
import BookForm from '../components/BookForm';
import {showEditForm} from "../services/actions";
import {getBook} from '../services/model';

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener("hashchange", e => this.hashChanged(window.location.hash));
        if (window.location.hash !== 'create') {
            this.props.dispatch(showEditForm(window.location.hash));
        }
    }

    hashChanged(hash) {
        this.props.dispatch(showEditForm(hash));
    }

    render() {
        return (
            <div className='books__root'>
                {this.props.showId !== '' && <BookForm
                    book={this.props.showId === 'e' ? '' : getBook(this.props.showId, this.props.books)}/>}
                {this.props.showId === '' && <BooksList />}
            </div>
        )
    }
}
export default connect (
    state => ({
        showId: state.showId,
        books: state.books,
    }), null
)(BooksApp)

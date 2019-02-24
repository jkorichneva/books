'use strict';

import qs from "qs";
import { getBook } from './model';

let initialState = {
    books: [
        {   title: 'Алфавит',
            authors: [{name: 'Автор 1', surname: 'Автор 1 Фамилияgreagergergergreg'}, {name: 'Автор 2', surname: 'Автор 2 Фамилия'} ],
            pages: 183,
            publisher: 'Alpina Publishersthkjbndfskbjgdnbkjdfgkbjnfg',
            date: '18.02.1993',
            year: '1993',
            isbn: '978-3-16-148410-0',
            photo: '',
            id: 1,
        },
        {   title: 'Букля',
            authors: [{name: 'Автор 1', surname: 'Автор 1 Фамилия'}, {name: 'Автор 2', surname: 'Автор 2 Фамилия'} ],
            pages: 183,
            publisher: 'Alpina Publishers',
            date: '18.02.1994',
            year: '1994',
            isbn: '978-3-16-148410-0',
            photo: '',
            id: 2,
        },
        {   title: 'Туц',
            authors: [{name: 'Автор 1', surname: 'Автор 1 Фамилия'}, {name: 'Автор 2', surname: 'Автор 2 Фамилия'} ],
            pages: 183,
            publisher: 'Alpina Publishers',
            date: '18.02.1995',
            year: '1995',
            isbn: '978-3-16-148410-0',
            photo: '',
            id: 3,
        }
    ],
    showId: window.location.hash.substr(-1),
    editBook: {

    }
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_BOOK':
            let newBooks = state.books.slice();
            newBooks.forEach((item, index) => {
                if (item.id === action.payload.index) {
                    newBooks.splice(index, 1);
                }
            });
            return {...state, books: newBooks};
        case 'SHOW_EDIT_FORM':
            let hash = action.payload.index.substr(-1);
            if (hash !== 'e') {
                return {...state, showId: hash, editBook: getBook(hash, state.books)}
            } else {
                return {...state, showId: hash, editBook: {}};
            }
        case 'EDIT_BOOK':
            return {...state, editBook: {...state.editBook, [action.payload.name]: action.payload.value}}
        default:
            return state;
    }
}
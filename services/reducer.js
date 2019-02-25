'use strict';

import {getBook, getBookIndex, getLastId} from './model';

let initialState = {
    books:  [
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
    loading: true,
    showId: window.location.hash.substr(-1),
    editBook: {},
    sorting: {
        title: [
            {name: 'title', value: 'asc', label: 'По алфавиту', checked: 'checked'},
            {name: 'title', value: 'desc', label: 'Обратно алфавиту', checked: ''}
        ],
        year: [
            {name: 'year', value: 'asc', label: 'По возрастанию', checked: 'checked'},
            {name: 'year', value: 'desc', label: 'По убыванию', checked: ''}
        ]
    },
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
        case 'SAVE_EDITED':
            let index = getBookIndex(action.payload.id, state.books);
            let newEditedBooks = state.books.slice();
            newEditedBooks[index] = action.payload.book;
            window.location.hash = '';
            localStorage.setItem('books', JSON.stringify(newEditedBooks));
            return {...state, books: newEditedBooks};
        case 'SAVE_NEW':
            let newAddedBooks = state.books.slice();
            let newBook = action.payload.book;
            newBook.id = getLastId(state.books);
            newAddedBooks.push(newBook);
            window.location.hash = '';
            localStorage.setItem('books', JSON.stringify(newAddedBooks));
            return {...state, books: newAddedBooks};
        case 'SAVE_BOOKS':
            return {...state, books: JSON.parse(action.payload.books), loading: false};
        case 'CHANGE_SORTING':
            let sorting = state.sorting[action.payload.name].slice();
            sorting.forEach((item, index) => {
                if (item.value === action.payload.value) {
                    item.checked = 'checked';
                } else {
                    item.checked = '';
                }
            });
            let newSorting = {...state.sorting, [action.payload.name]: sorting};
            localStorage.setItem('sorting', JSON.stringify(newSorting));
            return {...state, sorting: newSorting};
        case 'SAVE_SORTING':
            return {...state, sorting: JSON.parse(action.payload.sorting), loading: false};
        default:
            return state;
    }
}

'use strict';

export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
export const DELETE_BOOK    = 'DELETE_BOOK';
export const SAVE_EDITED    = 'SAVE_EDITED';
export const SAVE_NEW       = 'SAVE_NEW';
export const SAVE_BOOKS     = 'SAVE_BOOKS';
export const CHANGE_SORTING = 'CHANGE_SORTING';
export const SAVE_SORTING   = 'SAVE_SORTING';

export const showEditForm = (index) => ({
    type: SHOW_EDIT_FORM,
    payload: {index}
});

export const deleteBook = (index) => ({
    type: DELETE_BOOK,
    payload: {index}
});

export const saveEditedBook = (id, book) => ({
    type: SAVE_EDITED,
    payload: {id, book}
});

export const saveNewBook = (book) => ({
    type: SAVE_NEW,
    payload: {book}
});

export const saveBooks = (books) => ({
    type: SAVE_BOOKS,
    payload: {books}
});
export const changeSorting = (name, value) => ({
    type: CHANGE_SORTING,
    payload: {name, value}
});
export const saveSorting = (sorting) => ({
    type: SAVE_SORTING,
    payload: {sorting}
});

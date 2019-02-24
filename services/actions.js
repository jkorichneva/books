'use strict';

export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
export const DELETE_BOOK    = 'DELETE_BOOK';
export const EDIT_BOOK      = 'EDIT_BOOK';

export const showEditForm = (index) => ({
    type: SHOW_EDIT_FORM,
    payload: {index}
});

export const deleteBook = (index) => ({
    type: DELETE_BOOK,
    payload: {index}
});

export const editBook = (name, value) => ({
    type: EDIT_BOOK,
    payload: {name, value}
})
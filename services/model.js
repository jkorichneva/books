'use strict';

export const getBook = (id, books) => {
    let result = [];
    books.forEach((item, index) => {
        if (Number(item.id) === Number(id)) {
            result = books[index];
        }
    });

    return result;
}
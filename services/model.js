'use strict';

export const getBook = (id, books) => {
    let result = [];
    books.forEach((item, index) => {
        if (Number(item.id) === Number(id)) {
            result = books[index];
        }
    });

    return result;
};

export const getBookIndex = (id, books) => {
    let result = [];
    books.forEach((item, index) => {
        console.log(item);
        if (Number(item.id) === Number(id)) {
            result = index;
        }
    });

    return result;
};

export const getLastId = (books) => {
    let resultId = 0;
    books.forEach((item, index) => {
        if (Number(item.id) > resultId) {
            resultId = item.id + 1;
        }
    });
    return resultId;
};

export const getCurrentSorting = (sorting) => {
    let sortDefault = {};
    if (sorting.year[1].checked && sorting.title[0].checked) {
        sortDefault = {title: sortAlphabetically,  year: sortYearDesc};
    }
    if (sorting.year[0].checked && sorting.title[0].checked) {
        sortDefault = {title: sortAlphabetically,  year: sortYearAsc};
    }
    if (sorting.title[1].checked && sorting.year[0].checked) {
        sortDefault = {title: sortAlphabeticallyVersa,  year: sortYearAsc};
    }
    if (sorting.title[1].checked && sorting.year[1].checked) {
        sortDefault = {title: sortAlphabeticallyVersa,  year: sortYearDesc};
    }
    return sortDefault;
}


export const sortYearDesc = (a, b) => b.year - a.year;
export const sortYearAsc  = (a, b) => a.year - b.year;
export const sortAlphabetically = (a, b) => {
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
}
export const sortAlphabeticallyVersa = (a, b) => {
    if(a.title > b.title) { return -1; }
    if(a.title < b.title) { return 1; }
    return 0;
}

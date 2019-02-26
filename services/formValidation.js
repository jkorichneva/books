import ISBN from 'isbn-validate';

const validate = values => {
    const errors = {};
    const requiredFields = [
        'title',
        'pages',
    ];
    const notLongerThan30 = [
      'title',
      'publisher'
    ];
    if (!values.authors || !values.authors.length || values.authors
        && (!values.authors[0].name || !values.authors[0].surname)) {
        errors.authors = {_error: 'У книги должен быть указан хотя бы один автор'}
    } else {
        const authorsArrayErrors = [];
        values.authors.forEach((author, authorIndex) => {
            const authorErrors = {};
            if (author.name && author.name.length > 20) {
                authorErrors.name = 'Имя не может быть более 20 символов';
                authorsArrayErrors[authorIndex] = authorErrors
            }
            if (author.surname && author.surname.length > 20) {
                authorErrors.surname = 'Фамилия не может быть более 20 символов';
                authorsArrayErrors[authorIndex] = authorErrors
            }
        });
        if (authorsArrayErrors.length) {
            errors.authors = authorsArrayErrors
        }
    }
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Поле обязательно для заполнения'
        }
    });
    notLongerThan30.forEach(field => {
        if (values[field] && values[field].length > 30) {
            errors[field] = 'Значение в поле не может быть более 30 символов'
        }
    });
    if (values.pages < 0 || values.pages > 10000) {
        errors.pages = 'Количество страниц может быть от 0 до 10000';
    }
    if (values.year && values.year < 1800) {
        errors.year = 'Указанный год должен быть более 1800';
    }
    if (values.date && values.date < '1800-01-01') {
        errors.date = 'Дата должна быть после 01.01.1800';
    }
    if (values.isbn && !isValidISBN(values.isbn)) {
        errors.isbn = 'Невалидный ISBN';
    }

    return errors;
};

const isValidISBN = isbn => {
   return ISBN.Validate(isbn);
}

export default validate;

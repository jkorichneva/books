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
                authorErrors.name = 'Имя не может содержать более 20 символов';
                authorsArrayErrors[authorIndex] = authorErrors
            }
            if (author.surname && author.surname.length > 20) {
                authorErrors.surname = 'Фамилия не может содержать более 20 символов';
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
            errors[field] = 'Значение не может содержать более 30 символов'
        }
    });
    if (values.pages < 0 || values.pages > 10000) {
        errors.pages = 'Укажите значение от 0 до 10000';
    }
    if (values.year && values.year < 1800) {
        errors.year = 'Укажите значение более 1800';
    }
    if (values.date && values.date < '1800-01-01') {
        errors.date = 'Укажите дату не ранее 01.01.1800';
    }
    if (values.isbn && !isValidISBN(values.isbn)) {
        errors.isbn = 'Неверный ISBN';
    }

    return errors;
};

const isValidISBN = a => {
    a = a.toString();
    let b, i, r, t, l;
    b=i=r=0;t=10;l=a.length;if(l == t){for(i;i<9;i++)b+=a[i]*(t-i);r=(b+(a[9]=='X'?t:a[9]))%11==0}if(l==13){for(i;i<12;i++)b+=(i+1)%2?+a[i]:a[i]*3;r=b%t==t-(+a[12]||t)}return r?a:0
};

export default validate;

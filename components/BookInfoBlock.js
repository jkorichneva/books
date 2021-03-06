'use strict';
import React from 'react';
import '../scss/book_component_extra.scss';

class BookInfoBlock extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='book__component__extra'>
                {this.props.book.authors.map((author, index) => {
                    return <div key={index}>Автор: {author.name} {author.surname}</div>
                })}
                {this.props.book.date && <div>Дата выхода в тираж: {this.props.book.date}</div>}
                {this.props.book.publisher &&
                <div className='book__publisher'>Издательство: <b>{this.props.book.publisher}</b></div>}
                {this.props.book.isbn && <b>ISBN: {this.props.book.isbn}</b>}
            </div>
        )
    }
}
export default BookInfoBlock;

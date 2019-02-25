'use strict';
import React from 'react';
import {connect} from "react-redux";
import classNames from 'classnames';
import BookEditMenu from './BookEditMenu';
import BookInfoBlock from './BookInfoBlock';
import '../scss/book_component.scss';

class BookComponent extends React.Component {
    constructor(props) {
        super(props);
        this.toggleShowMore = this.toggleShowMore.bind(this);
        this.state = {
            showMore: false,
            gradient: Math.floor(Math.random() * 10) + 1
        }
    }

    toggleShowMore() {
        this.setState({showMore: !this.state.showMore});
    }

    render() {
        const style = {
            background: `url(${this.props.book.photo}) no-repeat`,
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        };
        return (
            <div className='book__component'>
                {this.props.book.photo && <div className='book__image' style={style} />}
                {!this.props.book.photo &&
                <div className={classNames({
                    'book__no__photo': true,
                    [`book__grad__${this.state.gradient}`]: true,
                })}><span>{this.props.book.title.substr(0, 1)}</span></div>}

                <div className='book__component__right'>
                    <BookEditMenu onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
                    <div className='book__component__title'>{this.props.book.title}</div>
                    <div className='book__component__pages'>{this.props.book.pages} стр.{this.props.book.year ? [`, ${this.props.book.year}`] : null}</div>
                    <div className='book__component__more' onClick={this.toggleShowMore}>
                        {this.state.showMore ? 'Скрыть' : 'Подробнее'}
                    </div>
                    {this.state.showMore && <BookInfoBlock book={this.props.book} />}
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({}), null
)(BookComponent)

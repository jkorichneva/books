'use strict';
import React from 'react';
import SvgIcon from './SvgIcon';
import '../scss/book_menu.scss';

class BookEditMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShown: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.closeMenu  = this.closeMenu.bind(this);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeMenu);
    }

    toggleMenu() {
        this.setState({menuShown: !this.state.menuShown});
        document.addEventListener('click', this.closeMenu);
    }

    closeMenu() {
        this.setState({menuShown: false})
        document.removeEventListener('click', this.closeMenu);
    }

    render() {
        return (
            <div className='book__edit'>
                <div className='book__edit__menu__wrap'>
                <SvgIcon type='dots' onClick={this.toggleMenu}/>
                {this.state.menuShown && <div className='book__edit__menu'>
                    <ul>
                        <li onClick={this.props.onEdit}>Редактировать</li>
                        <li onClick={this.props.onDelete}>Удалить</li>
                    </ul>
                </div>}
                </div>
            </div>
        )
    }
}
export default BookEditMenu;

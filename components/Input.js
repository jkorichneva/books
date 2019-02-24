'use strict';
import React from 'react';
import classNames from 'classnames';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelMoved: !!this.props.value
        };
        this.onChange = this.onChange.bind(this);
        this.onFocus  = this.onFocus.bind(this);
        this.onBlur   = this.onBlur.bind(this);
    }

    onChange(name, value) {
        if (this.props.onChange) {
            this.props.onChange(name, value);
        }
    }

    onBlur() {
        if (!this.props.value) {
            this.setState({labelMoved: false})
        }
    }

    onFocus() {
        this.setState({labelMoved: true})
    }

    render() {
        return (
            <div className='book__input__block'>
                <input className='book__input' type={this.props.type}
                       value={this.props.value}
                       placeholder={this.props.placeholder}
                       id={this.props.id}
                       name={this.props.name}
                       onChange={(e) => this.onChange(e.target.name, e.target.value)}
                       onBlur={this.onBlur}
                       maxLength={this.props.maxLength}
                       onFocus={this.onFocus}
                />
                <label className={classNames({
                    'label__moved': true,
                    'label__transformed': this.state.labelMoved || this.props.value
                })} htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}
export default Input
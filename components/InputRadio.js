'use strict';
import React from 'react';
import '../scss/radio.scss';

class InputRadio extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(name, value) {
        this.props.onChange(name, value);
    }


    render() {
        return (
            <div className='book_radio'>
                <label>
                    <input type='radio' className='book_radio_input'
                           checked={this.props.checked} onChange={(e) => this.onChange(e.target.name, e.target.value)}
                           id={'radioid' + this.props.name}
                           name={this.props.name} value={this.props.value}/>
                    <span className='book_radio_span' />
                    {this.props.label}
                </label>
            </div>
        )
    }
}

export default InputRadio

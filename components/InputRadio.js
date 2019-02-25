'use strict';
import React from 'react';

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
                    <input type='radio' checked={this.props.checked} onChange={(e) => this.onChange(e.target.name, e.target.value)}
                           name={this.props.name} value={this.props.value}/>
                    {this.props.label}
                </label>
            </div>
        )
    }
}

export default InputRadio

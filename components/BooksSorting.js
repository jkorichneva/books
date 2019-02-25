'use strict';
import React from 'react';
import InputRadio from './InputRadio';
import {changeSorting} from '../services/actions';
import {connect} from "react-redux";

class BooksSorting extends React.Component {
    constructor(props) {
        super(props);
        this.changeSort = this.changeSort.bind(this);
    }

    changeSort(name, value) {
        this.props.dispatch(changeSorting(name, value));
    }

    render() {
        const sorting = this;
        return (
            <div className='book__sorting'>
                <h1>{this.props.title}</h1>
                {this.props.sort.map(function(item, index) {
                    return <InputRadio checked={item.checked} key={index} label={item.label} name={item.name} value={item.value}
                                       onChange={sorting.changeSort} />
                })}
            </div>
        )
    }
}
export default connect (
    state => ({
    }), null
)(BooksSorting)


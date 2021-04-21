import React, { Component } from 'react'

export default class Search extends Component {

    render() {
        const {placeholder,changeHandler} = this.props
        return (
            <div>
                <input 
                type="text"
                placeholder={placeholder}
                onChange={changeHandler}
                
                />
            </div>
        )
    }
}

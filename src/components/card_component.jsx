import React, { Component } from 'react'
import Card from './Card'
import './card.style.css'
import Search from './Search'


class Card_component extends Component {
    render(){

        return(
            
            <>
            <Search placeholder ="search person" changeHandler ={this.props.change} />
            <div className = 'container'>
            {this.props.NewUser.map((NewData,id)=><Card person={NewData} id={id}/>)}
            
            </div>
            </>
        )
    }

}
export default  Card_component
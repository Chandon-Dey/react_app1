import React, { Component } from 'react'

class Card extends Component {
    render() {
       const {person,id} = this.props;
        return (
            <div key={id}>
                <img src={person.picture.large} alt={person.name}/>
               <h2>{person.name.first+" "+person.name.last}</h2> 
               <p>{person.gender}</p>
               <span>{"age: "+person.dob.age}</span>
               <p>{person.phone}</p>
               <p>{person.email}</p>
            </div>
        )
    }
}

export default  Card
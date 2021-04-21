import React, { Component } from 'react'
import Card_component from './components/card_component'


class App extends Component {
    constructor(){
        super();
        this.state = {
            User :[],
            searchField :""
        }
    }
 
    componentDidMount(){
        fetch("https://randomuser.me/api/?results=20")
        .then((response)=>response.json())
        .then((data)=>this.setState({User:data.results}))
    }
    

    render() {
        const {searchField,User} =this.state;
        const filterPerson = User.filter((person)=>person.name.first.toLowerCase().includes(searchField.toLowerCase()))
    
return (
            <div>
                <Card_component NewUser = {filterPerson} change={(e)=>this.setState({searchField:e.target.value})}/>
                {}
            </div>
            
        )
    }
}
export default  App
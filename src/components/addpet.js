import React, { Component } from 'react';
import Nav from './nav';
import axios from 'axios';

export default class AddPet extends Component{

    constructor(props){
        super(props)

        this.state = {
            animal:""
        }

    }

    handleChange(val){
        this.setState({animal:val})
    }

    save(){
        let animal = this.state.animal
        axios.post('/api/addPet', { animal:animal })
        .then(res => console.log(res))

    }

    render(){
        return (
            <div>
                <Nav/>
                AddPet Component
                <br/>
                <input onChange={(e)=>this.handleChange(e.target.value)}/><button onClick={()=>this.save()}>save animal</button>
            </div>
        )
    }
}
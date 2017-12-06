import React, { Component } from 'react';
import Nav from './nav'
import axios from 'axios';

export default class ViewPet extends Component{

    constructor(props){
        super(props)

        this.state = {
            pet: {},
            input: ''
        }

    }

    componentDidMount(){
        axios.get(`/api/onePet/${this.props.match.params.id}`)
        .then(res=>{
            console.log(res.data)
            this.setState({pet: res.data[0]})
            // let pet = res.data;
        })
    }

    abandone(){
        axios.delete(`/api/delete/${this.props.match.params.id}`)
        .then(res => {
            console.log(res.data);
            alert('animal abondoned');
        })
    }

    handleChange(val){
        this.setState({input:val})
    }

    change(){
        axios.put(`/api/change/${this.props.match.params.id}`, { name:this.state.input })
    }

    render(){

        console.log(this.state.input)

        return (
            <div>
                <Nav mini={this.props.match.params.id} pet={this.state.petname}/>
                ViewPet Component
                <br/>
                you are looking at <span> {this.state.pet.petname} </span>

                <br/>
                <br/>
                change name: <input onChange={(e)=>this.handleChange(e.target.value)} /><button onClick={()=>this.change()}>confirm change</button>
                <br/>
                <br/>

                <button onClick={()=>this.abandone()}>ABANDONE</button>
                
            </div>
        )
    }
}
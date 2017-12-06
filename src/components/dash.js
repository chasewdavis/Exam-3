import React, { Component } from 'react';
import Nav from './nav.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';
import { shareAnimalCount } from '../ducks/reducer.js';

class Dash extends Component{

    constructor(props){
        super(props)

        this.state = {
            total: 0,
            pets: []
        }

        this.add = this.add.bind(this);

    }
    componentDidMount(){
        axios.get('/api/allPets')
        .then(res=>{
            console.log(res.data)
            let animals = res.data;
            animals = animals.map(e=>e)
            this.setState({pets:animals})
        })
    }

    add(){
        let current = this.state.total;
        current++;
        this.setState({total:current})
    }

    sub(){
        let current = this.state.total;
        current--;
        this.setState({total:current})
    }

    render(){

        let pets = [];

        if(this.state.pets.length){
            pets = this.state.pets.map((pet,i)=>{
                return (
                    <div key={i}>
                        {pet.petname}
                        <Link to={`/viewpet/${pet.id}`}> more info</Link>
                    </div>
                )
            })
            console.log('pets.length is...', pets.length)
            this.props.shareAnimalCount(pets.length);
        }

        return (
            <div>
                <Nav add={this.add} total={this.state.total}/>
                dash
                <button onClick={()=>this.add()}> add + </button>
                <button onClick={()=>this.sub()}> subtract - </button>
                <br/>
                {pets}
                <br/>
                <Link to='/addpet'>add your own!</Link>
            </div>
        )
    }
}

export default connect(null,{shareAnimalCount})(Dash);
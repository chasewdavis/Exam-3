import React, { Component } from 'react';
import Nav from './nav';
import axios from 'axios';

export default function (props){

    console.log(props)

    return(
        <div className='mini'>
            {props.props}
        </div>
    )    
}
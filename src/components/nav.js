import React, { Component } from 'react';
import Mini from './mini.js'
import More from './more.js';

export default class Nav extends Component{
    render(){
        return (
            <div className='nav'>
                nav
                <br/>
                {this.props.pet ? <span>{ this.props.pet } </span> : ''}
                <br/>
                total: {this.props.total}
                <br/>
                also can use this func here
                <button onClick={ this.props.add ? ()=>this.props.add() : () => console.log('not here')}>add +</button>

                <Mini props={this.props.mini}/>

                <More/>

            </div>
        )
    }
}
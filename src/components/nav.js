import React, { Component } from 'react';

export default class Nav extends Component{
    render(){
        return (
            <div className='nav'>
                nav

                <br/>
                total: {this.props.total}
                <br/>
                also can use this func here
                <button onClick={ this.props.add ? ()=>this.props.add() : () => console.log('not here')}>add +</button>

            </div>
        )
    }
}
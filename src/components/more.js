import React, { Component } from 'react';
import { connect } from 'react-redux';


class More extends Component{
    render(){

        console.log('props from more', this.props.count)

        return (
            <div className='more'>
                
                {this.props.count} <span>total pets</span>

                {/* <button onClick={() => logStuff('logging stuff')}>dispatch</button> */}

            </div>
        )
    }
}

function mapStateToProps({ count }){
    return { count }
}

function mapDispatchToProps({ count }){
    return { count }
}

// const mapDispatchToProps = dispatch => {
//     return {
//       onTodoClick: id => {
//         dispatch(toggleTodo(id))
//       }
//     }
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(More);
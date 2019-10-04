import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import PlayerGrid from './PlayerGrid'

class Players extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(res=>{
            this.setState({
                data: res.data
            })
            console.log('this is the state',this.state.data)
        })
        .catch(err=>console.log(err))

    }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.data.length===0){
    //         axios
    //     .get('http://localhost:5000/api/players')
    //     .then(res=>{
    //         this.setState({
    //             data: res.data
    //         })
    //         console.log(this.state.data)
    //     })
    //     .catch(err=>console.log(err))

    // }
    //     }
    

    // componentWillUnmount() {

    // }

    render() { 

        if(this.state.data.length===0){
            return (<div>Loading</div>)
        }
       return (<PlayerGrid data={this.state.data}/>)
    }
}

// Players.propTypes = {

// };

export default Players;

// return ( <>
//     {this.state.data.map(person=>{
//         return (
//             <div>
//                 <p>{person.name}</p>
//             </div>
//             )
//     })}
//     </>)
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
        })
        .catch(err=>console.log(err))

    }
    render() { 

        if(this.state.data.length===0){
            return (<div>Loading</div>)
        }
       return (<PlayerGrid data={this.state.data}/>)
    }
}


export default Players;

import Players from './Players'

import React from 'react';
import PropTypes from 'prop-types';

const PlayerGrid = props => {
    return (props.data.map((person,ind)=>{
        return(
            <>
            <h3>{person.name}</h3>
            <p>{person.country}</p>
            <p>Searches: {person.searches}</p>
            </>
        
        )
    }))
};

export default PlayerGrid;

// {props.data.forEach(person=>{

//     return (
//         <div>
//             <p>Hello</p>
//             <p></p>
//             <p></p>
//         </div>)
// })}
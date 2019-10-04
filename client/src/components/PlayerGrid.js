import Players from './Players'
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage'




function PlayerGrid(props){
    const [person, setPerson] = useLocalStorage('person', props.data[0].name)
    useEffect(()=>{
        props.data.map((person,ind)=>{
        if (!window.localStorage.getItem(props.data[0].name)){
            setPerson(person.name)
        }
    })

    },[person])
    
    return (props.data.map((person,ind)=>{
        return(
            <div className='card' key={ind}>
            <h3>{person.name}</h3>
            <p>{person.country}</p>
            <p>Searches: {person.searches}</p>
            </div>
        
        )
    }))
};

export default PlayerGrid;

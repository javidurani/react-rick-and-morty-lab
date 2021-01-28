import axios from 'axios';
import React,{useEffect, useState} from 'react';



function RickandMorty(){
    const[characters, setCharacters] = useState([]);


React.useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
           const newCharacters = res.data.results;
           
           setCharacters(newCharacters);
        });
}, []);



}

export default RickandMorty;
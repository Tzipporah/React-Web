import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Voice(props) {

    const word = props.word;
    console.log(`http://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    
    const [meanings, setMeanings] = useState([]);   

    const dictionaryApi = async() =>{
        try {
            const data = await axios.get(
                `http://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            setMeanings(data.data);
            console.log(setMeanings)
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(()=>{
        dictionaryApi();
    },[word])

    return (
        <>
        </>
        // <audio
        //     src={(meanings[0].phonetics[0] && meanings[0].phonetics[0].audio) 
        //     || (meanings[1].phonetics[0] && meanings[1].phonetics[0].audio)}
        //     controls />
    )
}

export default Voice

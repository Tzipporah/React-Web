import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VoiceWord from './VoiceWord'

function Voice(props) {

    const word = props.word;
    
    const [meanings, setMeanings] = useState([]);   

    
    
    useEffect(()=>{

        const dictionaryApi = async() =>{
            try {
                const data = await axios.get(
                    `http://api.dictionaryapi.dev/api/v2/entries/en/${word}`
                );
                setMeanings(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        dictionaryApi();
    },[word])

    return (        
        <VoiceWord 
            word={word} 
            meanings={meanings}
        />
        
    )
}

export default Voice

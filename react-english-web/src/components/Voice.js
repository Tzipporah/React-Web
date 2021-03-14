import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VoiceWord from './VoiceWord'

function Voice(props) {

    const word = props.word;
    
    const [meanings, setMeanings] = useState([]);     
    
    useEffect(()=>{

        const dictionaryApi = async() =>{
            try {
                // Reading HTTP for word information including the audio link.
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
        // Sends the word and information of the word to the VoiceWord component including the audio link.
        <VoiceWord 
            word={word} 
            meanings={meanings}
        />
        
    )
}

export default Voice

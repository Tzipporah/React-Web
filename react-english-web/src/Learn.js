import { useEffect, useState } from 'react';
import axios from 'axios';
import './Learn.css';
import { Container } from "@material-ui/core";
import Definitions from "./components/Definitions/Definitions";

function Learn() { 

    const arr = [["I","אני"], ["Yes","כן"], ["No","לא"], ["My", "שלי"], ["Hello", "שלום"], ["OK", "בסדר"]]
    const [i, setI] = useState(0);
    const [word, setWord] = useState("");
    const [wordHe, setWordHe] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [btn, setBtn] = useState("קבל מילה");

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

    useEffect(()=>{
        dictionaryApi();
    },[word])

    function handleClick() {
        if (i < arr.length){
            setI(i+1)
            setWord(arr[i][0])
            setWordHe(arr[i][1])
            setBtn("המילה הבאה")
        }
        
        if(i >= arr.length-1)
            setBtn("סיום")
    }

    return(
        <div className="learn">
            <Container maxWidth="md">
                {word===""?(""):
                <Definitions 
                    word={word} 
                    meanings={meanings}
                    wordHe={wordHe} 
                />}
                <button onClick={handleClick}>{btn}</button>
            </Container>
        </div>
    );

}

export default Learn;
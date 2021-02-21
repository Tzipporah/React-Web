import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './Word_completion.css';
import words from '../../words/level1'
import Sentences from '../sentences';

function Word_completion() { 
    let arr = []
    words.words.map((word) => {
        arr[word.i] = [word.en,word.en, word.he, word.picture, word.sentece]
    })
    const [i, setI] = useState(0);
    const [arr_t, setArr] = useState("");
    const [word, setWord] = useState("");
    const [word_picture, setWord_picture] = useState("");
    const [word_sentece, setWord_sentece] = useState("");
    const [btn, setBtn] = useState("להשלמת המשפטים");
    
    
    function handleClick() {
        if (i < arr.length){
            setI(i+1)
            setWord(arr[i][0])
            setWord_picture(arr[i][3])
            setWord_sentece(arr[i][4])
            setArr(arr)
            setBtn("למשפט הבא")
        }
        
        if(i >= arr.length-1)
            setBtn("סיום")
    }
    return(
       <Container class="container">
            <Sentences 
                className="sentenc"
                word={words} 
                picture={word_picture}
                sentece={word_sentece} 
            />
           <button className = "btn-senteces" onClick={handleClick}>
                    {btn}
            </button>
       </Container>
    );
}
export default Word_completion;
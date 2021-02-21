import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './Word_completion.css';
import words from '../../words/levels.json'
import stories from '../../words/stories.json'
import Sentences from '../sentences';
import { Button } from '../Button'

function Word_completion({ match }) { 
    const level = match.params.level;
    let arr = []
    words[level].map((word, index=0) => {
        arr[index++] = [word.en, word.he, word.picture]
    })
    let story_arr =[]
    stories[level].map((page, index=0) => {
        story_arr[index++] = page.story
    })
    const [i, setI] = useState(0);
    const [arr_t, setArr] = useState("");
    const [word, setWord] = useState("");
    const [word_picture, setWord_picture] = useState("");
    const [word_sentece, setWord_sentece] = useState("");
    const [btn, setBtn] = useState("לעמוד הבא");
    const [page, setPage] = useState(0);
    
    function handleClick() {
       /* if (i < arr.length){
            setI(i+1)
            setWord(arr[i][0])
            setWord_picture(arr[i][3])
            setWord_sentece(arr[i][4])
            setArr(arr)
            setBtn("למשפט הבא")
        }
        
        if(i >= arr.length-1)
            setBtn("סיום")*/
        if (page < story_arr.length-1){
            setPage(page+1)
            setBtn("לעמוד הבא")
        }     
        else
            setBtn("סיום")
    }
    return(
       <Container class="container">
            <Sentences 
                className="sentenc"
                page = {story_arr[page]}
                level = {level}
            />
           <Button class = "btn-senteces" onClick={handleClick}>
                    {btn}
            </Button>
       </Container>
    );
}
export default Word_completion;
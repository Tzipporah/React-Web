import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './Word_completion.css';
import words from '../../data/levels.json'
import stories from '../../data/stories.json'
import Sentences from '../sentences';
import { Button } from '../Button'
import Footer from '../Footer';
import Navbar from '../Navbar'
import CategorySection from '../CategorySection'
import Scoresheet from '../Scoresheet'

function Word_completion({ match }) { 
    const level = match.params.level;
    let arr = []
    words[level].map((word, index) => {
        arr[index++] = [word.en, word.he, word.picture]
    })
    let story_arr =[]
    stories[level].map((page, index) => {
        story_arr[index++] = page.story
    })
    
    const [btn, setBtn] = useState("לעמוד הבא");
    const [page, setPage] = useState(0);
    const[score, setScore] = useState(0)
    const[question, setQuestion] = useState(0)
    const[end, setEnd] = useState(false)
    
    function updateScore(new_score){
        setScore(new_score)
        
    }
    function updateQuestion(new_question){
        setQuestion(new_question)
    }
    
    function handleClick() {
        if (page < story_arr.length-2){
            setPage(page+1)
            setBtn("לעמוד הבא")
        }     
        else{
            setPage(page+1)
            setBtn("סיום")
        }            
    }
    if (page <= story_arr.length-1){
        return(
            <>
                <Navbar/>
                <CategorySection
                videoLink='/videos/Pexels Videos story.mp4'>
                
                    <div className='w-container'>
                        <div className='page'>
                            <Sentences 
                                className="sentences"
                                page = {story_arr[page]}
                                level = {level}
                                score = {score}
                                updateScore = {updateScore}
                                question = {question}
                                updateQuestion = {updateQuestion}
                            />
                        <button class = "btn-senteces" onClick={handleClick}>
                                    {btn}
                            </button>
                        </div>
                </div>
                </CategorySection>
                
                <Footer />
            </>
           
        );
    }
    else{
        return(
            <div>
                 <Scoresheet score={score} totalQuestions={question} type='סיפור'/> 
            </div>
        );
    }
    
}
export default Word_completion;

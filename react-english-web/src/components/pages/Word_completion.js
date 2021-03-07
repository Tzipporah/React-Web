import {  useState } from 'react';
import './Word_completion.css';
import words from '../../data/levels.json'
import stories from '../../data/stories.json'
import Sentences from '../sentences';
import Footer from '../Footer';
import Navbar from '../Navbar'
import CategorySection from '../CategorySection'
import Scoresheet from '../Scoresheet'

function Word_completion({ match }) { 
    const level = match.params.level;

    // Declare the array of the words picture + array of words
    let array_picture = []
    let array_words = []
    words[level].forEach((word, index) => {
      array_picture[word.en.toLowerCase()] = word.picture
      array_words[index++] = word.en
    })

    let story_arr =[]
    stories[level].forEach((page, index) => {
        story_arr[index++] = page.story
    })
    let story;
    const [btn, setBtn] = useState("לעמוד הבא");
    const [page, setPage] = useState(0);
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState(0)
    const [end, setEnd] = useState(false)
    
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
        story = <div className='w-container'>
                    <div className='page'>
                        <Sentences 
                            className="sentences"
                            page = {story_arr[page]}
                            array_picture = {array_picture}
                            array_words = {array_words}
                            score = {score}
                            updateScore = {updateScore}
                            question = {question}
                            updateQuestion = {updateQuestion}
                        />
                        <button class = "btn-senteces" onClick={handleClick}>{btn}</button>
                    </div>
                </div>
    }
    else
        story = <Scoresheet score={score} totalQuestions={question} type='סיפור'/> 

    return(
        <>
            <Navbar/>
            <CategorySection
            videoLink='/videos/Pexels Videos story.mp4'>
                {story} 
            </CategorySection>
            <Footer />
        </>
        
    );
}
export default Word_completion;

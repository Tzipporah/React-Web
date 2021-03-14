import {  useState } from 'react';
import './Word_completion.css';
import words from '../../data/levels.json'
import stories from '../../data/stories.json'
import Sentences from '../sentences';
import Footer from '../Footer';
import Navbar from '../Navbar'
import CategorySection from '../CategorySection'
import Scoresheet from '../Scoresheet'
import { connect } from 'react-redux'
import { updateProgress } from '../../store/actions/userProgressAction'

function Word_completion(props) { 
    const level = props.match.params.level;

    // Declare the array of the picture of words + array of words
    let array_picture = []
    let array_words = []
    words[level].forEach((word, index) => {
        array_picture[word.en.replace("-", "_").toLowerCase()] = word.picture
        array_words[index++] = word.en.replace("-", "_")
    })

    let story_arr =[]
    stories[level].forEach((page, index) => {
        story_arr[index++] = page.story
    })
    let story;
    const [btn, setBtn] = useState("<< לעמוד הבא");
    const [page, setPage] = useState(0);
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState(0)

    function updateScore(new_score){
        setScore(new_score)
    }

    //the function handle in Go to the next page
    function updateQuestions(num) {
        setQuestions(questions+num)
        if (page < story_arr.length-2){
            setPage(page+1)
            setBtn("<< לעמוד הבא")
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
                            updateQuestions = {updateQuestions}
                            btn = {btn}
                        />
                    </div>
                </div>
    }
    else {
        let status = <h1 className ="status">נכשלת :( נסה שוב </h1>
        if ((score / questions) * 100 >= 70) {
            props.updateProgress('word_completion',level)
            status = <h1 className ="status">:) עברת בהצלחה</h1>
        }
        story = <div className='w-container'>{status}<Scoresheet score={score} totalQuestions={questions} type='סיפור'/> </div>
    }
        

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

//  In case the user passed the level
const mapDispatchToProps = dispatch => {
    return {
      updateProgress: (category, level) => dispatch(updateProgress(category, level))
    }
  }  

export default connect(null, mapDispatchToProps) (Word_completion);

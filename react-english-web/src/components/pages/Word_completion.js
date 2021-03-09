import {  useState } from 'react';
import './Word_completion.css';
import words from '../../data/levels.json'
import stories from '../../data/stories.json'
import Sentences from '../sentences';
import Footer from '../Footer';
import Navbar from '../Navbar'
import CategorySection from '../CategorySection'
import Scoresheet from '../Scoresheet'
import {Button} from '../Button'
import { connect } from 'react-redux'
import { updateProgress } from '../../store/actions/userProgressAction'

function Word_completion(props) { 
    const level = props.match.params.level;

    // Declare the array of the words picture + array of words
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
    const [btn, setBtn] = useState("לעמוד הבא");
    const [page, setPage] = useState(0);
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState(0)
    const [end, setEnd] = useState(false)
    
    function updateScore(new_score){
        setScore(new_score)
    }

    function updateQuestion(){
        if (level === "beginners")
            setQuestion(36)
        if (level === "students")
            setQuestion(25)
        if (level === "advancers")
            setQuestion(12)
        if (level === "business")
            setQuestion(9)
        if (level === "spoken")
            setQuestion(43)
    }
    
    function handleClick() {
        if (page < story_arr.length-2){
            setPage(page+1)
            setBtn("לעמוד הבא")
        }     
        else{
            setPage(page+1)
            setBtn("סיום")
            updateQuestion()
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
                        />
                        <Button className = "btn-senteces" onClick={handleClick}>{btn}</Button>
                    </div>
                </div>
    }
    else {
        let status = <h1>נכשלת:( נסה שוב </h1>
        if ((score / question) * 100 >= 70) {
            props.updateProgress('word_completion',level)
             status = <h1>:)עברת בהצלחה</h1>
        }
        story = <>{status}<Scoresheet score={score} totalQuestions={question} type='סיפור'/> </>
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
const mapDispatchToProps = dispatch => {
    return {
      updateProgress: (category, level) => dispatch(updateProgress(category, level))
    }
  }  

export default connect(null, mapDispatchToProps) (Word_completion);

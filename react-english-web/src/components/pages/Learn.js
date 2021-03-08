import { useState } from 'react';
import './Learn.css';
import { Container } from "@material-ui/core";
import Definitions from "../Learn/Definitions";
import Footer from '../Footer';
import Navbar from '../Navbar'
import words from '../../data/levels.json';
import { Button } from '../Button';
import CategorySection from '../CategorySection'
import { connect } from 'react-redux'
import { updateProgress } from '../../store/actions/userProgressAction'
import Grammar from '../Learn/Grammar';

function Learn(props) { 

    const level = props.match.params.level;
    
    let arr = []
    // Introducing the Hebrew and English words into the arr from the words file by levels
    words[level].forEach((word, index) => {
        arr[index++] = [word.en, word.he]
    })

    const [i, setI] = useState(0); // arr's index
    const [word, setWord] = useState(""); // The word in english
    const [wordHe, setWordHe] = useState(""); // The word in hebrew
    const [btn, setBtn] = useState("אני רוצה ללמוד"); // The words above the button
    const [end, setEnd] = useState(false) // Flag - If the words are over
    const [types, setTypes] = useState(type())
    const [learn, setLearn] = useState( <div>
                                            <Button buttonStyle='btn--primary' buttonSize='btn--large' onClick={grammar}>דקדוק</Button>
                                            <Button buttonStyle='btn--primary' buttonSize='btn--large' onClick={wordsDefinitions}>לימוד מילים</Button>
                                        </div>)

    function type(){
        if(level === "advancers")
            return true
        else
            return false
    }
    
    function grammar(){
        setLearn(<Grammar end={set_End}/>)
    }

    function wordsDefinitions(){
        setTypes(false)
    }


    // Set new word to arr : word and wordHe
    function handleClick() {
        setI(i+1)
        if (i === arr.length){
            setBtn("<< חזרה ללימוד")
            setEnd(true)
        }
        else{
            setWord(arr[i][0])
            setWordHe(arr[i][1])
            setBtn("<< למילה הבאה")
            if (i === arr.length - 1){
                setBtn("סיום")
                props.updateProgress('learn', level)
            }     
        }
    }

    // Refresh the Page to start again
    function refreshPage() {
        window.location.reload(false);
    }
    
    function set_End(end){
        setEnd(end)
        setBtn("<< חזרה ללימוד")
    }

    return(
        <>
        <Navbar/>
        <CategorySection
            videoLink='/videos/Pexels Learn.mp4'
            title='.לימוד אנגלית בכיף'>
            <Container maxWidth="md" className="container-learn">
                {!end ? 
                (<>
                    {types?
                        (learn)
                        :
                        (<div>
                            <Button onClick={handleClick}
                                    className='btns'
                                    buttonStyle='btn--outline'
                                    buttonSize='btn--large'>
                                    <h3>{btn}</h3>
                            </Button>
                            {word===""?(""):
                                // Calls to Definitions component
                                <div className="learn">
                                    <Definitions className = "definitions" word={word} wordHe={wordHe}/>
                                </div>}
                        </div>)}
                </>)
                :
                (<>
                    <Button onClick={refreshPage}
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                        {btn}
                    </Button>
                    <Button linkTo={`/categories-cards/${level}`}
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        עמוד קודם {'>>'}
                    </Button>
                </>
                )}
            </Container>    
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

export default connect(null, mapDispatchToProps)(Learn);
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Learn.css';
import { Container } from "@material-ui/core";
import Definitions from "../Definitions";
import Footer from '../Footer';
import Navbar from '../Navbar'
import words from '../../data/levels.json';
import { Button } from '../Button';
import CtegorySection from '../CategorySection'


function Learn({ match }) { 

    const level = match.params.level;
    
    let arr = []
    // Introducing the Hebrew and English words into the arr from the words file by levels
    words[level].map((word, index = 0) => {
        arr[index++] = [word.en, word.he]
    })
    const [i, setI] = useState(0); // arr's index
    const [word, setWord] = useState(""); // The word in english
    const [wordHe, setWordHe] = useState(""); // The word in hebrew
    const [meanings, setMeanings] = useState([]);
    const [btn, setBtn] = useState("אני רוצה ללמוד"); // The words above the button
    const [end, setEnd] = useState(false) // Flag - If the words are over

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

    // Set new word of arr to word and wordHe
    function handleClick() {
        setI(i+1)
        if (i == arr.length){
            setBtn("<< חזרה ללימוד")
            setEnd(true)
        }
        else{
            setWord(arr[i][0])
            setWordHe(arr[i][1])
            setBtn("<< למילה הבאה")
            if (i == arr.length - 1)
                setBtn("סיום")
        }
    }

    // Refresh the Page to start again
    function refreshPage() {
        window.location.reload(false);
    }

    
    return(
        <>
        <Navbar/>
        <CtegorySection
        videoLink='/videos/Pexels Learn.mp4'
        title='.לימוד אנגלית בכיף'
        >
        
            <Container maxWidth="md" className="container-learn">
                {!end ? 
                (
                    <>
                        <Button onClick={handleClick}
                                className='btns'
                                buttonStyle='btn--outline'
                                buttonSize='btn--large' 
                        ><h3>{btn}</h3></Button>   
                        {word===""?(""):
                        // Calls to Definitions component
                        <div className="learn">
                        <Definitions 
                            className = "definitions"
                            word={word} 
                            meanings={meanings}
                            wordHe={wordHe} 
                        />
                        </div>}
                    </>
                )
                :
                (
                    <>
                        <Button onClick={refreshPage}
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                            {btn}
                        </Button>
                        <Button linkTo={`/Categories_cards/${level}`}
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                            עמוד קודם {'>>'}
                        </Button>
                    </>
                )}
            </Container>
            
        </CtegorySection>
        <Footer />
        </>
    );

}

export default Learn;
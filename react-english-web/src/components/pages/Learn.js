import { useEffect, useState } from 'react';
import axios from 'axios';
import './Learn.css';
import { Container } from "@material-ui/core";
import Definitions from "../Definitions";
import Footer from '../Footer';
import Navbar from '../Navbar'
import words from '../../words/level1';
import { Button } from '../Button';


function Learn() { 

    let arr = []
    // Introducing the Hebrew and English words into the arr from the words file by category
    words.words.map((word) => {
        arr[word.i] = [word.en,word.he]
    })
    const [i, setI] = useState(0); // arr's index
    const [word, setWord] = useState(""); // The word in english
    const [wordHe, setWordHe] = useState(""); // The word in hebrew
    const [meanings, setMeanings] = useState([]);
    const [btn, setBtn] = useState("קבל מילה"); // The words above the button
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
            setBtn("חזרה שוב על המילים")
            setEnd(true)
        }
        else{
            setWord(arr[i][0])
            setWordHe(arr[i][1])
            setBtn("המילה הבאה")
            if (i == arr.length - 1)
                setBtn("סיום")
        }
    }

    // Refresh the Page to start again
    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <div className="learn">
            <Navbar/>
            <h1>
                לימוד אנגלית בכיף  
            </h1>
            <img
                className='image'
                alt='Travel Image'
                src='https://h-flowers.co.il/wp-content/uploads/2020/07/907e5_1SPLIT202007SPLIT05100427.jpg'
            />
            <Container maxWidth="md" className="container-learn">
                {!end ? 
                (
                    <>
                        <Button onClick={handleClick}><h1 className="h1_learn">{btn}</h1></Button>   
                        {word===""?(""):
                        // Calls to Definitions component
                        <Definitions 
                            className = "definitions"
                            word={word} 
                            meanings={meanings}
                            wordHe={wordHe} 
                        />}
                    </>
                )
                :
                (
                    <>
                        <Button onClick={refreshPage}><h1 className="h1_learn">{btn}</h1></Button>
                        <Button linkTo='/Learning_cards' buttonSize='btn--medium' buttonStyle='btn--outline'><h1 className="h1_learn">חזרה לעמוד הקודם</h1></Button>
                    </>
                )}
            </Container>
            <Footer />
        </div>
    );

}

export default Learn;
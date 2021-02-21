import { useEffect, useState } from 'react';
import axios from 'axios';
import './Learn.css';
import { Container } from "@material-ui/core";
import Definitions from "../Definitions";
import Footer from '../Footer';
import words from '../../words/level1';
import { Button } from '../Button';


function Learn() { 

    let arr = []
    // Introducing the Hebrew and English words into the arr from the words file by category
    words.words.map((word) => {
        arr[word.i] = [word.en,word.he]
    })
    const [i, setI] = useState(0);
    const [word, setWord] = useState("");
    const [wordHe, setWordHe] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [btn, setBtn] = useState("קבל מילה");
    const [end, setEnd] = useState(false)
   
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
        setI(i+1)
        if (i == arr.length){
            setBtn("חזרה לעמוד הקודם")
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

    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <div className="learn">
            {/* <Navbar 
                signOut={params.signOut}
                userName={params.userName}
                profilePicture={params.profilePicture}/> */}
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
                        <button className = "btn-learn" onClick={handleClick}>{btn}</button>   
                        {word===""?(""):
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
                        <button className = "btn-learn" onClick={refreshPage}>חזרה שוב על המילים</button>
                        <Button linkTo='/cards2' buttonStyle='btn--primary'><h1 className="h1_learn">{btn}</h1></Button>
                    </>
                )}
            </Container>
            <Footer />
        </div>
    );

}

export default Learn;
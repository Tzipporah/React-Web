import { useEffect, useState } from 'react';
import axios from 'axios';
import './Learn.css';
import { Container } from "@material-ui/core";
import Definitions from "../Definitions";
import Navbar from '../Navbar';
import Footer from '../Footer';
import words from '../../words/level1'



function Learn() { 

    let arr = []
    words.words.map((word) => {
        arr[word.i] = [word.en,word.he]
    })
    const [i, setI] = useState(0);
    const [word, setWord] = useState("");
    const [wordHe, setWordHe] = useState("");
    const [meanings, setMeanings] = useState([]);
    const [btn, setBtn] = useState("קבל מילה");

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
        if (i < arr.length){
            setI(i+1)
            setWord(arr[i][0])
            setWordHe(arr[i][1])
            setBtn("המילה הבאה")
        }
        
        if(i >= arr.length-1)
            setBtn("סיום")
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
                <button className = "btn-learn" onClick={handleClick}>
                    {btn}
                </button>
                {word===""?(""):
                <Definitions 
                    className = "definitions"
                    word={word} 
                    meanings={meanings}
                    wordHe={wordHe} 
                />}
            </Container>
            <Footer />
        </div>
    );

}

export default Learn;
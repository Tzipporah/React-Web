import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import words from '../../data/levels.json';
import Hangman from '../game/Hangman';
import CategorySection from '../CategorySection'
import './Game.css'

function Game({ match }) { 

    const level = match.params.level;

    let arr = []
    // Introducing the Hebrew and English words into the arr from the words file by levels
    words[level].forEach((word, index) => {
        arr[index++] = [word.en.toLowerCase(), word.he]
    })

    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }

    return (

        <div>
            <Navbar />
            <CategorySection
                videoLink='/videos/Pexels Videos game.mp4'>
                <Hangman arr = {shuffleArray(arr)}/>
            </CategorySection>
            <Footer />
        </div>
    )              
}


export default Game

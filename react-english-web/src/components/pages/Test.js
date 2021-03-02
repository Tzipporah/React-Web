import React from 'react';
import './Test.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Quiz from '../Tests/Quiz';
import { createQuestions } from '../Tests/CreateQuestions'
import words from '../../data/levels.json';


function Test({ match }) {
    
    const level = match.params.level
    
    let arr = []
    // Introducing the Hebrew and English words into the arr from the words file by levels
    words[level].forEach((word, index) => {
        arr[index++] = [word.en, word.he]
    })

    createQuestions(arr, level)

    return (
      <>  
      <Navbar/>
      <div className = "test-body">
        <Quiz level={level}/>
      </div>
      <Footer/>
      </>
    );
  }
  
  export default Test;
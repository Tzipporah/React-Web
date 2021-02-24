import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from '../Tests/FlashcardList';
import './Test.css'
import axios from 'axios'
import { Button } from '../Button'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Quiz from '../Tests/Quiz';
import { createQuestions } from '../Tests/CreateQuestions'
import words from '../../data/levels.json';


function Test({ match }) {
    const level = match.params.level
    
    let arr = []
    // Introducing the Hebrew and English words into the arr from the words file by levels
    words[level].map((word, index = 0) => {
        arr[index++] = [word.en, word.he]
    })

    createQuestions(arr)

    return (
      <>  
      <Navbar/>
      <div className = "test-body">
        <Quiz/>
      </div>
      <Footer/>
      </>
    );
  }
  
  export default Test;
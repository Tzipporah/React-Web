import React, { useState } from 'react';
import Image from './Image'
import { Button } from "../Button"
import Voice from '../Voice'
import { Container } from "@material-ui/core";

function HangmanWord(props){
  
  const maxWrong = 6
  const [state, setState] = useState({ mistake: 0, guessed: new Set([]) })

  // Calculates the number of mistakes
  function handleGuess(e){
    let letter = e.target.value;
    setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (props.word[0].includes(letter) ? 0 : 1)
    }));
  }

  // Checks the guess, is the letter in the answer then: put the letter; else put _
  function guessedWord() {
    return props.word[0].split("").map(letter => (state.guessed.has(letter) || letter==="-" ? letter : " _ "));
  }

  // Function of the letter buttons
  function generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        type='button'
        className={state.guessed.has(letter)? 'btn' : "btn trans"}
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  // Returns the score to the parent component, and initializes the state
  function handleClick(){
    let sco = 0
    if(isWinner)
      sco = 1
    props.set_next(sco)
    setState({ mistake: 0, guessed: new Set([]) })
  }

  const isWinner = guessedWord().join("") === props.word[0]; 
  const gameOver = state.mistake >= maxWrong;
  let gameState = generateButtons();

  if (isWinner) {
    gameState = "!הצלחת"
  }

  if (gameOver) 
    gameState = "!נכשלת"

  // Displays the game, only if the player wins / loses a button is displayed - "next word"
  return (
    <Container className='game-div'>
      <Container className='p-game'>
        <div id='split-container'>
          <div className="split-item"><Image step = {state.mistake} /></div>
          <div className='split-item'>                
            מה התרגום של
            <br/>
            {props.word[1]}
            <br/>
            {!gameOver ? guessedWord() : props.word[0]}
            <br/><br/>
            <Voice  word = {props.word[0]}/>
            {"ניחושים :\n"}
            {`${state.mistake} \n \\ ${maxWrong}`}  
          </div>
        </div>
        <p className='game-state'>{gameState}</p>
      </Container>
      {(isWinner || gameOver) ?
          <Button className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large' onClick={handleClick}>{props.btn}</Button>
        :
          ""
      }
    </Container>
  )
}

export default HangmanWord;
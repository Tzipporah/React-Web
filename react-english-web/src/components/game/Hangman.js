import React, { Component } from 'react';
import Image from './Image'
import { Button } from "../Button"
import Voice from '../Voice'


class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6
  }

  constructor(props) {
    super(props);
    this.i = 0
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: props.arr[this.i][0]
    }
  }

  // Calculate
  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
      <button
        className='btn btn-lg btn-primary'
        // key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.i = this.i + 1
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: this.props.arr[this.i][0]
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) 
      gameStat = "!!!הצלחת"

    if (gameOver) 
      gameStat = "!!!נכשלת"
    
    return (
      <div className="game">
        <h1 className='text-center'>איש תלוי</h1>
        <p className="p-game">
          {"ניחושים שגויים:\n"}
          {`${this.state.mistake} \n מתוך ${this.props.maxWrong}`}  
        </p>
          <Image step = {this.state.mistake} />
          <Voice  word ={this.props.arr[this.i][0]}/>
          <p className="p-game">
            :מה התרגום של המילה {this.props.arr[this.i][1]}
          </p>
          <p className="p-game">
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          {(isWinner || gameOver) 
            ?
              ((this.i == this.props.arr.length-1)
              ?
                <Button className='btn btn-info'>שחק שוב</Button>
              :
                <Button className='btn btn-info' onClick={this.resetButton}>מילה הבאה</Button>)
            :
              ""
          }
      </div>
    )
  }
}

export default Hangman;
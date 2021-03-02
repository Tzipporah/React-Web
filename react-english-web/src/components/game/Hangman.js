import React, { Component } from 'react';
import Image from './Image'
import { Button } from "../Button"
import Voice from '../Voice'
import Scoresheet from '../Scoresheet'


class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6
  }

  constructor(props) {
    super(props);
    this.i = 0
    this.score = 0
    this.end = false
    this.btn = "המילה הבאה"
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
        className='btn btn-lg btn-primary m-2'
        key={letter}
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
        guessed: new Set([])
      });
      if(this.i === this.props.arr.length-1)
        this.btn = "סיום"
      if(this.i < this.props.arr.length)
        this.setState({answer: this.props.arr[this.i][0]});     
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "!!!הצלחת"
      this.score ++
    }

    if (gameOver) 
      gameStat = "!!!נכשלת"

    if(this.i != this.props.arr.length) { 
      return (
        <div className="game-div">
            <p className="p-game">
              {"ניחושים שגויים:\n"}
              {`${this.state.mistake} \n מתוך ${this.props.maxWrong}`}  
            </p>
              <Image step = {this.state.mistake} />
              <Voice  word ={this.props.arr[this.i][0]}/>
              <p className="p-game">
                :מה התרגום של המילה {this.props.arr[this.i][1]}
              </p>
              <br/>
              <p className="p-game">
                {!gameOver ? this.guessedWord() : this.state.answer}
              </p>
              <br />
              <p className="p-game">{gameStat}</p>
              {(isWinner || gameOver) 
                ?
                  <Button className='btn btn-info' onClick={this.resetButton}>{this.btn}</Button>
                :
                  ""
              }
        </div>
        )}
        else{
          return(
            <div className="game-div">
              <Scoresheet score={this.score} totalQuestions={this.props.arr.length} level={this.props.level}/>
            </div>
          )
        }
  }
}

export default Hangman;
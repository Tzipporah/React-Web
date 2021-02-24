import React, { Component } from 'react';
import step0 from "../../images/game-images/0.jpg";
import step1 from "../../images/game-images/1.jpg";
import step2 from "../../images/game-images/2.jpg";
import step3 from "../../images/game-images/3.jpg";
import step4 from "../../images/game-images/4.jpg";
import step5 from "../../images/game-images/5.jpg";
import step6 from "../../images/game-images/6.jpg";
import { Button } from "../Button"
// import Voice from './Voice'


class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6],
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
        // className='btn btn-lg btn-primary m-2'
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
    if(this.i < this.props.arr.length-1)
        this.i = this.i + 1
    else
        this.props.end = true
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

    if (isWinner) {
      gameStat = "You Won!!!"
    }

    if (gameOver) {
      gameStat = "You Lost!!!"
    }
    return (
      <div className="Hangman container">
        <h1 className='text-center'>Hangman</h1>
        <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt=""/>
        </div>
        <div className="text-center">
          {/* <Voice  word ={this.props.arr[this.i][0]}/> */}
          <p>:מה התרגום של המילה {this.props.arr[this.i][1]}</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>
          {(isWinner || gameOver) 
          ?( this.props.end
          ?
            <Button className='btn btn-info' linkTo={`/game/${this.props.level}`}>שחק שוב</Button>
          :
            <Button className='btn btn-info' onClick={this.resetButton}>מילה הבאה</Button>)
            :""
        }
        </div>
      </div>
    )
  }
}

export default Hangman;
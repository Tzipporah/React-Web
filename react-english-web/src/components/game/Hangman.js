import React, { Component } from 'react';
import Image from './Image'
import { Button } from "../Button"
import Voice from '../Voice'
import Scoresheet from './Scoresheet'
import { connect } from 'react-redux'
import { updateProgress } from '../../store/actions/userProgressAction'
import { Container } from "@material-ui/core";



class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6
  }

  constructor(props) {
    super(props);
    this.i = 0
    this.score = 0
    this.end = false
    this.btn = "<< למילה הבאה"
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
        type='button'
        className={this.state.guessed.has(letter)? 'btn' : "btn trans"}
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
      gameStat = "!הצלחת"
      this.score ++
    }

    if (gameOver) 
      gameStat = "!נכשלת"

    if(this.i != this.props.arr.length) { 
      return (
        <Container className='game-div'>
            <Container className='p-game'>
            <div id='split-container'>
            
            <div className="split-item">
              <Image step = {this.state.mistake} />
            </div>
            <div className='split-item'>
              
                
            מה התרגום של
            <br/>
              
               {this.props.arr[this.i][1]}
                
              <br/>

              {!gameOver ? this.guessedWord() : this.state.answer}
              <br/>
              <br/>
              <Voice  word ={this.props.arr[this.i][0]}/>
              
              
            {"ניחושים :\n"}
            {`${this.state.mistake} \n \\ ${this.props.maxWrong}`}  
            
            </div>
            </div>
              <p>
              {gameStat}
              </p>
              </Container>
              {(isWinner || gameOver) 
                ?
                  <Button className='btns'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large' onClick={this.resetButton}>{this.btn}</Button>
                :
                  ""
              }
        </Container>
        )}
        else{
          if ((this.score / this.props.arr.length) * 100 >= 70)
            this.props.updateProgress('game', this.props.level)
          return(
            <div className="game-div">
              <Scoresheet score={this.score} totalQuestions={this.props.arr.length} level={this.props.level}/>
            </div>
          )
        }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateProgress: (category, level) => dispatch(updateProgress(category, level))
  }
}

export default connect(null, mapDispatchToProps)(Hangman);
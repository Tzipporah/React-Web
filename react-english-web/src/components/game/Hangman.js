import React, { Component } from 'react';
import HangmanWord from './HangmanWord';

// Gets an array of [wordEn, wordHe] and activates for each word the HangmanWord comp
class Hangman extends Component {
  
  constructor(props) {
    super(props);
    this.score = 0
    this.state = {
      i : 0,
      btn : "<< למילה הבאה"
    }
  }

  // Gets an sco from HangmanWord comp and raises the index of the array
  set_next = (sco) => {
    this.setState({
      i : this.state.i+1
    })
    this.score += sco
    if(this.state.i === this.props.arr.length-2)
      this.setState({btn : "סיום"})  
    if(this.state.i === this.props.arr.length-1)
      this.props.end(true, this.score)
  }

  render() {
    return (
      <HangmanWord word={this.props.arr[this.state.i]} set_next={this.set_next} btn={this.state.btn}/>
    )
  }
}

export default Hangman;
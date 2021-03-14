import React, { Component } from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import words from '../../data/levels.json';
import Hangman from '../game/Hangman';
import CategorySection from '../CategorySection'
import Scoresheet from '../Scoresheet'
import { connect } from 'react-redux'
import { updateProgress } from '../../store/actions/userProgressAction'
import './Game.css'

class Game extends Component{

    constructor(props) {
        super(props);
        this.level = props.match.params.level;
        this.arr = this.shuffleArray()
        this.game = <Hangman arr = {this.arr} end={this.endGame}/>; // Holds the component called
        this.state = { score: 0, end: false }
    }

    // Mix the words
    shuffleArray() {
        let array = []
        // Introducing the Hebrew and English words into the arr from the words file by levels
        words[this.level].forEach((word, index) => {
            array[index++] = [word.en.toLowerCase(), word.he]
        })
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }

    // Gets a sco & end_flag from HangmanWord comp
    endGame = (end_flag, sco) =>{
        this.setState({end:end_flag, score:sco})
    }

    render(){
        // Returns the score
        if(this.state.end){
            if ((this.state.score / this.arr.length) * 100 >= 70)
                this.props.updateProgress('game', this.level)
            this.game = <div className="game-Scoresheet">
                            <Scoresheet score={this.state.score} totalQuestions={this.arr.length} type='משחק'/>
                        </div>
        }
        // Returns the game
        return (
            <div>
                <Navbar />
                <CategorySection
                    videoLink='/videos/Pexels Videos game.mp4'>
                        {this.game}
                </CategorySection>
                <Footer />
            </div>
        ) 
    }             
}

// Updating the personal area
const mapDispatchToProps = dispatch => {
    return {
      updateProgress: (category, level) => dispatch(updateProgress(category, level))
    }
}  

export default connect(null, mapDispatchToProps) (Game)
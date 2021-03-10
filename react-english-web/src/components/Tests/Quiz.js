import React, { Component } from 'react'
import Scoresheet from '../Scoresheet'
import db from './db'
import CategorySection from '../CategorySection'
import './Quiz.css'
import { connect } from 'react-redux'
import { updateProgress } from '../../store/actions/userProgressAction'


export class Quiz extends Component {

    constructor(props) {
        super(props)   
        this.state = {
            questionBank: [],
            currentIndex: 0,
            userAnswer: null,
            score:0,
            disabled: true, //Enable or disable Next Button
            // Radio button all initially not checked, so set to false initially:
            option1: false, 
            option2: false,
            option3: false,
            option4: false
        }
        this.btn = "<< לשאלה הבאה"
    }
    
    // Reads the question from IndexedDB and load them into the questionBank
    loadQuestions = () => {
        let arr = [];
        db[this.props.level].each((item) => arr.push(item))
        .then(() => this.setState({questionBank: arr})); 
    }

    // Load the question from indexedDB when component mounts
    componentDidMount(){
        this.loadQuestions()
    }

    // Increment the currentIndex when next button is clicked
    nextQuestionHander = () => {
        this.checkAnswer()
        this.setState({
            currentIndex:  this.state.currentIndex + 1,
            disabled: true,
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            userAnswer: ''
        })
        if(this.state.currentIndex === this.state.questionBank.length - 2)
            this.btn = "סיום"
    }

    // Check if UserAnser is correct 
    answerIsCorrect(userAnswer){
        const {currentIndex, questionBank} = this.state
        if(userAnswer === questionBank[currentIndex].answer) {
            return true
        } else {return false}
    }

    // Increment score if answer is correct
    checkAnswer = () => {
        const {score, userAnswer} = this.state
            if(this.answerIsCorrect(userAnswer)){
                this.setState({
                    score: score + 1
                })
            }
    }
    
    // Set the User answer depending on which option the user clicked and enable Next Button
    setUserAnswer = (event) => {
        if(event.target.id === "o1") { 
            this.setState({option1: event.target.checked, userAnswer: event.target.value })       
        }
        else if(event.target.id ==="o2") {
            this.setState({option2: event.target.checked, userAnswer: event.target.value })
        }
        else if(event.target.id ==="o3") {
            this.setState({option3: event.target.checked, userAnswer: event.target.value })
        }
        else if(event.target.id ==="o4") {
            this.setState({option4: event.target.checked, userAnswer: event.target.value })
        }
        // Enable Next Button
        this.setState({disabled:false})
    }

    render() {
        const {currentIndex, questionBank, score} = this.state
        var currentQuestion = questionBank[currentIndex]
            
        // If the loadQuestions has not finished running
        if(questionBank.length === 0)
            return(<div></div>)
        
        //  Quiz
        else if((currentIndex <= questionBank.length -1)) {
            return (
                <CategorySection 
                videoLink='/videos/Pexels Videos 2450250.mp4'
                title='בהצלחה'>
                <div className="quiz-container">                    
                    <p>שאלה {currentIndex + 1} \ {questionBank.length} </p>
                    <p> מה התרגום של המילה {currentQuestion.question}</p>
                    <fieldset>
                        <div className="options"><input id="o1" onChange={this.setUserAnswer} type="radio" name="group1" value={currentQuestion.option1} checked={this.state.option1}/> {currentQuestion.option1}</div>
                        <div className="options"><input id="o2" onChange={this.setUserAnswer} type="radio" name="group1" value={currentQuestion.option2} checked={this.state.option2}/> {currentQuestion.option2}</div>
                        <div className="options"><input id="o3" onChange={this.setUserAnswer} type="radio" name="group1" value={currentQuestion.option3} checked={this.state.option3}/> {currentQuestion.option3}</div>
                        <div className="options"><input id="o4" onChange={this.setUserAnswer} type="radio" name="group1" value={currentQuestion.option4} checked={this.state.option4}/> {currentQuestion.option4}</div>
                    </fieldset> 
                    <br />
                    <button className={this.state.disabled? '': 'next-btn'} onClick={this.nextQuestionHander} disabled = {this.state.disabled}>{this.btn}</button>                          
                </div >
                </CategorySection>
            )
        }

        else { // Quiz have ended so, we load the Scoresheet component
            let title = '): נכשלת במבחן'
            // User passed the test
            if (((score) / (questionBank.length)) * 100 >= 70){
                this.props.updateProgress('Test', this.props.level)
                title = '(: הצלחת במבחן'
            }
            return (
                <CategorySection 
                    videoLink='/videos/Pexels Videos 2450250.mp4'
                    title={title}>
                    <div  className="quiz-container">
                        <Scoresheet score={score} totalQuestions={questionBank.length} type='מבחן'/>
                        <br />               
                    </div>
                </CategorySection>
            )
        }
    }
}

// Updating the personal area
const mapDispatchToProps = dispatch => {
    return {
      updateProgress: (category, level) => dispatch(updateProgress(category, level))
    }
}
  
export default connect(null, mapDispatchToProps)(Quiz)

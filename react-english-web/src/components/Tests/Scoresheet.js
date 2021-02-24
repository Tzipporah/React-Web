import React, {useState} from 'react'
import Quiz from './Quiz'
import { Button } from '../Button'


function Scoresheet(props) {
    const [restart, setRestart] = useState(false) //Hook to check if Restart button was clicked

    //Restart was clicked so load the Quiz component (pass the username along)
    if(restart === true){
        return (
        <div>
            <Quiz/>
         </div> 
        )
    }
    function handleClick() 
    {
        setRestart(true)
    }
    return (
        <div>
            <div className="container small">
                <div className="scoresheet">
                    <h1>Quiz Successfully Completed</h1><br />
                    <h3>Your score is {props.score}</h3>
                    <h4>That is {props.score / props.totalQuestions * 100}% </h4>
                </div>                
                <button className="retakeButton" onClick={handleClick()}>בחינה חדשה</button>        
            </div>
        </div>
    )
}

export default Scoresheet

import React, {useState} from 'react'
import { Button } from './Button'

function Scoresheet(props) {

    console.log(props)

    const [restart, setRestart] = useState(false) // Hook to check if Restart button was clicked

    // restart the page
    if(restart === true){
        window.location.reload(false);
    }

    function handleClick() 
    {
        setRestart(true)
    }
    
    return (
        <div className="container small">
            <h1>המשחק נגמר</h1><br />
            <h3>{"הניקוד שלך הוא:\n"}
              {`${props.score} \n מתוך ${props.totalQuestions}`}</h3>
            <h4>זה: {props.score / props.totalQuestions * 100}% </h4>               
            <Button onClick={handleClick}>שחק שוב</Button>        
        </div>
    )
}

export default Scoresheet

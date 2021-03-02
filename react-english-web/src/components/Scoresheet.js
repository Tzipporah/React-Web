import React, {useState} from 'react'
import { Button } from './Button'

function Scoresheet(props) {

    // console.log(props)

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
            <p>המבחן נגמר</p><br />
            <h3>{"הניקוד שלך :\n"}
              {`${props.score} \n מתוך ${props.totalQuestions}`}</h3>
            <h4>ציון : {props.score / props.totalQuestions * 100}% </h4>               
            <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'onClick={handleClick}>{"<< מבחן חוזר"} </Button>        
        </div>
    )
}

export default Scoresheet

import React from 'react'
import { Button } from './Button'

function Scoresheet(props) {

    // restart the page
    function handleClick() 
    {
        window.location.reload(false);
    }
    
    return (
        <div className="container small" style={{textAlign: "center", direction: "rtl", color: "white"}}>
            <h4>ה{props.type} נגמר</h4>
            <br />
            <h3>{"הניקוד שלך :\n"}
              {`${props.score} \n מתוך ${props.totalQuestions}`}</h3>
            <h4>ציון : {props.score / props.totalQuestions * 100}% </h4>               
            <br/>
            <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'onClick={handleClick}> {` ${props.type}  חדש >>`} </Button>        
        </div>
    )
}

export default Scoresheet

import React, { useState } from 'react'
import grammar from '../../data/grammar.json'
import { Button } from '../Button'
import Time from './Time'

function Grammar({end}) {
    
    let arr = []
    // Introducing the Hebrew and English words into the arr from the words file by levels
    grammar["grammar"].forEach((rule, index) => {
        arr[index++] = [rule.en, rule.he, rule.use, rule.shape, rule.negative]
    })

    const [btn, setBtn] = useState("!כללי דקדוק - כל הזמנים"); // The words above the button
    const [i, setI] = useState(-1); // arr's index

    function handleClick(){
        setI(i+1)
        if (i === arr.length - 2){
            setBtn("סיום")
        }
        else
            setBtn("<< לזמן הבא")
    }    

    // Refresh the Page to start again
    function set_end() {
        end(true)
    }

    if(i === -1){
        return (
            <Button onClick={handleClick}
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    <h3>{btn}</h3>
            </Button>
            )
    }

        return (
            <div>
                {i < arr.length-1 ?
                    <Button onClick={handleClick}
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        {btn}
                    </Button>
                :
                    <Button onClick={set_end}
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'>
                        {btn}
                    </Button>}
                <div className="grammar" style = {{ direction: "rtl" }}>
                    <Time time={arr[i]} />
                </div>
            </div>
        )
    
}

export default Grammar

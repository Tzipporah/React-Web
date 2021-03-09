import React, { useState } from 'react'
import grammar from '../../data/grammar.json'
import { Button } from '../Button'
import Time from './Time'

function Grammar({end}) {
    
    let arr = []
    // Inserting grammar rules into an array
    grammar["grammar"].forEach((rule, index) => {
        arr[index++] = [rule.en, rule.he, rule.use, rule.shape, rule.negative]
    })

    const [btn, setBtn] = useState("!כללי דקדוק - כל הזמנים"); // The times above the button
    const [i, setI] = useState(-1); // arr's index

    // Raises the index, and changes the btn
    function handleClick(){
        setI(i+1)
        if (i === arr.length - 2){
            setBtn("סיום")
        }
        else
            setBtn("<< לזמן הבא")
    }    

    // Changes the state.end of the parent component
    function set_end() {
        end(true)
    }

    // Displays an entry button for the grammar screen
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
    // Runs on the array and introduces the rules of grammar
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

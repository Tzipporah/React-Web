import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false) // False by default 

    return (
        // Design depends on the card state - flip or not
        <div 
        className = {`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}
        >

            <div className = 'front'>
                {flashcard.question}
                <div className='flashcard-options'>
                    {flashcard.options.map(option => {
                        return <div className='flashcard-option'>{option}</div>
                    })}
                </div>
            </div>
                <div className = 'back'>{flashcard.answer}</div>
 
        </div>
    )
}
//line 22:                {flip ? flashcard.answer : flashcard.question}   
import React from 'react';
import Voice from '../Voice'

// Displays a word in English + Hebrew translation + audio of the word
const Definitions = ({word, wordHe}) =>
{
    return(
        <div className = "definitions">
            <div className = "subTitle">
                <span className="span">
                    <b className="b">:המילה באנגלית</b>
                    <br/>
                    {word}
                </span>
                <hr/>
                <span className="span">
                    <b className="b">:המילה בעברית</b>
                    <br/>
                    {wordHe}
                </span>
                <hr/>
                <br/>
                <Voice  word ={word}/>  
                <hr/>
            </div>
        </div>
    )
}

export default Definitions
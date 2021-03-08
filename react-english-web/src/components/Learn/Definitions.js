import React from 'react';
import '../pages/Learn.css';
import Voice from '../Voice'

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
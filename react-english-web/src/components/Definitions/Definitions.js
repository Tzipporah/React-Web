import React from 'react';
import '../../Learn.css';

const Definitions = ({word, meanings, wordHe}) =>
{
    return(
        <div className = "definitions">
            <div className = "subTitle">
                <span>
                    <b>:המילה באנגלית</b>
                    <br/>
                    {word}
                </span>
                <hr/>
                <span>
                    <b>:המילה בעברית</b>
                    <br/>
                    {wordHe}
                </span>
                <hr/>
                {meanings[0] && word &&
                    (<audio 
                        src={(meanings[0].phonetics[0] && meanings[0].phonetics[0].audio) || (meanings[1].phonetics[0] && meanings[1].phonetics[0].audio)}
                        controls />)}
                <hr/>
            </div>
        </div>
    )
}

export default Definitions
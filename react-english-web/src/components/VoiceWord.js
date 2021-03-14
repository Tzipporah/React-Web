import React from 'react'

function VoiceWord({word, meanings}) {
    // Returns the audio of a single word
    return (
        <div>
            {meanings[0] && word && 
                <audio
                    src={(meanings[0].phonetics[0] && meanings[0].phonetics[0].audio) 
                    || (meanings[1].phonetics[0] && meanings[1].phonetics[0].audio)}
                    controls />
            } 
        </div>
    )
}

export default VoiceWord

import React from 'react'
import step0 from "../../images/game-images/0.jpg";
import step1 from "../../images/game-images/1.jpg";
import step2 from "../../images/game-images/2.jpg";
import step3 from "../../images/game-images/3.jpg";
import step4 from "../../images/game-images/4.jpg";
import step5 from "../../images/game-images/5.jpg";
import step6 from "../../images/game-images/6.jpg";

// Displays a errors image
function Image(props) {
    
    const images = [step0, step1, step2, step3, step4, step5, step6]
    
    return (
        <div>
           <img 
                src={images[props.step]} 
                alt='Hangman'
            /> 
        </div>
    )
}

export default Image

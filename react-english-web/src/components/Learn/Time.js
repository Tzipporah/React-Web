import React from 'react'

// Displays a time + use + shape + negative
function Time(props) {

    // props.time = [0: timeEn, 1: timeHe, 2: use, 3: shape, 4: negative]

    const use_arr = props.time[2].split("\n")
    const shape_arr = props.time[3].split("\n")
    
    return (
        <div style = {{ direction: "rtl" }}>
            <h2>
            {props.time[0]}
            {" - "}
            {props.time[1]}
            </h2>
            <br/>
            <h3><u>{"השימוש: "}</u></h3>
            <h4>
                {use_arr.map((use, index) => (
                    <p key={index}>
                        {use}
                    </p>
                ))}
            </h4>
            <br/>
            <h3><u>{"הצורה: "}</u></h3>
            <h4>
                {shape_arr.map((shape, index) => (
                    <p key={index}>
                        {shape}
                    </p>
                ))}
            </h4>
            <br/>
            <h3><u>{"בשלילה: "}</u></h3>
            <h4>{props.time[4]}</h4>
        </div>
    )
}

export default Time

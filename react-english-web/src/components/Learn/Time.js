import React from 'react'

// Displays a time + use + shape + negative
function Time(props) {

    // props.time = [0: timeEn, 1: timeHe, 2: use, 3: shape, 4: negative]

    const use_arr = props.time[2].split("\n")
    const shape_arr = props.time[3].split("\n")
    
    return (
        <div style = {{ direction: "rtl" }}>
            <h1>
            {props.time[0]}
            {" - "}
            {props.time[1]}
            </h1>
            <br/>
            <h2><u>{"השימוש: "}</u></h2>
            <h3>
                <ul>
                    {use_arr.map((use, index) => (
                        <li key={index}>
                            {use}
                        </li>
                    ))}
                </ul>
            </h3>
            <br/>
            <h2><u>{"הצורה: "}</u></h2>
            <h3>
                <ul>
                    {shape_arr.map((shape, index) => (
                        <li key={index}>
                            {shape}
                        </li>
                    ))}
                </ul>
            </h3>
            <br/>
            <h2><u>{"בשלילה: "}</u></h2>
            <h3>{props.time[4]}</h3>
        </div>
    )
}

export default Time

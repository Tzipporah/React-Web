import React from 'react'

function Time(props) {

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
            <h2>{"השימוש: "}</h2>
            <h3><ul>
                {use_arr.map((use, index) => (
                    <li key={index}>
                        {use}
                    </li>
                ))}
            </ul></h3>
            <br/>
            <h2>{"הצורה: "}</h2>
            <h3><ul>
                {shape_arr.map((shape, index) => (
                    <li key={index}>
                        {shape}
                    </li>
                ))}
            </ul></h3>
            <br/>
            <h2>{"בשלילה: "}</h2>
            <h3>{props.time[4]}</h3>
        </div>
    )
}

export default Time

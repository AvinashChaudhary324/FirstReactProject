import React, {Fragment,useState} from 'react'

export default function Div() {
    const [num, setNum] = useState(1)
    const [num1, setNum1] = useState(2)
    const [result, setResult] = useState(0)

     function getDiv() {
         setResult(num/num1)
    }
     return (
        <>
        <h2>Find Division</h2>
        <input type="text" onChange={e=> setNum(e.target.value)}/><br></br>
        <input type="text" onChange={e=> setNum1(e.target.value)}/><br></br>
        <button onClick={getDiv}>Division</button>
        <h3>{result}</h3>
        </>
     )
}
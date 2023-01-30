import React, {useState} from 'react'

export default function Mul() {
    const [num, setNum] = useState(0)
    const [num1, setNum1] = useState(1)

    // function getSqr() {
    //     setNum(num*num)
    // }
     return (
        <>
        <h2>Find Multiplication</h2>
        <input type="text" onChange={e=> setNum(e.target.value)}/><br></br>
        <input type="text" onChange={e=> setNum1(e.target.value)}/>
        <h1>Multiplication of {num} and {num1} is {num*num1}</h1>
        </>
     )
}
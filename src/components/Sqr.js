import React, {useState} from 'react'

export default function Sqr() {
    const [num, setNum] = useState(0)

    // function getSqr() {
    //     setNum(num*num)
    // }
     return (
        <>
        <h2>Find Square</h2>
        <input type="text" onChange={e=> setNum(e.target.value)}/>
        <h1>Square of {num} is {num*num}</h1>
        </>
     )
}
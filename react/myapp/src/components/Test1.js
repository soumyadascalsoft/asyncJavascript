
import React from 'react'

const Test1 = (props) => {
    const click = () =>{
        return alert('hello')
    }
  return (
    <div>
        <h1>{props.name}</h1>
        <button onClick={()=>click()}>Click me</button>
    </div>
  )
}

export default Test1
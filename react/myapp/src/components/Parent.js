import React from 'react'
import { Child } from './Child'

export const Parent = () => {
    function greet(callback){
        alert(`Hi , ${callback}`)

    }
  return (
    <div>
        <Child greet={greet}/>
    </div>
  )
}

import React from 'react'

export const Child = (props) => {
    function clickme(){
        return props.greet('dad')
    }
  return (
    <div>
        <button onClick={()=>clickme()}>Click Here</button>
    </div>
  )
}

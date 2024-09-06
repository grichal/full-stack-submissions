import React from 'react'

function FunctionButton(props) {

    const {value,setter,text} = props

  return (
    <button onClick={()=>setter(value+1)}> {text} </button>
  )
}

export default FunctionButton
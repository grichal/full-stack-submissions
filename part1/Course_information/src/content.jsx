import React from 'react'

const Parts =(props)=>{

  return(
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

function Content(props) {
  return (<>
      <Parts part={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
      <Parts part={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
      <Parts part={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
      </>
  )
}

export default Content
import React from 'react'
import OutputRow from './OutputRow'

const output = props => {
  return (
    <div>
        <OutputRow value={props.answer} textSize={{font : '20px'}} />
        <OutputRow value={props.answer}  />
        
      
    </div>
  )
}

export default output

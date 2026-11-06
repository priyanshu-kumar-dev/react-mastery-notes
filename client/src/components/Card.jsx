import React from 'react'
import '../styles/Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.Company}</h1>
      <h1>{props.Course}</h1>
      <h3 className='fees'>{props.Fees}</h3>
    </div>
  )
}

export default Card
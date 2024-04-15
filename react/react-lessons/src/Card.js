import React from 'react'
import './Cardapp.css'
import Nav from './Nav.js'

function Card(props) {
  return (
   <div className='CardHolder'>
       <div className='Cards'>
          <img src={props.imgLink} alt='Astronaut'></img>
          <h3>{props.Name}</h3>
          <h4>{props.Job}</h4>
          <p>{props.JobDesc}</p>
          <Nav />
        </div>
   </div>
  )
}

export default Card
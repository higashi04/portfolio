import React from 'react'
import './TechStack.css'

export default function TechStack(props) {
  return (
    <div className='container tech-cont'>
        <div className="row my-3">
            <div className="col-6 tech-text">{props.name}</div>
            <div className="col-3">
                <img className='img-fluid img-logo' src={props.logo} alt={props.name} />
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Buttons/button'

function Topnav() {
  return (
    <div className="topnav">
      <h1 className="david">David</h1>
      <div className="link-frame">
        <Link className="topnav-link" to="/#">About</Link>
        <Link className="topnav-link" to="/#">Skills</Link>
        <Link className="topnav-link" to="/#">Work</Link>
        <Button title="Say Hi!"/>
        </div>
    </div>

  )
}

export default Topnav

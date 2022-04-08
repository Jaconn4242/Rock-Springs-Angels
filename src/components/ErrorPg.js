import React from 'react'
import {Link} from "react-router-dom"

function ErrorPg() {

  return (
    <>
    <div>ERROR PAGE! THIS PAGE DOES NOT EXIST</div>
    <Link to="/">Back to Home</Link>
    </>
  )
}

export default ErrorPg
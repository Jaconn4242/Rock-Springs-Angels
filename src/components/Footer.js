import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='Footer'>
        <small>Copyright </small>
        <img className='copyright-logo' src="./Copyright-logo.png" alt="" />
        <span>2022 <span className='company-name'><b>C</b>onns<b>C</b>oding</span></span> 
    </div>
  )
}

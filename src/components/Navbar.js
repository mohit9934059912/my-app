import React  from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
//import React, { useState } from 'react'



export default function Navbar(props) {
 // const [myStyle , setMyStyle]= useState({
      //  color:'black',
       // backgroundColor:'white',
       // border:'1px solid white' 
  // })
 
  return (
   <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid" >
      <a href="/" className="navbar-brand">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedcontent" aria-controls="navbarSupportedcontent" aria-expanded="false"
      arial-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedcontent">
        <ul className="navbar-nav me-auto mb-2 mb-1g-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li> */}
          
        </ul>
        {/*<form  className="d-flex">
          <input className="form=control me-2" type="search" placeholder="search" aria-label="search"/>
          <button className="btn btn-outline-success" type="submit">search</button>
        
        </form>*/}
       {/*} <div className="d-flex">
          <div className="bg-primary rounded mx-2"onClick={()=>props.toggleMode('primary')}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-success rounded mx-2"onClick={()=>props.toggleMode('success')}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2"onClick={()=>props.toggleMode('warning')}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-2"onClick={()=>props.toggleMode('danger')}style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
      </div>*/}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input"onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label  className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
{/*<div classNmae="dropdown" data-bs-theme="light">
  <button className="btn btn-primary mx-2 dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
    Select backgroundColor
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
    <li><a class="dropdown-item active" href="#dc3545">Red</a></li>
    <li><a class="dropdown-item" href="#0d6efd">Blue</a></li>
    <li><a class="dropdown-item" href="#000">Black</a></li>
    <li><a class="dropdown-item" href="#0dcaf0">cyan</a></li>
    <li><a class="dropdown-item" href="#ffc107">yellow</a></li>
  </ul>
      </div>*/}
      </div>
    </div>
   </nav></>
   
  )
}
Navbar.propTypes = {
    title:PropTypes.string,
    aboutText:PropTypes.string}
    Navbar.defaultProps = {
        title:'set title here',
        aboutText:'set text here'
    }

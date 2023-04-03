import React from 'react'
import './Navbar.css';
import{Link} from 'react-router-dom';
export default function Navbar() {

return (
   
    <React.Fragment>


<div class="navbar">
 
 
  <div class="nav-header">
    <div class="nav-logo">
      <a href="#">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7daRse6rLr0177ExAQGHyvk2bdcHijpNabA&usqp=CAU" width="113px" height="35px" alt="logo"/>
      </a>
    </div>
  </div>
   
  
  <input type="checkbox" id="nav-check"/>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
 
  
  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Profiles</a>
    <a href="#">Services</a>
    <a href="#">Contacts</a>
    <Link to ='/'>login</Link>
    {/* <button class="loginBtn">Login</button> */}
  </div>
 
</div>

</React.Fragment>
)
}

import React from 'react'
import './Facebook.css';
import{Link} from 'react-router-dom';
export default function Facebook() {

return (
   
    <React.Fragment>
      <div class="fb"> 
        <center>
        
          <div class="heading"><h1>Facebook</h1></div></center><br></br>
        <center>
        
        <div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1"></label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="Email or phone number "/>
    </div><br></br>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1"></label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div><br></br>
    {/* <div class="form-group">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
        <label class="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div> */}
    <button type="button" class="log">Log in</button>
    </form><br></br>
  <div class="dropdown-divider"></div>
   
  <a class="dropdown-item" href="#">Forgot password?</a>
</div><br></br>
<button type="button" class="create">Create new Account</button><br></br>
<Link to ='/reg'>REGISTER</Link>
 </center></div>
        
    </React.Fragment>
)
}
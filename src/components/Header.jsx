import React from 'react';
import {Link} from 'react-router-dom';
function Header(){
  return(
    <div>
      <h1>Welcome</h1>
      <Link to="/">Home</Link> | <Link to="/marketschedule">Market Schedule</Link> | <Link to="/available">Available Produce</Link>
    </div>
  );
}

export default Header;

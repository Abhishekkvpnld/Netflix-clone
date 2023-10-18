import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="image"  className='logo'/>
<div>
<p className='nav-title'><span  className='home'>Home</span><span  className='movies'>Movies</span> <span  className='tvShows'>TV Shows</span><span className='popular'>New & Popular</span> <span className='myList'>MyList</span></p>
</div>
<img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="image"  className='avatar'/>
    </div>
  );
}
export default Navbar;
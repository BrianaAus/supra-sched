import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">

        <h1 className='navbar-brand'><Link to="/Home" className="nav-link"> HOME PAGE</Link></h1>


        <ul class="navbar-nav">
          <li className="nav-item"> <Link to="/link1" className="nav-link"> LINK 1</Link></li>

          <li className="nav-item"> <Link to="/login" className="nav-link"> Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
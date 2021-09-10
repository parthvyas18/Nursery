import React from 'react'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className='d-flex'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <div className="collapse navbar-collapse NavBar" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <NavLink className="nav-link active" to="/Home">Nursery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/Home"><span className="fa fa-home fa-lg"></span>Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#drop" role="button" aria-haspopup="true" aria-expanded="false">Plants</a>
                            <div className="dropdown-menu black" id="drop">
                                <NavLink className="nav-link active " to="/Adenium">Adenium</NavLink>
                                <NavLink className="nav-link active " to="/Cactus">Cactus</NavLink>
                                <NavLink className="nav-link active " to="/Landscapes">Landscapes</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/AboutUs"><span className="fa fa-info fa-lg"></span> AboutUs</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
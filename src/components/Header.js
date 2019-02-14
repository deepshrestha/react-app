import React from 'react';
import Notification from './../components/Notification';
import Settings from './../components/Settings';

function Header(props){

    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top" style={{backgroundColor: "#8b3238"}}>
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">
                        <img src="/src/images/cibt.jpg" height="30" width="40" />
                    </a>
                    <form className="form-inline mr-auto mt-2 mt-lg-0">
                        <input className="form-control-sm mr-md-2" size="40" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-sm btn-outline-danger my-2 my-md-0" type="submit">
                            <span style={{color: "#fff"}}>Search</span>
                        </button>
                    </form>
                    <ul className="navbar-nav my-2 my-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><span style={{color: "#fff"}}>Home</span> <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Notification />
                        </li>
                        <li className="nav-item">
                            <Settings />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
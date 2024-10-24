import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (

        <>

            <div>
                <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link id="heading" className="navbar-brand" to="/">UPLIFT- A Helping Hand</Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <Link id="head" className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="head" className="nav-link active" aria-current="page" to="/sign">Sign-up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="head" className="nav-link active" aria-current="page" to="/needhelp">Need Help</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        </>
    )
}

export default Navbar

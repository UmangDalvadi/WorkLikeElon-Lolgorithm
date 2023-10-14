import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="nav-link active bg-color" aria-current="page" to="/">
                    Quotes
                </Link>
                <Link className="nav-link active bg-color" aria-current="page" to="/WebBlocker">
                    Web-Blocker
                </Link>
                {/* <a className="nav-link active bg-color" aria-current="page" href="/">Home</a> */}
            </nav>
        </div>
    )
}

export default navbar
// <div className="container-fluid bg-color">
//     {/* <a className="navbar-brand bg-color" href="/">Navbar</a> */}
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse bg-color" id="navbarNavAltMarkup">
//         <div className="navbar-nav ">
//             <a className="nav-link active bg-color" aria-current="page" href="/">Home</a>
//             <a className="nav-link bg-color" href="/">Features</a>
//             <a className="nav-link bg-color" href="/">Pricing</a>
//             {/* <a className="nav-link disabled bg-color" href="/" tabindex="-1" aria-disabled="true">Disabled</a> */}
//         </div>
//     </div>
// </div>

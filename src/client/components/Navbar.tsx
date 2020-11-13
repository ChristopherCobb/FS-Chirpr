import React from 'react';
import { Link } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger justify-content-between">
            <div className="container">
                <Link to="/" className="navbar-brand text-white">Chirpr</Link>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/chirp/add">Add Chirp</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

interface INavbarProps { }

export default Navbar
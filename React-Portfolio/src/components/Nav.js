import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export default function Nav () {
    return (
        <header className="App-header">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#top">&lt;Ellexandra Cox &gt;</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/projects'>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/resume'>
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Social
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="" target="_blank" rel="noreferrer">Instagram</a></li>
                                    <li><a className="dropdown-item" href="" target="_blank" rel="noreferrer">Twitter</a></li>
                                    <li><a className="dropdown-item" href="" target="_blank" rel="noreferrer">Facebook</a></li>
                                    <li><a className="dropdown-item" href="" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
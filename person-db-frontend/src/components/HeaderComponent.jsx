import React, {useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const HeaderComponent = () => {

    const history = useHistory();
    const location = useLocation();
    const [show, setShow] = useState(false);

    const personsClass = location.pathname.match("/persons") ? "active" : "";
    const addPersonClass = location.pathname.match("/add-person/_add") ? "active" : "";
    const aboutClass = location.pathname.match("/about") ? "active" : "";

    const switchPage = (e) => {
        e.preventDefault();
        history.push(e.target.getAttribute('href'));
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <button onClick={() => setShow(!show)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse ${show && "show"} navbar-collapse`}  id="navbarToggler">
                        <a href="/persons" className="navbar-brand">Person Management App</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className={`nav-item ${personsClass}`}>
                                <a className="nav-link" href="/persons" onClick={(e) => switchPage(e, "/persons")} >Persons <span className="sr-only">(current)</span></a>
                            </li>
                            <li className={`nav-item ${addPersonClass}`}>
                                <a className="nav-link" href="/add-person/_add" onClick={(e) => switchPage(e, "/add-person/_add")} >Add Person</a>
                            </li>
                            <li className={`nav-item ${aboutClass}`}>
                                <a className="nav-link disabled" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/MrazRobert/person-database" className="git-icon"><FaGithub /></a>
                </nav>
            </header>
        </div>
        )
}

export default HeaderComponent;
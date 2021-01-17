import React from 'react';

const HeaderComponent = () => {

    const isActive = link => {
        return (link === window.location.pathname) ? "active" : "";
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"  id="navbarTogglerDemo01">
                        <a href="/" className="navbar-brand">Person Management App</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className={`nav-item ${isActive("/persons")}`}>
                                <a className="nav-link" href="/persons">Persons <span className="sr-only">(current)</span></a>
                            </li>
                            <li className={`nav-item ${isActive("/add-person/_add")}`}>
                                <a className="nav-link" href="/add-person/_add">Add Person</a>
                            </li>
                            <li className={`nav-item ${isActive("/about")}`}>
                                <a className="nav-link disabled" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
        )
}

export default HeaderComponent;
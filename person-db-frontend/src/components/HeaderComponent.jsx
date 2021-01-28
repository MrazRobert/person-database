import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const HeaderComponent = () => {

    const history = useHistory();

    const baseState = {
        personsBtn: '',
        addPersonBtn: '',
        aboutBtn: '',
    }

    const [isActive, setIsActive] = useState(baseState);
    const [show, setShow] = useState(false);

    // const isActive = link => {
    //     return (link === window.location.pathname) ? "active" : "";
    // }

    const toAddPerson = (e) => {
        e.preventDefault();
        history.push('/add-person/_add');
        setIsActive(baseState);
        setIsActive({personBtn: 'active'});
    }

    const toPersons = (e) => {
        e.preventDefault();
        history.push('/persons');
        setIsActive(baseState);
        setIsActive({personsBtn: 'active'});
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
                            <li className={`nav-item ${isActive}`}>
                                <a className="nav-link" href="/persons" onClick={(e) => toPersons(e)} >Persons <span className="sr-only">(current)</span></a>
                            </li>
                            <li className={`nav-item ${isActive}`}>
                                <a className="nav-link" href="/add-person/_add" onClick={(e) => toAddPerson(e)} >Add Person</a>
                            </li>
                            <li className={`nav-item ${isActive}`}>
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
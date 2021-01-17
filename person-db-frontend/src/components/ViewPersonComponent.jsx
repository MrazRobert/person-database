import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import PersonService from '../services/PersonService';

const ViewPersonComponent = () => {
    const {id} = useParams();
    const [person, setPerson] = useState({});

    useEffect(() => {
        PersonService.getPersonById(id).then(response => {
            setPerson(response.data);
        });
    }, [id]);

    return (
        <div style={{paddingTop: "60px"}}>
                <div className="card col-md-6 offset-md-3" style={{marginTop: "20px"}}>
                    <h3 className="text-center">View Person Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label htmlFor="firstName">Person First Name: </label>
                            <div id="firstName" style={{marginLeft: "5px"}}>{person.firstName}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="lastName">Person Last Name: </label>
                            <div id="lastName" style={{marginLeft: "5px"}}>{person.lastName}</div>
                        </div>
                        <div className="row">
                            <label htmlFor="firstName">Person Email ID: </label>
                            <div id="emailId" style={{marginLeft: "5px"}}>{person.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default ViewPersonComponent
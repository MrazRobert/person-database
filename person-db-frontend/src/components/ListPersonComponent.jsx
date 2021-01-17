import React, {useState, useEffect} from 'react'
import PersonService from '../services/PersonService';
import {useHistory} from 'react-router-dom';

const ListPersonComponent = () => {
    
    const history = useHistory();
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        PersonService.getPersons().then(response => {
            setPersons(response.data);
        })
    }, []);

    const addPerson = () => {
        history.push('/add-person/_add');
    }

    const editPerson = (id) => {
        history.push(`/add-person/${id}`);
    }

    const deletePerson = (id) => {
        PersonService.deletePerson(id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== id));
            });
    }

    const viewPerson = (id) => {
        history.push(`/view-person/${id}`);
    }

    return (
        <div style={{paddingTop: "60px"}}>
            <h2 className="text-center">Persons List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addPerson} style={{marginBottom: "20px"}}>Add Person</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Person First Name</th>
                            <th>Person Last Name</th>
                            <th>Person Email Id</th>
                            <th style={{textAlign: "center"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map(person => {
                                const {id, firstName, lastName, emailId} = person;
                                return (
                                    <tr key={id}>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{emailId}</td>
                                        <td>
                                            <div style={{textAlign: "center"}}>
                                                <button onClick={() => editPerson(id)} className="btn btn-success" style={{padding: "0 5px"}}>Update</button>
                                                <button onClick={() => deletePerson(id)} className="btn btn-danger" style={{padding: "0 5px", marginLeft:"5px"}}>Delete</button>
                                                <button onClick={() => viewPerson(id)} className="btn btn-info" style={{padding: "0 5px", marginLeft:"5px"}}>View</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListPersonComponent;
import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom';
import PersonService from '../services/PersonService';

const CreatePersonComponent = () => {
    const {id} = useParams();
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    useEffect(() => {
        if(id !== '_add') {
            PersonService.getPersonById(id)
                .then(response => {
                    let person = response.data;
                    setFirstName(person.firstName);
                    setLastName(person.lastName);
                    setEmailId(person.emailId);
                })
        }else {
            setFirstName("");
            setLastName("");
            setEmailId("");
        }
    }, [id]);

    const saveOrUpdatePerson = (e) => {
        e.preventDefault();
        if(emailValidation()) {
            let person = {firstName: firstName, lastName: lastName, emailId: emailId.toLowerCase()};
            console.log('person => ' + JSON.stringify(person));
            if(id === '_add') {
                PersonService.createPerson(person)
                    .then(response => {history.push('/persons')});
            }else {
                PersonService.updatePerson(id, person)
                    .then(response => {history.push('/persons')});
            }
        }
    }

    const getTitle = () => {
        return id === '_add' ? 
            <h3 className="text-center">Add Person</h3> 
            :
            <h3 className="text-center">Update Person</h3>;

    }

    const cancel = () => {
        history.push('/persons');
    }

    const emailValidation = () => {
        let regex = RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
        if(regex.test(emailId)) {
            console.log('email ok');
            return true;
        }else {
            console.log('wrong email');
            return false;
        }
    }

    return (
        <div style={{paddingTop: "60px"}}>
                <div className="create-container" style={{marginTop: "20px"}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name: </label>
                                        <input type="text" name="firstName" className="form-control" placeholder="First Name"
                                            value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name: </label>
                                        <input type="text" name="lastName" className="form-control" placeholder="Last Name"
                                            value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailId">Email Id: </label>
                                        <input type="text" name="emailId" className="form-control" placeholder="Email Address"
                                            value={emailId} onChange={(e) => setEmailId(e.target.value)}/>
                                    </div>
                                    <button type="submit" className="btn btn-success" onClick={saveOrUpdatePerson}>Save</button>
                                    <button type="button" className="btn btn-danger" onClick={cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default CreatePersonComponent;
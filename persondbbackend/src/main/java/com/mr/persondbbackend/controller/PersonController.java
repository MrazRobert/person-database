package com.mr.persondbbackend.controller;

import com.mr.persondbbackend.exception.ResourceNotFoundException;
import com.mr.persondbbackend.model.Person;
import com.mr.persondbbackend.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    // get all persons
    @GetMapping("/persons")
    public List<Person> getAllPerson() {
        return personRepository.findAll();
    }

    // create person rest api
    @PostMapping("/persons")
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }

    // get person by id rest api
    @GetMapping("/persons/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
        Person person = personRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person not exist with id: " + id));
        return ResponseEntity.ok(person);
    }

    // update person rest api
    @PutMapping("/persons/{id}")
    public ResponseEntity<Person> updatePersonById(@PathVariable Long id, @RequestBody Person personDetails) {
        Person person = personRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person not exist with id: " + id));
        person.setFirstName(personDetails.getFirstName());
        person.setLastName(personDetails.getLastName());
        person.setEmailId(personDetails.getEmailId());
        Person updatedPerson = personRepository.save(person);
        return ResponseEntity.ok(updatedPerson);
    }

    // delete person rest api
    @DeleteMapping("/persons/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePerson(@PathVariable Long id) {
        Person person = personRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person not exist with id: " + id));
        personRepository.delete(person);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}

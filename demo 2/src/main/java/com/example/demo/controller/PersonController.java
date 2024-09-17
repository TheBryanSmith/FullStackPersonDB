package com.example.demo.controller;

import com.example.demo.model.Person;
import com.example.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/person-controller")
public class PersonController {

    private PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @RequestMapping(path = "/create", method = RequestMethod.POST)
    public ResponseEntity<Person> create(@RequestBody Person person){
        final Person responseBody = personService.create(person);
        final ResponseEntity<Person> responseEntity = new ResponseEntity<>(responseBody, HttpStatus.CREATED);
        return responseEntity;
    }

    @RequestMapping(path = "/read{id}", method = RequestMethod.GET)
    public ResponseEntity<Person> read(@PathVariable Long id){
        final Person responseBody = personService.readById(id);
        final ResponseEntity<Person> responseEntity = new ResponseEntity<>(responseBody,HttpStatus.OK);
        return responseEntity;
    }

    @RequestMapping(path = "/update/{id}" ,method = RequestMethod.PUT)
    public ResponseEntity<Person> update()





}

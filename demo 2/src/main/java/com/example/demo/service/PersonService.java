package com.example.demo.service;

import com.example.demo.model.Person;
import com.example.demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
  public PersonService (PersonRepository personRepository){
      this.personRepository = personRepository;
  }

  public Person create (Person person){
      return personRepository.save(person);
  }

  public Person readById(Long id){
        return personRepository.findById(id).get();
  }

  public List<Person> readAll(){
     final Iterable<Person> myFolks = personRepository.findAll();
       final List<Person> personList = new ArrayList<>();
        myFolks.forEach(personList::add);
        return personList;
      }


  public Person update(Long id, Person newPersonData){
   final Person personInDatabase = this.readById(id);
   personInDatabase.setId(personInDatabase.getId());
    personInDatabase.setFirstName(personInDatabase.getFirstName());
    personInDatabase.setLastName(personInDatabase.getLastName());
    return personRepository.save(personInDatabase);
  }

  public Person deleteById(Long id){
        final Person personToBeDeleted = this.readById(id);
        personRepository.delete(personToBeDeleted);
        return personToBeDeleted;
  }

  }

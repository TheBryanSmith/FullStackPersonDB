package com.example.demo.config;

import com.example.demo.model.Person;
import com.example.demo.repository.PersonRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PersonConfig {

    @Autowired
    private PersonRepository personRepository;
    @PostConstruct
    public void setup(){
        Person person1 = new Person();
        Person person2 = new Person();

        person1.setId(1L);
        person1.setFirstName("Bryan");
        person1.setLastName("Smith");

        personRepository.save(person1);

        person2.setId(2L);
        person2.setFirstName("Monkey");
        person2.setLastName("Luffy");

        personRepository.save(person2);
    }
}

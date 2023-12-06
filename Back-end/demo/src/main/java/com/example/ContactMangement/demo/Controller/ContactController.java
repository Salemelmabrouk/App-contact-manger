package com.example.ContactMangement.demo.Controller;

import com.example.ContactMangement.demo.ContactMangementApplication;
import com.example.ContactMangement.demo.Model.Contact;
import com.example.ContactMangement.demo.Repository.ContactRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.regex.Matcher;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;




    @GetMapping("/contacts")
    public List<Contact> getAll() {
        return contactRepository.findAll();
    }

    @Transactional
    @PostMapping("/create")
    public Contact add(@Validated @RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    @Transactional
    @GetMapping("/get/{id}")
    public ResponseEntity<Contact> get(@PathVariable Long id) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(contact);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Contact> update(@PathVariable Long id, @RequestBody Contact contact) {
        Contact contact1 = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        contact1.setUser_Name(contact.getUser_Name());
        contact1.setEmail(contact.getEmail());
        contact1.setPassword(contact.getPassword());
        contact1.setPhone(contact.getPhone());
        contact1.setGender(contact.getGender());

        Contact updatedcontact = contactRepository.save(contact1);
        return ResponseEntity.ok(updatedcontact);
    }

    @DeleteMapping("/delete/{id}")


    public ResponseEntity<HttpStatus> delete(@PathVariable long id) {

        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        contactRepository.delete(contact);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);


    }
}








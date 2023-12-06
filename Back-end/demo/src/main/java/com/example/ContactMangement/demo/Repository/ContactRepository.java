package com.example.ContactMangement.demo.Repository;

import com.example.ContactMangement.demo.Model.Contact;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository

public interface ContactRepository extends JpaRepository<Contact,Long> {


}

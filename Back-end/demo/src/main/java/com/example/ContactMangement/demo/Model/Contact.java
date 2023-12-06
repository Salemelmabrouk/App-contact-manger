package com.example.ContactMangement.demo.Model;

import jakarta.persistence.*;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NonNull;
import org.hibernate.annotations.GenericGenerator;



@Data
@GenericGenerator(name = "uuid", strategy = "uuid2")
@Entity
@Table(name="contacts")

public class Contact  {

    @JoinColumn
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)



    @Column(name = "id")
   public long id;


    @Column(name = "user_Name")
    private String user_Name;

    @NonNull

    @Column(name = "email")
    private String email;


    @Column(name = "password")
    private String password;


    @Column(name = "phone")
    private long phone;

    @Column(name = "gender")
    private String gender;
    public long getId() {
        return id;
    }

    public Contact(){

        super();
        this.user_Name = user_Name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.gender = gender;



    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUser_Name() {
        return user_Name;
    }

    public void setUser_Name(String user_Name) {
        this.user_Name = user_Name;
    }
    @NonNull
    public String getEmail() {
        return email;
    }
    @NonNull
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }




   }

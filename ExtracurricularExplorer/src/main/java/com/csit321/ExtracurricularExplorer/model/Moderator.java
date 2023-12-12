package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.time.LocalDate;

@Setter
@Getter
@Entity
public class Moderator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="firstName",length = 15, nullable = false)
    private String firstName;
    @Column(name="lastName",length = 15, nullable = false)
    private String lastName;
    @Column(name="email",length = 30,unique = true, nullable = false)
    private String email;
    @Column(name="password",length = 30, nullable = false)
    private String password;
    private String gender;
    private String schoolId;
    private String department;
    private LocalDate dateJoined;
    private String profilePicture;


    public Moderator(){

    }


}

package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;
import org.springframework.boot.autoconfigure.web.WebProperties;

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
    @Getter
    private String profilePicture;

    public Moderator(){

    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }
}

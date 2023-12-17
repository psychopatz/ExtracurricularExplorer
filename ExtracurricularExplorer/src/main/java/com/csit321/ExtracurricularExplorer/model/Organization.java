package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Entity
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String acronym;

    private String logo;

    @Column(columnDefinition = "LONGBLOB")
    private String orgDetails;
    private String orgRegisterLink;
    private String orgBanner;

    @Column(columnDefinition = "LONGBLOB")
    private String orgPhotos;

    public Organization() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAcronym() {
        return acronym;
    }

    public void setAcronym(String acronym) {
        this.acronym = acronym;
    }


    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getOrgDetails() {
        return orgDetails;
    }

    public void setOrgDetails(String orgDetails) {
        this.orgDetails = orgDetails;
    }

    public String getOrgRegisterLink() {
        return orgRegisterLink;
    }

    public void setOrgRegisterLink(String orgRegisterLink) {
        this.orgRegisterLink = orgRegisterLink;
    }

    public String getOrgBanner() {
        return orgBanner;
    }

    public void setOrgBanner(String orgBanner) {
        this.orgBanner = orgBanner;
    }

    public String getOrgPhotos() {
        return orgPhotos;
    }

    public void setOrgPhotos(String orgPhotos) {
        this.orgPhotos = orgPhotos;
    }
}

package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

import java.util.Collection;

@Getter
@Entity
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String acronym;
    private Collection<String> tags;
    private String logo;
    private int orgDataID;

    public Organization() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAcronym(String acronym) {
        this.acronym = acronym;
    }

    public void setTags(Collection<String> tags) {
        this.tags = tags;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public void setOrgDataID(int orgDataID) {
        this.orgDataID = orgDataID;
    }
}

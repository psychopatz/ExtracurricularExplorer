package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;

import java.util.Collection;

@Getter
@Entity
public class OrganizationData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int orgID;
    private String orgDetails;
    private String orgProcess;
    private String orgRegisterLink;
    private String orgBanner;
    private Collection<String> orgPhotos;

    public OrganizationData() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setOrgID(int orgID) {
        this.orgID = orgID;
    }

    public void setOrgDetails(String orgDetails) {
        this.orgDetails = orgDetails;
    }

    public void setOrgProcess(String orgProcess) {
        this.orgProcess = orgProcess;
    }

    public void setOrgRegisterLink(String orgRegisterLink) {
        this.orgRegisterLink = orgRegisterLink;
    }

    public void setOrgBanner(String orgBanner) {
        this.orgBanner = orgBanner;
    }

    public void setOrgPhotos(Collection<String> orgPhotos) {
        this.orgPhotos = orgPhotos;
    }
}

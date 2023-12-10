package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Collection;
import java.util.Date;

@Getter
@Entity
public class Event {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String banner;
    @Column(columnDefinition="LONGBLOB")
    private String details;
    
    private int eventDataID;
    private String venue;
    private LocalDate date;
    private LocalTime time;
    private Collection<String> tags;

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public void setEventDataID(int eventDataID) {
        this.eventDataID = eventDataID;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public void setTags(Collection<String> tags) {
        this.tags = tags;
    }
}

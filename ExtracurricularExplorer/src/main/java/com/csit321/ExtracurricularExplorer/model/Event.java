package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Collection;
import java.util.Date;

@Setter
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

}

package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Collection;

@Setter
@Getter
@Entity
public class EventData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int eventID;

    @Column(columnDefinition="LONGBLOB")
    private String content;

    private Collection<String> images;
    private LocalDate dateModified;
    private int recentAuthor;
    private Collection<Integer> authors;

    public EventData() {
    }

}

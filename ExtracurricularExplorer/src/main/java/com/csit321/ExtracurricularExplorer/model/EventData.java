package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDate;
import java.util.Collection;

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

    public void setId(int id) {
        this.id = id;
    }

    public void setEventId(int eventId) {
        this.eventID = eventId;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setImages(Collection<String> images) {
        this.images = images;
    }

    public void setDateModified(LocalDate dateModified) {
        this.dateModified = dateModified;
    }

    public void setRecentAuthor(int recentAuthor) {
        this.recentAuthor = recentAuthor;
    }

    public void setAuthors(Collection<Integer> authors) {
        this.authors = authors;
    }
}

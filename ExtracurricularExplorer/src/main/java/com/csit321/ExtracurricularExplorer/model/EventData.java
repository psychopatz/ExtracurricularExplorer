package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Collection;

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getEventID() {
        return eventID;
    }

    public void setEventID(int eventID) {
        this.eventID = eventID;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Collection<String> getImages() {
        return images;
    }

    public void setImages(Collection<String> images) {
        this.images = images;
    }

    public LocalDate getDateModified() {
        return dateModified;
    }

    public void setDateModified(LocalDate dateModified) {
        this.dateModified = dateModified;
    }

    public int getRecentAuthor() {
        return recentAuthor;
    }

    public void setRecentAuthor(int recentAuthor) {
        this.recentAuthor = recentAuthor;
    }

    public Collection<Integer> getAuthors() {
        return authors;
    }

    public void setAuthors(Collection<Integer> authors) {
        this.authors = authors;
    }
}

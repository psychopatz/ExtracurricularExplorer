package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Setter
@Getter
@Entity
public class WebData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;

    @Column(columnDefinition="LONGBLOB")
    private String content;

    private Collection<String> img;
    private Collection<String> imgDetails;

    public WebData() {
    }

}

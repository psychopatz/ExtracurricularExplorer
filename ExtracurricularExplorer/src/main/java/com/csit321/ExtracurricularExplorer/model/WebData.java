package com.csit321.ExtracurricularExplorer.model;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.Collection;

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
    private String imgDetails;

    public WebData() {
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setImg(Collection<String> img) {
        this.img = img;
    }

    public void setImgDetails(String imgDetails) {
        this.imgDetails = imgDetails;
    }
}

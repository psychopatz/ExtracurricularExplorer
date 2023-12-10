package com.csit321.ExtracurricularExplorer.controller;

import com.csit321.ExtracurricularExplorer.model.WebData;
import com.csit321.ExtracurricularExplorer.service.WebDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/data")
public class WebDataController {
    @Autowired
    private WebDataService webDataService;

    @PostMapping("/initialize")
    public String add (@RequestBody WebData data){
        webDataService.save(data);
        return "New Data successfully added";
    }

    @GetMapping("/get/{type}")
    public ResponseEntity<WebData> get(@PathVariable String type){
        try{
            WebData data = webDataService.findByType(type);
            return  new ResponseEntity<WebData>(data,HttpStatus.OK);

        }catch (NoSuchElementException e){
            return new ResponseEntity<WebData>(HttpStatus.NOT_FOUND);

        }
    }
    @PutMapping("/update/{type}")
    public ResponseEntity<WebData> update(@RequestBody WebData data, @PathVariable String type){
        try{
            WebData existingData = webDataService.findByType(type);
            webDataService.save(data);
            return new ResponseEntity<>(HttpStatus.OK);

        }catch (NoSuchElementException e){
            return new ResponseEntity<WebData>(HttpStatus.NOT_FOUND);
        }

    }
}

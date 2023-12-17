package com.csit321.ExtracurricularExplorer.controller;

import com.csit321.ExtracurricularExplorer.model.Moderator;
import com.csit321.ExtracurricularExplorer.service.ModeratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/account")
public class AccController {

    @Autowired
    private ModeratorService moderatorService;

    @PostMapping("/add")
    public String add(@RequestBody Moderator moderator){
        System.out.println(moderator);
        moderatorService.save(moderator);
        return "New Account Successfully added: ";
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Moderator> get(@PathVariable Integer id){
        try{
            Moderator moderator = moderatorService.get(id);
            return  new ResponseEntity<Moderator>(moderator, HttpStatus.OK);

        }catch (NoSuchElementException e){
            return new ResponseEntity<Moderator>(HttpStatus.NOT_FOUND);

        }
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<Moderator> update(@RequestBody Moderator moderator, @PathVariable Integer id){
        try{
            Moderator existingModerator = moderatorService.get(id);
            moderatorService.save(moderator);
            return new ResponseEntity<>(HttpStatus.OK);

        }catch (NoSuchElementException e){
            return new ResponseEntity<Moderator>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable Integer id){
        String message="Moderator ID:";
        try{
            Moderator moderator = moderatorService.get(id);
            moderatorService.delete(id);
            message = message+id+" Deleted Successfully.";

        }catch (NoSuchElementException e){
            message = message+id+" doesn't exist.";
        }
        return message;
    }

}

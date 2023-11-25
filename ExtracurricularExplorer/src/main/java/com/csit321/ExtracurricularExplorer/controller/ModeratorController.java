package com.csit321.ExtracurricularExplorer.controller;

import com.csit321.ExtracurricularExplorer.model.Event;
import com.csit321.ExtracurricularExplorer.model.Moderator;
import com.csit321.ExtracurricularExplorer.service.ModeratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/moderators")
public class ModeratorController {
    @Autowired
    private ModeratorService moderatorService;

    @PostMapping("/add")
    public String add(@RequestBody Moderator moderator){
        moderatorService.save(moderator);
        return "New moderator successfully added";
    }
    @GetMapping("/getAll")
    public List<Moderator> list(){
        return moderatorService.getAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<Moderator> get(@PathVariable Integer id){
        try{
            Moderator moderator = moderatorService.get(id);
            return  new ResponseEntity<Moderator>(moderator, HttpStatus.OK);

        }catch (NoSuchElementException e){
            return new ResponseEntity<Moderator>(HttpStatus.NOT_FOUND);

        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Moderator> update(@RequestBody Moderator moderator, @PathVariable Integer id){
        try{
            Moderator existingModerator = moderatorService.get(id);
            moderatorService.save(moderator);
            return new ResponseEntity<>(HttpStatus.OK);

        }catch (NoSuchElementException e){
            return new ResponseEntity<Moderator>(HttpStatus.NOT_FOUND);
        }

    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        moderatorService.delete(id);
        return "Deleted User with ID "+id;
    }
}

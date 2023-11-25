package com.csit321.ExtracurricularExplorer.controller;

import com.csit321.ExtracurricularExplorer.model.Event;
import com.csit321.ExtracurricularExplorer.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/events")
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping("/add")
    public String add (@RequestBody Event event){
        eventService.save(event);
        return "New event successfully added";
    }
    @GetMapping("/getAll")
    public List<Event> getAllEvents(){
        return eventService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> get(@PathVariable Integer id){
        try{
            Event event = eventService.get(id);
            return  new ResponseEntity<Event>(event,HttpStatus.OK);

        }catch (NoSuchElementException e){
            return new ResponseEntity<Event>(HttpStatus.NOT_FOUND);

        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<Event> update(@RequestBody Event event, @PathVariable Integer id){
        try{
            Event existingEvent = eventService.get(id);
            eventService.save(event);
            return new ResponseEntity<>(HttpStatus.OK);

        }catch (NoSuchElementException e){
            return new ResponseEntity<Event>(HttpStatus.NOT_FOUND);
        }

    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        eventService.delete(id);
        return "Deleted Event with ID "+id;
    }
}

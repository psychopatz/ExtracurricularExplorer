package com.csit321.ExtracurricularExplorer.controller;

import com.csit321.ExtracurricularExplorer.model.Event;
import com.csit321.ExtracurricularExplorer.model.EventData;
import com.csit321.ExtracurricularExplorer.service.EventDataService;
import com.csit321.ExtracurricularExplorer.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/eventdata")
public class EventDataController {
    @Autowired
    private EventDataService eventDataService;

    @PostMapping("/add")
    public String add(@RequestBody EventData event) {
        eventDataService.save(event);
        return "New event successfully added: " + event.getId();
    }

    @GetMapping("/getAll")
    public List<EventData> getAllEventData() {
        return eventDataService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EventData> get(@PathVariable Integer id) {
        try {
            EventData event = eventDataService.get(id);
            return new ResponseEntity<EventData>(event, HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<EventData>(HttpStatus.NOT_FOUND);

        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<EventData> update(@RequestBody EventData event, @PathVariable Integer id) {
        try {
            EventData existingEvent = eventDataService.get(id);
            eventDataService.save(event);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<EventData>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        String message = "Event ID:";
        try {
            eventDataService.delete(id);
            EventData event = eventDataService.get(id);
            message = message + id + " Deleted Successfully.";

        } catch (NoSuchElementException e) {
            message = message + id + " doesn't exist.";
        }
        return message;
    }
}

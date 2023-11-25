package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.Event;
import com.csit321.ExtracurricularExplorer.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService{

    @Autowired
    private EventRepository eventRepository;

    @Override
    public Event save(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public List<Event> getAll() {
        return eventRepository.findAll();
    }

    @Override
    public Event get(Integer id) {
        return eventRepository.findById(id).get();
    }
    @Override
    public void delete(Integer id){
        eventRepository.deleteById(id);
    }
}

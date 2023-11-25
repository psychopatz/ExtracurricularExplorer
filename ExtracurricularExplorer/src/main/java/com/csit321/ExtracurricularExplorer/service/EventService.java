package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.Event;

import java.util.List;

public interface EventService {
    public Event save(Event event);
    public List<Event> getAll();
    public Event get(Integer id);
    public void delete(Integer id);
}

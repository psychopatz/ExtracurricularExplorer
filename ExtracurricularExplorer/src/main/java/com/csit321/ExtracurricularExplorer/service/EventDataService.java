package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.EventData;

import java.util.List;

public interface EventDataService {
    public EventData save(EventData event);

    public List<EventData> getAll();

    public EventData get(Integer id);

    public void delete(Integer id);
}

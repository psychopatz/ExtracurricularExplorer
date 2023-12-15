package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.EventData;
import com.csit321.ExtracurricularExplorer.repository.EventDataRepository;
import com.csit321.ExtracurricularExplorer.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventDataServiceImpl implements EventDataService {

    @Autowired
    private EventDataRepository eventDataRepository;

    @Override
    public EventData save(EventData event) {
        return eventDataRepository.save(event);
    }

    @Override
    public List<EventData> getAll() {
        return eventDataRepository.findAll();
    }

    @Override
    public EventData get(Integer id) {
        return eventDataRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        eventDataRepository.deleteById(id);

    }
}

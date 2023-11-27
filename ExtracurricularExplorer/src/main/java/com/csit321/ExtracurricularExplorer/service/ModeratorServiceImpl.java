package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.Event;
import com.csit321.ExtracurricularExplorer.model.Moderator;
import com.csit321.ExtracurricularExplorer.repository.ModeratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModeratorServiceImpl implements ModeratorService{

    @Autowired
    private ModeratorRepository moderatorRepository;

    @Override
    public Moderator save(Moderator moderator) {
        return moderatorRepository.save(moderator);
    }

    @Override
    public List<Moderator> getAll() {
        return moderatorRepository.findAll();
    }

    @Override
    public Moderator get(Integer id) {
        return moderatorRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        moderatorRepository.deleteById(id);
    }

    @Override
    public Moderator findByEmail(String email) {
        return moderatorRepository.findByEmail(email);
    }
}

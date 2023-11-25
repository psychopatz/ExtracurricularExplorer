package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.Event;
import com.csit321.ExtracurricularExplorer.model.Moderator;

import java.util.List;

public interface ModeratorService {
    public Moderator save(Moderator moderator);
    public List<Moderator> getAll();
    public Moderator get(Integer id);
    public void delete(Integer id);
}

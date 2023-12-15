package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.Event;
import com.csit321.ExtracurricularExplorer.model.Organization;

import java.util.List;

public interface OrganizationService {
    public Organization save(Organization org);

    public List<Organization> getAll();

    public Organization get(Integer id);

    public void delete(Integer id);
}

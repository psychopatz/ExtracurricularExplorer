package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.Organization;
import com.csit321.ExtracurricularExplorer.model.OrganizationData;

import java.util.List;

public interface OrganizationDataService {
    public OrganizationData save(OrganizationData org);

    public List<OrganizationData> getAll();

    public OrganizationData get(Integer id);

    public void delete(Integer id);
}

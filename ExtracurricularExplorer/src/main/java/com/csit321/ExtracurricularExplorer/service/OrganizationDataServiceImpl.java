package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.Organization;
import com.csit321.ExtracurricularExplorer.model.OrganizationData;
import com.csit321.ExtracurricularExplorer.repository.OrganizationDataRepository;
import com.csit321.ExtracurricularExplorer.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizationDataServiceImpl implements OrganizationDataService {
    @Autowired
    private OrganizationDataRepository organizationDataRepository;

    @Override
    public OrganizationData save(OrganizationData org) {
        return organizationDataRepository.save(org);
    }

    @Override
    public List<OrganizationData> getAll() {
        return organizationDataRepository.findAll();
    }

    @Override
    public OrganizationData get(Integer id) {
        return organizationDataRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        organizationDataRepository.deleteById(id);
    }
}

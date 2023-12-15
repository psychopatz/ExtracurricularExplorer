package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.Organization;
import com.csit321.ExtracurricularExplorer.repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizationServiceImpl implements OrganizationService {
    @Autowired
    private OrganizationRepository organizationRepository;

    @Override
    public Organization save(Organization org) {
        return organizationRepository.save(org);
    }

    @Override
    public List<Organization> getAll() {
        return organizationRepository.findAll();
    }

    @Override
    public Organization get(Integer id) {
        return organizationRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        organizationRepository.deleteById(id);

    }

}

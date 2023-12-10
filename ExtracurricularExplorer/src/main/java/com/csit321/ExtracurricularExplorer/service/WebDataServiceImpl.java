package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.WebData;
import com.csit321.ExtracurricularExplorer.repository.WebDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WebDataServiceImpl implements WebDataService{

    @Autowired
    private WebDataRepository webDataRepository;

    @Override
    public WebData save(WebData webData) {
        return webDataRepository.save(webData);
    }

    @Override
    public WebData findByType(String type) {
        return webDataRepository.findByType(type);
    }
}

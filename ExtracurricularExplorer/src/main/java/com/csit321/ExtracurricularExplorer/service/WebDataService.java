package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.WebData;

public interface WebDataService {
    public WebData save(WebData webData);
    public WebData findByType(String type);
}

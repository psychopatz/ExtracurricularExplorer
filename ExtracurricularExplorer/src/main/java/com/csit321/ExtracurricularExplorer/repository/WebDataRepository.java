package com.csit321.ExtracurricularExplorer.repository;

import com.csit321.ExtracurricularExplorer.model.WebData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface WebDataRepository extends JpaRepository<WebData,Integer> {
    @Query(value = "SELECT data FROM WebData data WHERE data.type = ?1")
    WebData findByType (String type) ;


}

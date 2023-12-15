package com.csit321.ExtracurricularExplorer.repository;

import com.csit321.ExtracurricularExplorer.model.EventData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventDataRepository extends JpaRepository<EventData, Integer> {
}

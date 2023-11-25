package com.csit321.ExtracurricularExplorer.repository;

import com.csit321.ExtracurricularExplorer.model.Moderator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModeratorRepository extends JpaRepository<Moderator,Integer> {
}

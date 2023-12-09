package com.csit321.ExtracurricularExplorer.repository;

import com.csit321.ExtracurricularExplorer.model.FileData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FileDataRepository extends JpaRepository<FileData,Integer> {
    Optional<FileData> findByName(String fileName);
}
package com.csit321.ExtracurricularExplorer.service;

import com.csit321.ExtracurricularExplorer.model.FileData;
import com.csit321.ExtracurricularExplorer.model.ImageData;
import com.csit321.ExtracurricularExplorer.repository.FileDataRepository;
import com.csit321.ExtracurricularExplorer.repository.StorageRepository;
import com.csit321.ExtracurricularExplorer.util.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class StorageServiceImpl implements StorageService {

    @Autowired
    private StorageRepository repository;

    @Autowired
    private FileDataRepository fileDataRepository;

    private final String FOLDER_PATH = System.getProperty("user.dir")+"\\ExtracurricularExplorer\\src\\main\\resources\\images\\";

    @Override
    public String uploadImage(MultipartFile file) throws IOException {
        if (fileDataRepository.findByName(file.getOriginalFilename()).isPresent()){
            return "Error Filename Already Exist : " + file.getOriginalFilename();
        }
        ImageData imageData = repository.save(ImageData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(ImageUtils.compressImage(file.getBytes())).build());
        if (imageData != null) {
            return "file uploaded successfully : " + file.getOriginalFilename();
        }
        return null;
    }


    @Override
    public byte[] downloadImage(String fileName) {
        Optional<ImageData> dbImageData = repository.findByName(fileName);
        byte[] images = ImageUtils.decompressImage(dbImageData.get().getImageData());
        return images;
    }


    @Override
    public String uploadImageToFileSystem(MultipartFile file) throws IOException {
        if (fileDataRepository.findByName(file.getOriginalFilename()).isPresent()){
            System.out.println("Found");
            return "Error Filename Already Exist : " + file.getOriginalFilename();
        }
        System.out.println(fileDataRepository.findByName(file.getOriginalFilename()).isPresent());
        System.out.println(file.getOriginalFilename());
        System.out.println("notFound");
        String filePath = FOLDER_PATH + file.getOriginalFilename();
        FileData fileData = fileDataRepository.save(FileData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .filePath(filePath).build());

        file.transferTo(new File(filePath));

        if (fileData != null) {
            return "file uploaded successfully : " + filePath;
        }
        return null;
    }

    @Override
    public byte[] downloadImageFromFileSystem(String fileName) throws IOException {
        Optional<FileData> fileData = fileDataRepository.findByName(fileName);
        String filePath = fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }
}
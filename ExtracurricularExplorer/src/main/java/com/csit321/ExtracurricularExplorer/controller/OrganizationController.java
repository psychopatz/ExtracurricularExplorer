package com.csit321.ExtracurricularExplorer.controller;

import com.csit321.ExtracurricularExplorer.model.Organization;
import com.csit321.ExtracurricularExplorer.service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/org")
public class OrganizationController {

    @Autowired
    private OrganizationService organizationService;


    @PostMapping("/add")
    public String add(@RequestBody Organization organization) {
        organizationService.save(organization);
        return "New moderator successfully added";
    }

    @GetMapping("/getAll")
    public List<Organization> list() {
        return organizationService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Organization> get(@PathVariable Integer id) {
        try {
            Organization organization = organizationService.get(id);
            return new ResponseEntity<Organization>(organization, HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Organization>(HttpStatus.NOT_FOUND);

        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Organization> update(@RequestBody Organization organization, @PathVariable Integer id) {
        try {
            Organization existingOrganization = organizationService.get(id);
            organizationService.save(organization);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (NoSuchElementException e) {
            return new ResponseEntity<Organization>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        String message = "Organization ID:";
        try {
            Organization organization = organizationService.get(id);
            organizationService.delete(id);
            message = message + id + " Deleted Successfully.";

        } catch (NoSuchElementException e) {
            message = message + id + " doesn't exist.";
        }
        return message;
    }
}

package com.csit321.ExtracurricularExplorer.controller;

import com.csit321.ExtracurricularExplorer.model.Moderator;
import com.csit321.ExtracurricularExplorer.service.ModeratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private ModeratorService moderatorService;

    @GetMapping(path = "/verify")
    Integer moderatorId (@RequestParam String email, @RequestParam String password) {
        Moderator data = moderatorService.findByEmail(email);
        int moderatorId = -1;
        if(data!= null){
            if(password.equals(data.getPassword())){
                moderatorId = data.getId();
                System.out.println("FOOTA");
            }
            System.out.println("enamo");
        }
        System.out.println("FOOTAMo");
        return moderatorId;
    }

}



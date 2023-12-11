package com.csit321.ExtracurricularExplorer.controller;

import com.csit321.ExtracurricularExplorer.model.Moderator;
import com.csit321.ExtracurricularExplorer.service.ModeratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/login")
public class LoginController {
    @Autowired
    private ModeratorService moderatorService;

    @PostMapping(path = "/verify")
    String moderatorId (@RequestBody Moderator moderator) {
        int moderatorCurrentId = -1; // Not Found
        Moderator data = moderatorService.findByEmail(moderator.getEmail());

        if(data!= null){
            System.out.println("Moderator:");
            System.out.println(moderator.getEmail());
            System.out.println(data.getPassword());
            System.out.println(data.getId());
            moderatorCurrentId = -2; //Invalid Password
            System.out.println(moderator.getPassword().equals(data.getPassword()));
            if(moderator.getPassword().equals(data.getPassword())){
                moderatorCurrentId = data.getId();

            }

        }
        System.out.println("output = "+moderatorCurrentId);
        return String.valueOf(moderatorCurrentId);
    }


}



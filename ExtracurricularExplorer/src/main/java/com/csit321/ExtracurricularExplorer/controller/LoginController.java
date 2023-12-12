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
    Moderator moderatorId(@RequestBody Moderator moderator) {
        Moderator moderatorCurrentId = new Moderator();
        moderatorCurrentId.setId(-2);// Not Found
        Moderator data = moderatorService.findByEmail(moderator.getEmail());

        if(data!= null){
            System.out.println("Moderator:");
            System.out.println(moderator.getEmail());
            System.out.println(data.getPassword());
            System.out.println(data.getId());
            moderatorCurrentId.setId(-1); //Invalid Password
            System.out.println(moderator.getPassword().equals(data.getPassword()));
            if(moderator.getPassword().equals(data.getPassword())){
                moderatorCurrentId = data;

            }

        }
        System.out.println("output = "+moderatorCurrentId);
        return moderatorCurrentId;
    }


}



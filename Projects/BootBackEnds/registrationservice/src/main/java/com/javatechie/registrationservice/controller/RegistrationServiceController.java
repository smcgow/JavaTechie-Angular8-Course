package com.javatechie.registrationservice.controller;

import com.javatechie.registrationservice.model.User;
import com.javatechie.registrationservice.service.RegistrationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RegistrationServiceController
{
    RegistrationService registrationService;

    public RegistrationServiceController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @GetMapping("/findAllUsers")
    public List<User> findAllUsers(){
        return this.registrationService.findAllUsers();
    }

    @PostMapping("/register")
    public String register(@RequestBody User user){
        return this.registrationService.register(user);
    }

    @GetMapping("/findUser/{email}")
    public User findUser(@PathVariable String email){
        return this.registrationService.findUser(email);
    }

    @DeleteMapping("/cancel/{id}")
    public void cancelRegistration(@PathVariable Integer id) {
        this.registrationService.cancelRegistration(id);
    }
}



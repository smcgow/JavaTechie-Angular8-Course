package com.javatechie.spring.security.api.controller;

import com.javatechie.spring.security.api.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@CrossOrigin("*")
public class ApplicationController {

    @GetMapping("/")
    public String login(){
        return "Authenticated Successfully";
    }

    @GetMapping("/getUsers")
    public List<User> getUsers(){
        return Stream.of(new User(108,"stephen","stephen@gmail.com","9087654321"),
                new User(101,"aoife","aoife@gmail.com","8867101121")).
                collect(Collectors.toList());
    }

}

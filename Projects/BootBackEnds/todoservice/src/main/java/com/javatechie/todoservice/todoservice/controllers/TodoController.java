package com.javatechie.todoservice.todoservice.controllers;

import com.javatechie.todoservice.todoservice.model.Todo;
import com.javatechie.todoservice.todoservice.service.TodoOnlineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {

    private final TodoOnlineService todoOnlineService;

    public TodoController(@Autowired TodoOnlineService todoOnlineService) {
        this.todoOnlineService = todoOnlineService;
    }

    @CrossOrigin("http://localhost:4200")
    @GetMapping("getTodos")
    List<Todo> getTodos(){
        return todoOnlineService.getTodos();
    }
}

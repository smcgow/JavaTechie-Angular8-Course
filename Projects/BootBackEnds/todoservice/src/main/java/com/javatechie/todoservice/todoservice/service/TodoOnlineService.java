package com.javatechie.todoservice.todoservice.service;

import com.javatechie.todoservice.todoservice.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TodoOnlineService {


    private final RestTemplate todoTemplate;

    public TodoOnlineService(@Autowired RestTemplate todoTemplate){
        this.todoTemplate = todoTemplate;
    }

    String apiUrl = "https://my.api.mockaroo.com/todos.json?key=1ae0ca40";

    public List<Todo> getTodos() {
        ResponseEntity<Todo[]> response = todoTemplate.getForEntity(apiUrl,Todo[].class);
        if(null != response.getBody()) {
            return Arrays.asList(response.getBody());
        }
        return new ArrayList<>();
    }
}

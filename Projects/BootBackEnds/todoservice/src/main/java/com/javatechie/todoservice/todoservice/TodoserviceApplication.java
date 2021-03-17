package com.javatechie.todoservice.todoservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class TodoserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoserviceApplication.class, args);
    }

    @Bean
    RestTemplate todoTemplate(){
        return new RestTemplate();
    }
}

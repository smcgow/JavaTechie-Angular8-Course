package com.javatechie.todoservice.todoservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    private Integer id;
    private Boolean completed;
    private String text;
    private String email;
    private String mobile;
}

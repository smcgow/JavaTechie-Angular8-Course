package com.javatechie.todoservice.todoservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    private Integer id;
    private Boolean completed;
    private String text;
    private String email;
    private String mobile;
    private Date dueDate;
    private Integer score1;
    private Integer score2;
    private Integer score3;
}

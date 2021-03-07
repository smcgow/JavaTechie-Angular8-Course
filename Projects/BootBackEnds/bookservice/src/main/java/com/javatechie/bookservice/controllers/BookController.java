package com.javatechie.bookservice.controllers;

import com.javatechie.bookservice.model.Book;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    @CrossOrigin("http://localhost:50978")
    @GetMapping("/findAllBooks")
    public List<Book> getBooks() {

        return List.of(new Book(1, "Shawshank", 12.50),
                new Book(2, "pulp fiction", 14.50),
                new Book(3, "Rome and juliet", 17.90));
    }
}

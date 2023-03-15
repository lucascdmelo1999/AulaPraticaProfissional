package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test_controller {

    @RequestMapping(value = "/rx/{id}", method = RequestMethod.GET)
    public String texto (@PathVariable("id") Integer id){
        if(id <= 0){
            return String.format("Erro", HttpStatus.NOT_FOUND);
        }
        return String.format("tudo certo", HttpStatus.OK);
    }
}

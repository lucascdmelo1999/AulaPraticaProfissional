package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CadastrosModel;

@CrossOrigin
@RestController
@RequestMapping("cadas")
public class CadastrosController {
    @GetMapping
    public List<CadastrosModel> getcadas(){
        List<CadastrosModel>lista_cads = new ArrayList<CadastrosModel>();
        lista_cads.add(new CadastrosModel(23, "lucas melo", "9999999999", "lucasmelo@gmail.com"));
        return lista_cads;
    }

}




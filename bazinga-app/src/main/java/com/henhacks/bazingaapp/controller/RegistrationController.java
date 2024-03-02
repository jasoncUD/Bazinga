package com.henhacks.bazingaapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.henhacks.bazingaapp.model.User;
import com.henhacks.bazingaapp.service.RegisterService;

@RestController
@RequestMapping("/register")
@CrossOrigin(origins = {"http://localhost:3000"})
public class RegistrationController {

    @Autowired
    private RegisterService registerService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User savedUser = registerService.registerUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }
    
}

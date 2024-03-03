package com.henhacks.bazingaapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henhacks.bazingaapp.model.User;
import com.henhacks.bazingaapp.service.UserService;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = {"http://localhost:3000"})
public class LoginController {
    @Autowired
    private UserService userService;
   
    @PostMapping
    public ResponseEntity<User> login(@RequestBody User user) {
        System.out.println(user);
        return userService.login(user.getUsername(), user.getPassword())
                .map(userFound -> new ResponseEntity<>(userFound, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.UNAUTHORIZED));
    }
}

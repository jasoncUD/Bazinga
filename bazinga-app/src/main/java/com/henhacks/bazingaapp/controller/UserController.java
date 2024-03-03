package com.henhacks.bazingaapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.henhacks.bazingaapp.model.UpdateIncompleteCoursesRequest;
import com.henhacks.bazingaapp.model.User;
import com.henhacks.bazingaapp.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {

    @Autowired
    private UserService userService;
    
    @PostMapping("/incompleteCourses")
    public ResponseEntity<User> updateIncompleteCourses(@RequestBody UpdateIncompleteCoursesRequest request) {
        Optional<User> updatedUser = userService.updateIncompleteCourses(request.getId(), request.getTopics());
        return ResponseEntity.ok(updatedUser.get());
    }

}

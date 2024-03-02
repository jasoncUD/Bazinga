package com.henhacks.bazingaapp.model;

import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.*;

import lombok.Getter;
import lombok.Setter;

@Document
@Getter
@Setter
public class User {
    @Id
    private String userId;

    @JsonProperty
    private String username;

    @JsonProperty
    private String password;

    @JsonProperty
    private int gradeLevel;
    
    @JsonProperty
    private int age;

    public User(@JsonProperty("username") String username, @JsonProperty("password") String password, @JsonProperty("gradeLevel") int gradeLevel, @JsonProperty("age") int age) {
        this.username = username;
        this.password = password;
        this.gradeLevel = gradeLevel;
        this.age = age;
    }
    
}

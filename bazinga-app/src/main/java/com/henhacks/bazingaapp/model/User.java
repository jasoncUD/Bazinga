package com.henhacks.bazingaapp.model;

import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    private String userId;

    @JsonProperty("username")
    private String username;

    @JsonProperty("password") 
    private String password;

    @JsonProperty("gradeLevel") 
    private int gradeLevel;
    
    @JsonProperty("age")
    private int age;

}

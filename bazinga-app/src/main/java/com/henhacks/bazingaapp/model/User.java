package com.henhacks.bazingaapp.model;

import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.*;
import com.mongodb.lang.NonNull;

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

    @NonNull
    @JsonProperty("name")
    private String name;

    @NonNull
    @JsonProperty("username")
    private String username;

    @NonNull
    @JsonProperty("password") 
    private String password;

    @NonNull
    @JsonProperty("email")
    private String email;

    @NonNull
    @JsonProperty("gradeLevel") 
    private int gradeLevel;
    
    @NonNull
    @JsonProperty("age")
    private int age;

    @JsonProperty("completedCourses")
    private String[] completedCourses;

    @JsonProperty("incompleteCourses")
    private String[] incompleteCourses;

    @JsonProperty("categories")
    private Categories[] categories;

    @JsonProperty("voiceActor")
    private String voiceActor;


}

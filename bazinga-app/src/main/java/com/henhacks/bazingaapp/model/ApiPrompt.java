package com.henhacks.bazingaapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class ApiPrompt {

    @JsonProperty("subject")
    private String subject;

    @JsonProperty("age")
    private int age;

    @JsonProperty("gradeLevel")
    private String gradeLevel;

}

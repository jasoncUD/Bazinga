package com.henhacks.bazingaapp.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Categories {
    @JsonProperty("name")
    private String name;
    
    @JsonProperty("correct")
    private int correct;

    @JsonProperty("incorrect")
    private int incorrect;

    @JsonProperty("questions")
    private List<Questions> questions;
}

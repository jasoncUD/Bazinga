package com.henhacks.bazingaapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Questions {

    @JsonProperty("question")
    private String question;

    @JsonProperty("option1")
    private String option1;

    @JsonProperty("option2")
    private String option2;
    
    @JsonProperty("option3")
    private String option3;

    @JsonProperty("answer")
    private String answer;
    
    @JsonProperty("feedback")
    private String feedback;
}

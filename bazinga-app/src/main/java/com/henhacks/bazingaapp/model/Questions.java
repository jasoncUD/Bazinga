package com.henhacks.bazingaapp.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Questions {

    @JsonProperty("question")
    private String question;

    @JsonProperty("options")
    private String[] options;

    @JsonProperty("answer")
    private String answer;
    
    @JsonProperty("feedback")
    private String feedback;
}

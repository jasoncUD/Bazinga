package com.henhacks.bazingaapp.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatRequest {

    private String prompt;

    public ChatRequest() {}

    public ChatRequest(@JsonProperty("prompt") String prompt) {
        this.prompt = prompt;
    }

}
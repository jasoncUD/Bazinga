package com.henhacks.bazingaapp.controller;

import org.springframework.web.bind.annotation.*;

import com.henhacks.bazingaapp.model.ApiPrompt;
import com.henhacks.bazingaapp.service.OpenAIService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/chatgpt")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ChatController {

    @Autowired
    private OpenAIService openAIService;

    @PostMapping("/ask")
    public ResponseEntity<String> askChatGPT(@RequestBody ApiPrompt apiPrompt) {
        String openAIResponse = openAIService.getResponseFromOpenAI(apiPrompt);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        return new ResponseEntity<>(openAIResponse, headers, HttpStatus.OK);
    }
}